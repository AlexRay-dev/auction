import styled from "styled-components";

export const StyledTimer = styled.div`
  background-color:  ${({theme}) => theme.colors.timerBg};
  border: 1px solid  ${({theme}) => theme.colors.timerBorder};
  color:  ${({theme}) => theme.colors.red};
  font-size: 16px;
  padding: 13px;
  width: 100%;
  border-radius: 5px;
  text-align: center;
`;