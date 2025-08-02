import styled from "styled-components";
import { colors } from "../../styles/colors";

const Layout = styled.div`
  background-color: ${colors["deep-purple"]};
  color: #fff;
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
`;

const SceneLayout = styled.div`
  width: 83%;
  margin: 0 auto;
  padding-top: 1rem;
  min-height: calc(100vh + 50px);

  @media screen and (min-width: 1060px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 60px;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Row = styled.div`
  display: flex;
  align-items: ${({ align }) => align || "center"};
  justify-content: ${({ justify }) => justify || "space-evenly"};
  gap: ${({ gap }) => gap || "1rem"};
  width: ${({ width }) => width || "100%"};
  flex-wrap: wrap;
`;

const Column = styled(Row)`
  flex-direction: column;
  align-items: ${({ align }) => align || "center"};
`;

const RightSide = styled.div`
  flex-basis: 60%;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 1060px) {
    order: 2;
    width: 100vh;
  }
`;

const RightSideContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  img {
    position: relative;
    height: 600px;
    width: auto;
    border-radius: 20px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    object-fit: cover;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
    }
  }

  @media screen and (min-width: 1060px) {
    &::before {
      max-width: 400px;
    }

    img {
      max-height: 600px;
      max-width: 400px;
    }
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    img {
      height: 500px;
      max-width: 350px;
    }
  }

  @media screen and (max-width: 480px) {
    img {
      margin-top: 1rem;
      width: 286px;
      height: 281.6px;
      border-radius: 15px;
    }
  }
`;

const LeftSide = styled.div`
  order: 1;
  .empresa {
    font-weight: bold;
    margin: 0;
    color: ${colors["pink-two"]};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  @media screen and (min-width: 1279px) {
    flex-basis: 40%;
  }
`;

// Alternative circular profile image styling
const CircularProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  img {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
    border: 4px solid ${colors.purple}20;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    
    &:hover {
      transform: scale(1.05);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    }
  }

  @media screen and (max-width: 768px) {
    img {
      width: 250px;
      height: 250px;
    }
  }

  @media screen and (max-width: 480px) {
    img {
      width: 200px;
      height: 200px;
    }
  }
`;

// Contact section image styling - increased size
const ContactImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  img {
    height: 500px;
    width: auto;
    max-width: 400px;
    border-radius: 20px;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
    object-fit: cover;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    
    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 20px 35px rgba(0, 0, 0, 0.15);
    }
  }

  @media screen and (max-width: 768px) {
    img {
      height: 400px;
      max-width: 320px;
    }
  }

  @media screen and (max-width: 480px) {
    img {
      height: 320px;
      max-width: 260px;
      border-radius: 15px;
    }
  }
`;

export {
  Layout,
  SceneLayout,
  Row,
  Column,
  RightSide,
  RightSideContent,
  LeftSide,
  CircularProfileContainer,
  ContactImageContainer,
};
