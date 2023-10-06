import { Home } from './pages/Home/Home';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { Catalog } from 'pages/Home/Catalog';
import { useState } from 'react';
import LoginModal from 'components/Modal/ModalLogin/LoginModal';
// import { Favorites } from 'pages/Favorites';

export const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleRegister = userData => {
    // Логика обработки успешной регистрации, например, отправка данных на сервер
    console.log('User registered:', userData);
  };

  return (
    <div>
      {isModalOpen && (
        <LoginModal closeModal={closeModal} handleRegister={handleRegister} />
      )}


      <Routes>
        <Route path="/" element={<Layout openModal={openModal} />}>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </div>
  );
};
