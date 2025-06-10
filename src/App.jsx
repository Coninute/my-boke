import { useState, useEffect,useRef } from 'react';
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

  const [navDirection, setNavDirection] = useState('up');
  const lastScrollYRef = useRef(window.scrollY); // 使用 useRef 并初始化
  const navRef = useRef(null);
  const [pageHeight,setPageHeight] = useState(0);  // 记录页面视口100vh的高度
  useEffect(() => {
    const handleResize = () => {
      setPageHeight(window.innerHeight);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // 空依赖数组，effect 只在挂载和卸载时运行

  useEffect(() => {
    const scrollContainer = window; // 改为监听 window
    // 确保组件挂载时 lastScrollYRef.current 是最新的
    lastScrollYRef.current = scrollContainer.scrollY; // 使用 window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY; // scrollContainer 现在是 window
      if (currentScrollY > lastScrollYRef.current && currentScrollY > 100) {
        setNavDirection('down');
        window.scrollY > pageHeight-100 ? navRef.current.style.display = 'none' : navRef.current.style.display = 'block';
      } else if (currentScrollY < lastScrollYRef.current) {
        setNavDirection('up');
        navRef.current.style.display = 'block';
      }
      navRef.current.style.backgroundColor = currentScrollY > 150 ? 'white' : 'transparent';

      // 更新上次滚动位置
      lastScrollYRef.current = currentScrollY;
    };
    // 添加滚动事件监听器
    scrollContainer.addEventListener('scroll', handleScroll, { passive: true });
    // 清理函数
    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll); // window 对象总是存在，无需检查
    };
  }, [pageHeight]); // 当 pageHeight 变化时，重新创建滚动事件监听
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
    <div>
      <div className="nav" ref={navRef}>
        <NavigationBar theme={theme} toggleTheme={toggleTheme} />
      </div>
      <div className="content" >
        <AppRouter />
      </div>
    </div>
  );
}

export default App
