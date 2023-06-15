import styled from 'styled-components/macro';

export const LoginWrapper = styled.div`
    background-image: url(https://cdnb.artstation.com/p/assets/images/images/037/263/051/original/karina-formanova-rainforest-animation.gif?1619929364);
    background-size: cover;
    height: 97lvh;
    display: flex;
    flex-direction: column;
    align-items: center;
    `

export const ErrorMessage = styled.p`
  font-size: 2.2rem;`

export const LogoIMG = styled.img`
  height: 15vh;
    scale: 3;
    position: relative;
    @media screen and (max-height: 600px){
      height: 5vh;
      scale: 12;
    }
    @media screen and (min-width: 600px){
      scale: 4;
    }
`