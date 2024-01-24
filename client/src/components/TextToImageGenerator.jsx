// image-gen/client/src/components/TextToImageGenerator.jsx

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import { getRandomPrompt } from '../utils';
import preview from '../assets/preview.png';
import FormField from './FormField';
import Loader from './Loader';

import './TextToImageGenerator.scss';

export const TextToImageGenerator = () => {
  //generating and submitting images using the DALL-E model (a neural network for generating images from textual descriptions).

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    prompt: '',
    photo: '',
  });

  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSurpriseMe = () => {
    const randomPrompt = getRandomPrompt(form.prompt);
    setForm({ ...form, prompt: randomPrompt });
  };

  const generateImage = async () => {
    if (form.prompt) {
      try {
        setGeneratingImg(true);
        const response = await fetch(
          // Correct endpoint for image generation
          'http://localhost:8090/api/v1/dalle',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              prompt: form.prompt,
            }),
          }
        );

        const data = await response.json();
        setForm({ ...form, photo: `data:image/jpeg;base64,${data.photo}` });
      } catch (err) {
        alert(err);
      } finally {
        setGeneratingImg(false);
      }
    } else {
      alert('Please provide proper prompt');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.prompt && form.photo) {
      setLoading(true);

      try {
        const response = await fetch('http://localhost:8090/api/v1/post', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ ...form }),
        });

        // Handle non-success responses
        if (!response.ok) {
          throw new Error(`Server responded with ${response.status} status`);
        }

        // Only try to parse json if response is ok
        const data = await response.json();

        alert('Success');
        navigate('/');
      } catch (err) {
        // Log useful debug info
        console.log('Error creating post', err);

        // Show generic alert
        alert('Error creating post - please try again');
      } finally {
        setLoading(false);
      }
    } else {
      alert('Please generate an image with proper details');
    }
  };
  return (
    <main className='main2'>
      <Header />
      <section className='generatorcontainer'>
        <section className='teste'>
          <h2 className='create-your-text-container'>
            <span>{`Create your text to image with the `}</span>
            <span className='generator'>Generator</span>
          </h2>
          <p className='easily-turn-your'>
            Easily turn your ideas into stunning visuals using the AI Generator.
            Just enter your text, pick a style, and see your imagination come
            alive!
          </p>
          <p className='note-we-are'>
            Note: we are not affiliated with any of the image generation
            engines, therefore the generator may contain flaws and images for
            commercial purposes are not allowed
          </p>
        </section>

        <form className='formToGenerate' onSubmit={handleSubmit}>
          <div className='form-generator'>
            <FormField
              labelName='Prompt&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;or ->'
              type='text'
              name='prompt'
              placeholder='An Impressionist oil painting of sunflowers in a purple vase…'
              value={form.prompt}
              handleChange={handleChange}
              isSurpriseMe
              handleSurpriseMe={handleSurpriseMe}
            />

            <div className='photo-container '>
              {form.photo ? (
                <img
                  src={form.photo}
                  alt={form.prompt}
                  className='my-generated-image'
                />
              ) : (
                <img src={preview} alt='preview' className='my-image' />
              )}

              {generatingImg && (
                <div className='my-overlay'>
                  <Loader />
                </div>
              )}
            </div>
          </div>

          <div className='my-flex-container'>
            <button
              type='button'
              onClick={generateImage}
              className='generateImage'>
              {generatingImg ? 'Generating...' : 'Generate'}
            </button>
          </div>

          <div className='my-div'>
            <p className='my-paragraph'>
              ** Once you have created the image you want, you can share it with
              others in the community **
            </p>
            <button type='submit' className='SharingButton'>
              {loading ? 'Sharing...' : 'Share with the Community'}
            </button>
          </div>
        </form>
      </section>
    </main>
  );
};
