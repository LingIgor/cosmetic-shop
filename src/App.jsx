import { Home } from './pages/Home/Home';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { Catalog } from 'pages/Home/Catalog';
import { useState } from 'react';
import LoginModal from 'components/Modal/ModalLogin/LoginModal';
import CartModal from 'components/Modal/ModalCart/ModalCart';
// import { Favorites } from 'pages/Favorites';

export const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isCart, setIsCart] = useState(false)

  const openModal = (iconType) => {
    if (iconType === "BsHandbag") {      
      setIsCart(true);
    }
    if (iconType === "CiUser") {      
      setModalOpen(true);
    }      
  };

  
const closeCartModal = () => {
  setIsCart(false)
}
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

      {isCart && (
        <CartModal closeModal={closeCartModal}/>
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
