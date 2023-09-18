import { useContext } from 'react';
import { theme } from './theme';
import { ThemeContext } from './ThemeContext';

export default function Header() {
  const { isDarkMode, onToggleTheme } = useContext(ThemeContext);

  return (
    <header style={{ border: '1px solid black', height: '50px', ...theme(isDarkMode) }}>
      <span>Header</span>
      <button style={{ marginLeft: '10px' }} onClick={onToggleTheme}>
        Toggle Theme
      </button>
    </header>
  );
}
