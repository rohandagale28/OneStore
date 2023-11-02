import styled from "styled-components";

export const Container = styled.div`
display:flex;
flex-direction: ${props => props.direction};
gap: 2rem;
flex-wrap:wrap;
width:100%;
height:auto ;
justify-content: center;
align-items: center;
margin-top:3rem;
@media (max-width: 400px) {
    flex-direction: column;
  }
`