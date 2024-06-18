import styled from "styled-components";

export const FilterPart = styled.div`
display: flex;
flex-direction: column;
`

export const FilterField = styled.input`
max-width:150px;
margin-top: 5px;
transition: border-color 0.5s;

&:hover {
border: 2px solid steelblue;
}

&:focus {
border: 2px solid steelblue;
}
`