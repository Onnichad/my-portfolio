import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem('theme') || 'dark'
  );
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
      aria-label="Basculer thème"
    >
      {theme === 'dark' ? '☾' : '☼'}
    </button>
  );
}
