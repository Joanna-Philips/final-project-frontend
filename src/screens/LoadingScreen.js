import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components/macro'

export const Loader = () => {
  const [loadingDot, setLoadingDot] = useState('');
  const isLoading = useSelector((store) => store.loader.isLoading);

  // Creates a movement in the dots after loading
  const loadingAnimation = () => {
    if (loadingDot === '....') {
      setLoadingDot('');
    } else {
      setTimeout(() => setLoadingDot(`${loadingDot}.`), 10000);
    }
  };

  return (
    <div>
      {isLoading && <LoadingText>loading{loadingAnimation()}
        {loadingDot}</LoadingText>}
    </div>
  )
}

const LoadingText = styled.h1`
padding: 10%;
font-family: 'Special Elite', cursive;
font-size: 2.5rem;
color: white;
text-align: center;
  `