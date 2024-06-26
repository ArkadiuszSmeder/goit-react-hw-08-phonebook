import styled from "styled-components";

export const ContactData = styled.form`
display: flex;
flex-direction: column;
min-width: 320px;
border: 2px solid black;
padding: 10px;
`

export const ContactInput = styled.input`
margin: 10px 0px 10px 0px;
// max-width: 150px;
transition: border-color 0.5s;

&:hover {
border: 2px solid deepskyblue;
}

&:focus {
border: 2px solid deepskyblue;
}
`

export const ContactSubmit = styled.button`
margin-top: 10px;
max-width: 100px;
align-self: center;
transition: background-color 0.5s;

&:hover {
background-color: lightgreen;
}

&:focus {
background-color: lightgreen;
}
`

export const ContactLabel = styled.label`
font-weight: 500;
`