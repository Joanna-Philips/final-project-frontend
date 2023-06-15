import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components/macro';
import { Player } from '@lottiefiles/react-lottie-player';

export const LoadingScreen = () => {
  const isLoading = useSelector((store) => store.loader.isLoading);

  return (
    // <div>
    //   {isLoading && <LoadingText>Loading...</LoadingText>}
    // </div>
    <LottieWrapper>
      {isLoading
      && <Player
        height="40vh"
        width="40vw"
        src="https://assets5.lottiefiles.com/private_files/lf30_dz8ymnuq.json"
        loop
        autoplay
        speed={1} />}
    </LottieWrapper>
  )
}

// const LoadingText = styled.h1`
// padding: 10%;
// font-family: 'Special Elite', cursive;
// font-size: 2.5rem;
// color: black;
// text-align: center;
// margin-top: 100px;
//   `

const LottieWrapper = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    margin-top: 20vh;
    `