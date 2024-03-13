import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { createTheme, MantineProvider } from '@mantine/core';

const theme = createTheme({
  primaryColor: 'orange',
  colors: {
    dark: [
      '#d5d7e0',
      '#acaebf',
      '#8c8fa3',
      '#666980',
      '#4d4f6683', // bordure
      '#34354a',
      '#2b2c3d',
      '#000000', //bg
      '#0c0d21',
      '#01010a',
    ],
    orange: [
      '#d5d7e0',
      '#acaebf',
      '#8c8fa3',
      '#806666',
      '#e0dfdd', // Badge
      '#34354a',
      '#2b2c3d',
      '#000000', 
      '#e0dfdd', //Primary
      '#ffffff', // Hover
    ]
  },
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MantineProvider defaultColorScheme="dark" theme={theme}>
        <App />
      </MantineProvider>
    </BrowserRouter>
  </React.StrictMode>
);
