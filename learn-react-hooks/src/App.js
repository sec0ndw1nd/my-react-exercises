// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import UsingRef from './pages/part1/UsingRef';
import UsingCallback from './pages/part1/UsingCallback';
import UsingMemo from './pages/part1/UsingMemo';
import UsingEffect from './pages/part1/UsingEffect';
import UsingLayoutEffect from './pages/part1/UsingLayoutEffect';
import UsingContext from './pages/part1/UsingContext';
import UsingReducer from './pages/part1/UsingReducer';
import UsingImperativeHandle from './pages/part2/UsingImperativeHandle';
import UsingDebugValue from './pages/part2/UsingDebugValue';
import UsingId from './pages/part2/UsingId';
import UsingDeferredValue from './pages/part2/UsingdeferredValue';
import UsingInsertionEffect from './pages/part2/UsingInsertionEffect';
import UsingSyncExternalStore from './pages/part2/UsingSyncExternalStore';
import UsingTransition from './pages/part2/UsingTransition';
import { useState } from 'react';

const navList = [
  [
    'usingRef',
    'usingCallback',
    'usingMemo',
    'usingEffect',
    'usingLayoutEffect',
    'usingContext',
    'usingReducer',
  ],
  [
    'usingImperativeHandle',
    'usingDebugValue',
    'usingId',
    'usingDeferredValue',
    'usingInsertionEffect',
    'usingSyncExternalStore',
    'usingTransition',
  ],
];
const routesComponents = {
  UsingRef,
  UsingCallback,
  UsingMemo,
  UsingEffect,
  UsingLayoutEffect,
  UsingContext,
  UsingReducer,
  UsingImperativeHandle,
  UsingDebugValue,
  UsingId,
  UsingDeferredValue,
  UsingInsertionEffect,
  UsingSyncExternalStore,
  UsingTransition,
};

function App() {
  const [isPartOne, setIsPartOne] = useState(true);

  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <button className="nav-btn" onClick={() => setIsPartOne((prev) => !prev)}>
            Part {isPartOne ? '1' : '2'}
          </button>
          <nav className="nav-list">
            {(isPartOne ? navList[0] : navList[1]).map((nav) => (
              <Link
                key={`nav-${nav}`}
                to={`/part${(isPartOne ? '1/' : '2/') + nav}`}
                className="nav-item"
              >
                {`use${nav.split('using')[1]}`}
              </Link>
            ))}
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          {navList.map((group, part) => {
            return group.map((menu) => {
              const compName = menu[0].toUpperCase() + menu.substring(1);
              const Component = routesComponents[compName];
              return (
                <Route
                  key={`route-${menu}`}
                  path={`/part${part + 1}/${compName}`}
                  element={<Component />}
                />
              );
            });
          })}
          <Route path="*" element={<>404 page not found</>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
