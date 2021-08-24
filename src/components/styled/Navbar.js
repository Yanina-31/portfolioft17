import  styled, {css} from 'styled-components';




export const StyledNavbar = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 3em 0;
    align-items: center;
    h1 {
        color: purple;
    }
    ${props => props.darktheme && css`
    background-color: #333;
    color: white;
    h1 {
        color: green;
    }
  `}
`


export const StyledNavigation = styled.div`
    display: flex;
    a {
        margin: 0.5em;
    }
`