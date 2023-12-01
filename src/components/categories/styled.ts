import { styled } from 'styled-components';


export const CategoriesContainerStyled = styled.div`
    max-height: 100px;
    background-color: black;
`

export const CategoriesContentStyled = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    gap: 30px;
    padding: 10px;
    align-items: center;
`

export const ContentItemsStyled = styled.div`
    color: white;
    font-weight: 700    ;
`
export const ContentItemStyled = styled.div`
    text-transform: uppercase;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    cursor: pointer;

    &:hover {
    }
`