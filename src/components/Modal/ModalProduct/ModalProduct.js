import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import {AiOutlineCloseCircle} from "react-icons/ai"

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  
  
`;

const ModalContent = styled.div`
  background: #fff;
  width: 70vw;
  height: 80vh;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
  display: flex;
  position: relative;
  
  
`;

const ImageContainer = styled.div`
  width: 40%;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const InfoContainer = styled.div`
  padding: 20px;
  width: 60%;
`;

const ExpandableSection = styled.div`
  margin-top: 10px;
  cursor: pointer;

  p {
    margin: 0;
  }
`;

const Button = styled.button`
  background-color: #3498db;
  color: #fff;
  border: none;
  padding: 10px;
  cursor: pointer;
`;

const ProductModal = ({ closeModal, el }) => {
    const [isExpanded, setIsExpanded] = useState(false);

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
        closeModal()        
        console.log("yes")
      }
    };


    const {name, price, volume, img, category, description} =  el

    const handleToggleExpand = () => {
      setIsExpanded(!isExpanded);
    };
    // Ваш існуючий код
  
    return createPortal(
      <ModalWrapper onClick={handleBackdropClick} >
        <ModalContent >
            <AiOutlineCloseCircle size={25} style={{position:"absolute", top:"0", right:"0",cursor:"pointer"}} onClick={closeModal}/>
          <ImageContainer>
            <Image src={img} alt="Product" />
          </ImageContainer>
          <InfoContainer>
            <h2>{name}</h2>
            <p>{category}</p>
            <p>{description}</p>
            <ExpandableSection>
              <p onClick={handleToggleExpand}>+ Склад</p>
              {isExpanded && <p>Детальний склад</p>}
            </ExpandableSection>
            <ExpandableSection>
              <p onClick={handleToggleExpand}>+ Спосіб застосування</p>
              {isExpanded && <p>Детальний спосіб застосування</p>}
            </ExpandableSection>
            <p>{volume} (ml)</p>
            <p>{price}</p>
            <Button>Додати в корзину</Button>
          </InfoContainer>
        </ModalContent>
      </ModalWrapper>,
      document.getElementById('portal-root-product')
    );
  };

export default ProductModal