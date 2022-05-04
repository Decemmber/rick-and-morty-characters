import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components';
import { Main, Favorites } from './pages';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </>
  );
}

export default App;
