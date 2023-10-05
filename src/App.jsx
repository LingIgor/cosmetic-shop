import { Home } from './pages/Home/Home';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { Catalog } from 'pages/Home/Catalog';
// import { Favorites } from 'pages/Favorites';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        {/* <Route path="/favorites" element={<Favorites cars={cars} />} /> */}
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
