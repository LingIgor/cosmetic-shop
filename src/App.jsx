import { Home } from './pages/Home/Home';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { Catalog } from 'pages/Home/Catalog';
import { useState } from 'react';
import ModalLogin from 'components/Modal/ModalLogin/ModalLogin';
import ModalCart from 'components/Modal/ModalCart/ModalCart';
import ModalFavorite from 'components/Modal/ModalFavorite/ModalFavorite';
import { DeliveryAndPay } from 'pages/Home/Delivery';
import { AgreementPage } from 'pages/AgreementPage';


export const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isCart, setIsCart] = useState(false)
  const [isFavorite, setIsFavorite] = useState(false)
  // const {favorite, cart} = useSelector(state => state);

  const openModal = (iconType) => {
    if (iconType === "BsHandbag") {      
      setIsCart(true);
    }
    if (iconType === "CiUser") {      
      setModalOpen(true);
    }      
    if (iconType === "AiFillHeart") {      
      setIsFavorite(true);
    } 
  };

  
const closeCartModal = () => {
  setIsCart(false)
}
  const closeModal = () => {
    setModalOpen(false);

  };
  const closeFavorite = () => {
  
    setIsFavorite(false);

  };

  const handleRegister = userData => {
    // Логика обработки успешной регистрации, например, отправка данных на сервер
    console.log('User registered:', userData);
  };

  return (
    <div>
      {isModalOpen && (
        <ModalLogin closeModal={closeModal} handleRegister={handleRegister} />
      )}

      {isCart  &&(
        <ModalCart closeModal={closeCartModal}/>
      )}

      {isFavorite && (<ModalFavorite closeModal={closeFavorite}/>)}

      <Routes>
        <Route path="/" element={<Layout openModal={openModal} />}>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/delivery" element={<DeliveryAndPay/>} />    
          <Route path="/agreement" element={<AgreementPage/>} />          
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </div>
  );
};
