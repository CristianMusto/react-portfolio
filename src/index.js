import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import Container from './Components/Helpers/Container/Container';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Container>
      <App />
    </Container>
);
