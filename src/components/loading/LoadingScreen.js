import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components/macro';
import { Player } from '@lottiefiles/react-lottie-player';
import loadingAnimation from './loading.json'

export const LoadingScreen = () => {
  const isLoading = useSelector((store) => store.loader.isLoading);

  return (
    <LottieWrapper>
      {isLoading
      && <Player
        height="40vh"
        width="40vw"
        src={loadingAnimation}
        loop
        autoplay
        speed={1} />}
    </LottieWrapper>
  )
}

const LottieWrapper = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    margin-top: 20vh;
    scale: 2;
    `