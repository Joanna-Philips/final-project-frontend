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
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 30px;
`

/* export const InventoryTitle = styled.p`
    background-color: #3d4362;
    color: white;
    padding: 0 5px;
    border-style: outset;
    font-size: 1rem;
    border-radius: 13%;
    height: fit-content;
    margin: 0;
    z-index: 1;
` */
export const InventoryChildWrapper = styled.div`
    flex-wrap: wrap;
    display: flex;
    flex-direction: column;
    /* width: 55%; */
    max-width: 312px;
    align-items: center;
    `

export const AvatarIMG = styled.img`
    position: absolute;
    top: -50%;`