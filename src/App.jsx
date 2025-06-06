import { useState, useEffect } from 'react';
import NavigationBar from './components/NavigationBar/NavigationBar';
import LoadingPage from './components/LoadingPage';
import AppRouter from './router/AppRouter'; 
import './app.css';

function App() {
  // 所有 Hooks 都放在顶层
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      return storedTheme;
    }
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  });

  useEffect(() => {
    // 模拟数据加载
    const timer = setTimeout(() => { // 将 setTimeout 赋值给 timer
      setIsLoading(false);
    }, 3000); // 3秒后停止加载
    return () => clearTimeout(timer); // 清理函数
  }, []); // 空依赖数组，确保只在挂载和卸载时运行

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // 条件渲染放在所有 Hooks 调用之后
  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <>
      <div className="nav">
        <NavigationBar theme={theme} toggleTheme={toggleTheme} />
      </div>
      
      <AppRouter />
    </>
  );
}

export default App
