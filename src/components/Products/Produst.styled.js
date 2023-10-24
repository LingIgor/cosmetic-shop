import styled from "styled-components";




export const ProductCard = styled.div`
  width: 270px;
  height: 350px;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: 5px 5px 30px rgba(205 56 201 / 30%);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  div.product-details {
    position: absolute;
    top: 75%;
    width: 250px;
    left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    div {
      display: flex;
      justify-content: space-between;
      align-items: center;

      h2 {
        margin: 0;
        font-size: 25px;
      }
    }
  }
`;