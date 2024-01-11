// image-gen/client/src/main.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './global.scss';
import Container from './contexts/container.jsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Container>
      <App />
    </Container>
  </React.StrictMode>
);
