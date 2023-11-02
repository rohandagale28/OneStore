import styled from "styled-components";

export const Cards = styled.div`
display:flex;
justify-content: center;
align-items: center;
flex-direction: ${props => props.direction};
gap: 1rem;
cursor:pointer;
background: #60606060;
padding: 1rem;
box-sizing:borde-box;
border-radius:1rem;
min-width: 10rem;
@keyframes card {
    from {  
       opacity:0;  
   }  
   to {  
       opacity:1;  
   }  
}

animation: card 0.5s linear
`