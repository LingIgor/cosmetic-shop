import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import LoginForm from 'components/Signin/Signin';
import RegistrForm from 'components/Signup/Signup';

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const LoginModal = ({ closeModal, handleRegister }) => {
  const [isLoginFormVisible, setLoginFormVisible] = useState(true);

  useEffect(() => {
    const handleEscape = event => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [closeModal]);

  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  const switchToRegister = () => {
    setLoginFormVisible(!isLoginFormVisible);
  };

  const handleLogin = () => {
    closeModal();
  };

  return createPortal(
    <ModalWrapper onClick={handleBackdropClick}>
      <ModalContent>
        {isLoginFormVisible ? (
          <LoginForm
            onLogin={handleLogin}
            onSwitchToRegister={switchToRegister}
          />
        ) : (
          <RegistrForm
            onRegistr={handleRegister}
            onSwitchToRegister={switchToRegister}
          />
        )}
      </ModalContent>
    </ModalWrapper>,
    document.getElementById('portal-root')
  );
};

export default LoginModal;
