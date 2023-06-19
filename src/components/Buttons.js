import styled from "styled-components";

export const Buttons = ({ style, children }) => {
  return <Button style={style}>{children}</Button>;
};

const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 5px 16px;
  border-radius: 6px;
  border: 1px solid rgba(27, 31, 36, 0.15);
  cursor: pointer;
`;
