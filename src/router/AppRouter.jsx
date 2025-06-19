import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import BlogPage from '../pages/BlogPage';
import BlogDetail from '../pages/BlogPage/components/BlogDetail';
import ProjectsPage from '../pages/ProjectsPage';
import ResourceSharingPage from '@/pages/ResourceSharingPage';
import ContactPage from '../pages/ContactPage';
import MessageWallPage from '../pages/MessageWallPage';
import NotFoundPage from '../components/NotFoundPage'; 

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/resource-sharing" element={<ResourceSharingPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/message-wall" element={<MessageWallPage />} />
      <Route path="/blog/:id" element={<BlogDetail />} />
      <Route path="*" element={<NotFoundPage />} /> 
    </Routes>
  );
}

export default AppRouter;
