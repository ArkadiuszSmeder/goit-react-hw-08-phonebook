import styled from "styled-components";

export const StyledList = styled.ul`
padding-left: 0px;
`;

export const DeleteButton = styled.button`
margin-left: 10px;
transition: background-color 0.5s;

&:hover {
background-color: orangered;
}

&:focus {
background-color: orangered;
}
`

export const ListElement = styled.li`
margin-top: 5px;
margin-bottom: 5px;
display: flex;
justify-content: space-between;
align-items: center;
`