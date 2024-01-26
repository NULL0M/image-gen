// image-gen/client/src/components/WhatIsAiImageGeneratorContainer.jsx

import './WhatIsAiImageGeneratorContainer.scss';
import number1 from '../assets/number1-1@2x.png';
import number2 from '../assets/number2-1@2x.png';
import number3 from '../assets/number3-1@2x.png';

export const WhatIsAiImageGeneratorContainer = () => {
  return (
    <section className='whatisgeneratorcontainer'>
      <div className='whatisgeneratorexplain'>
        <h2 className='what-is-ai-container'>
          <span>{`What is AI image `}</span>
          <span className='ai'>Generator</span>
          <span>?</span>
        </h2>
        <p className='an-ai-image'>
          An AI image generator, or AI image generator model, is a type of
          artificial intelligence system designed to create or generate images
          autonomously. These systems use advanced algorithms, often based on
          deep learning neural networks, to understand patterns and features in
          existing images and then generate new, similar images.
        </p>
      </div>
      <div className='whatisgeneratorhowto'>
        <h2 className='how-to-make-container'>
          <span>{`How to Make `}</span>
          <span className='ai'>AI</span>
          <span>{` Generated `}</span>
          <span className='ai'>images</span>
          <span>?</span>
        </h2>
        <div className='frame-parent'>
          <div className='number1-1-parent'>
            <img className='number1-1-icon' alt='' src={number1} />
            <p className='think-of-a'>
              Think of a detailed text description of the image you want to
              create, specify a style like oil painting or anime, and any other
              settings
            </p>
          </div>
          <div className='number2-1-parent'>
            <img className='number1-1-icon' alt='' src={number2} />
            <p className='think-of-a'>
              Then enter your prompt and generate your image. Choose the best
              one, refine it in an editing program if necessary, and add your
              unique touch with elements like text or drawings.
            </p>
          </div>
          <div className='number3-1-parent'>
            <img className='number1-1-icon' alt='' src={number3} />
            <p className='think-of-a'>
              With the right prompts, you can create amazing AI Images, and have
              fun.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
