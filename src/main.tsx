import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Gallery } from './pages/Gallery';
import { ArtworkDetail } from './pages/ArtworkDetail';
import { BehindTheCurtain } from './pages/BehindTheCurtain';
import { StoryPage } from './pages/StoryPage';
import { MeetTheArtist } from './pages/MeetTheArtist';
import { Inquiries } from './pages/Inquiries';
import { NotFound } from './pages/NotFound';
import './styles/global.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="gallery/:slug" element={<ArtworkDetail />} />
          <Route path="behind-the-curtain" element={<BehindTheCurtain />} />
          <Route path="behind-the-curtain/:slug" element={<StoryPage />} />
          <Route path="artist" element={<MeetTheArtist />} />
          <Route path="inquiries" element={<Inquiries />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
