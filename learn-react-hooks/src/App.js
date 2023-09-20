import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
import ReactMemo from './pages/part1/ReactMemo';
import Header from './components/Header';
import CustomHooks from './pages/part1/CustomHooks';

const navList = [
  [
    'usingRef',
    'usingMemo',
    'usingCallback',
    'usingEffect',
    'usingLayoutEffect',
    'usingContext',
    'usingReducer',
    'reactMemo',
    'customHooks',
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
  UsingMemo,
  UsingCallback,
  UsingEffect,
  UsingLayoutEffect,
  UsingContext,
  UsingReducer,
  ReactMemo,
  CustomHooks,
  UsingImperativeHandle,
  UsingDebugValue,
  UsingId,
  UsingDeferredValue,
  UsingInsertionEffect,
  UsingSyncExternalStore,
  UsingTransition,
};

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header navList={navList} />
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
          <Route path="*" element={<div>404 page not found</div>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
