import styled from "styled-components";

export const FilterPart = styled.div`
display: flex;
flex-direction: column;
margin-top: 20px;
align-items: center;
`

export const FilterField = styled.input`
min-width: 220px;
margin-top: 5px;
transition: border-color 0.5s;

&:hover {
border: 2px solid deepskyblue;
}

&:focus {
border: 2px solid deepskyblue;
}
`