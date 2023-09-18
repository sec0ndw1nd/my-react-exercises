import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import { theme } from './theme';

export default function Footer() {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <footer style={{ border: '1px solid black', height: '50px', ...theme(isDarkMode) }}>
      <div>Footer - Theme: {isDarkMode ? 'Dark mode' : 'Light mode'}</div>
    </footer>
  );
}
