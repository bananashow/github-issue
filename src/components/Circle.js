import styled from "styled-components";

export const Circle = (props) => {
  return <CircleBox>{props.children}</CircleBox>;
};

const CircleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #d0d0d0;
  margin-left: 5px;
`;
