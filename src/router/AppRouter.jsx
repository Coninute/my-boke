import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import BlogPage from '../pages/BlogPage';
import BlogDetail from '../pages/BlogPage/components/BlogDetail';
import ProjectsPage from '../pages/ProjectsPage';
import AIQueryPage from '../pages/AIQueryPage';
import ContactPage from '../pages/ContactPage';
import MessageWallPage from '../pages/MessageWallPage';
import NotFoundPage from '../components/NotFoundPage'; // 导入 NotFoundPage

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/ai-query" element={<AIQueryPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/message-wall" element={<MessageWallPage />} />
      <Route path="/blog1" element={<BlogDetail />} />
      <Route path="*" element={<NotFoundPage />} /> {/* 添加 404 路由 */}
    </Routes>
  );
}

export default AppRouter;
