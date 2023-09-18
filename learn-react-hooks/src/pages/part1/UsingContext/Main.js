import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import { mainTheme } from './theme';

export default function Main() {
  const { isDarkMode } = useContext(ThemeContext);
  return <main style={{ flex: 1, ...mainTheme(isDarkMode) }}>Main</main>;
}
