import styled from 'styled-components/macro';

export const ShopTopDiv = styled.div`
    background-color: rgb(34 33 33);
    display: flex;
    justify-content: center;
    height: 35dvh;
`
export const ShopImage = styled.img`
    width: 100%;  
    max-width: 500px ;
    height: auto;
    object-fit: contain;
    object-position: center;
`

export const ShopWrapper = styled.div`
    display: flex;
    height: 90dvh;
    background-image: url(https://i.pinimg.com/originals/cf/c5/c7/cfc5c7a445516540bcbe7d72d246a881.png);
    flex-direction: column;
    align-items: stretch;`

export const ShopBotDiv = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    height: 54%;
    align-items: center;
`

export const WaresWrapper = styled.div`
    display: flex;
    height: 100%;
    max-height: 290px;
    flex-wrap: wrap;
    justify-content: center;
    overflow: hidden;
    scroll-behavior: smooth;
    overflow: scroll;
    scroll-snap-type: y mandatory;
    @media screen and (min-width: 1500px){
        overflow: hidden;
    }
    ::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}
::-webkit-scrollbar-track {
    background-color: rgba(61, 67, 98, 0.6);
    border-style: inset;
    border-width: 3px;
    border-color: rgba(237, 217, 155, 0.7);
}
::-webkit-scrollbar-thumb {
    background-color: rgba(46, 50, 66);
    border-style: outset;
    border-color: #2e3242;
}
`

export const SingleWareWrapper = styled.div`
display: flex;
flex-direction: column;
height: 75%;
margin-top: 6px;
`