import styled from 'styled-components/macro'

export const UserWrapper = styled.main`
    display: flex;
    justify-content: center;
    background-image: url(https://i.pinimg.com/originals/68/b5/80/68b5802287649ad7bb59cff215e28969.gif);
    background-size: cover;
    min-height: 90vh;
    background-position: 0 50%;
    position: relative;
    `

export const InventoryWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0;
    justify-items:center;
    max-height: 51vh;
    overflow-y: scroll;
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

    @media screen and (min-width: 500px){
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
    }
    @media screen and (min-width: 860px){
        overflow: hidden;
    }
`

export const InventoryChildWrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 312px;
    align-items: center;
    `

export const AvatarIMG = styled.img`
    position: absolute;
    top: -105px;
    scale: 1.2;
`

export const LogoIcon = styled.img`
height: 35px;
width: 35px;
margin-right: 10px;
`

export const OptionsIconImg = styled.img`
height: 60px;
width: 60px;`