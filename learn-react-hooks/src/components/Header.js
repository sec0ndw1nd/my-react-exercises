import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Header({ navList }) {
  const [isPartOne, setIsPartOne] = useState(true);

  return (
    <header className="App-header">
      <button className="nav-btn" onClick={() => setIsPartOne((prev) => !prev)}>
        Part {isPartOne ? '1' : '2'}
      </button>
      <nav className="nav-list">
        {(isPartOne ? navList[0] : navList[1]).map((menu) => {
          const hookName = menu.split('using')[1];
          return (
            <NavLink
              key={`nav-${menu}`}
              to={`/part${(isPartOne ? '1/' : '2/') + menu}`}
              className={({ isActive }) => (isActive ? 'active' : 'nav-item')}
            >
              {hookName ? `use${hookName}` : menu}
            </NavLink>
          );
        })}
      </nav>
    </header>
  );
}

export default Header;
