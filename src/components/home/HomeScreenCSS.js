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
    max-height: 50vh;
    overflow-y: scroll;
    border: solid pink;

    @media screen and (min-width: 500px){
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
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
    scale: 1.2`