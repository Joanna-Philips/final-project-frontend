import styled from 'styled-components/macro';

export const QuestDisplayWrapper = styled.div`
    height: 82vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    align-content: flex-start;
    flex-direction: row;
    overflow: scroll;
    margin-left: 1.5%;
    @media screen and (min-width: 860px){
        overflow: hidden;
    }
    `

export const QuestIMG = styled.img`
`

export const QuestIconDiv = styled.div`
display: flex;
gap: 0.25rem;
align-items: center;
`