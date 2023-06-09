import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components/macro';

export const LoadingScreen = () => {
  const isLoading = useSelector((store) => store.loader.isLoading);

  return (
    <div>
      {isLoading && <LoadingText>Loading...</LoadingText>}
    </div>
  )
}

const LoadingText = styled.h1`
padding: 10%;
font-family: 'Special Elite', cursive;
font-size: 2.5rem;
color: black;
text-align: center;
margin-top: 100px;
  `