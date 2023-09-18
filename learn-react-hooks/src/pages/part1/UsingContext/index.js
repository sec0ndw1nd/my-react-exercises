import { useState } from 'react';
import { ThemeContext } from './ThemeContext';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function Layout() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '50vh',
      }}
    >
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default function UsingContext() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const onToggleTheme = () => setIsDarkMode((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ isDarkMode, onToggleTheme }}>
      <Layout />
    </ThemeContext.Provider>
  );
}
