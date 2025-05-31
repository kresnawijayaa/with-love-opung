import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Template1 from '../pages/Template1';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Template1 />} />
    </Routes>
  );
};

export default AppRoutes;
