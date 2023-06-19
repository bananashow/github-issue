import styled from "styled-components";

export const Badge = ({ title, bgColor }) => {
  return <Sticker bgColor={bgColor}>{title}</Sticker>;
};

const Sticker = styled.span`
  font-size: 14px;
  border-radius: 2em;
  padding: 2px 7px;
  margin: 0 5px;
  background-color: #${(props) => props.bgColor};
`;
