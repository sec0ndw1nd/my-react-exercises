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
        {(isPartOne ? navList[0] : navList[1]).map((nav) => (
          <NavLink
            key={`nav-${nav}`}
            to={`/part${(isPartOne ? '1/' : '2/') + nav}`}
            className={({ isActive }) => (isActive ? 'active' : 'nav-item')}
          >
            {`use${nav.split('using')[1]}`}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}

export default Header;
