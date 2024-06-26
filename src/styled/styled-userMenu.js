import styled from "styled-components";

export const UserMenuContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const UserMenuGreetings = styled.p`
  font-weight: 700;
`;

export const LogoutButton = styled.button`
transition: background-color 0.5s;

&:hover {
background-color: deepskyblue;
}

&:focus {
background-color: deepskyblue;
}
`