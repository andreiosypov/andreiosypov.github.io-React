import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import App from './App';
import ArtGallery from './components/Pages/ArtGallery';
import NotFound from './components/Pages/NotFound';
import Contact from './components/Pages/Contact';

import Artwork from './components/Tiles/Artwork';

require('@elastic/eui/dist/eui_theme_light.css');

const rootElement = document.getElementById('root');
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}>
        <Route path="gallery" element={<ArtGallery/>}>
          <Route path=":artworkId" element={<Artwork/>}/>
        </Route>
        <Route path="contact" element={<Contact/>}/>
      </Route>

      <Route path="*" element={<NotFound/>}/>
    </Routes>
  </BrowserRouter>,
  rootElement
);

export default Routes;