import styled from "styled-components";

export const ListItemLayout = ({ children, className }) => {
  return (
    <>
      <Wrapper className={className}>
        <input type="checkbox" />
        {children}
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 8px 16px;
  border: 1px solid #d0d7de;
  border-bottom: none;
  background-color: #ffffff;

  &:hover {
    background-color: rgb(246, 248, 250);
  }

  input {
    margin-right: 8px;
    margin-top: 5px;
  }

  &.listFilter {
    margin-top: 20px;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    background-color: rgb(246, 248, 250);
    padding: 16px;
  }

  &:last-child {
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    border-bottom: 1px solid #d0d7de;
  }
`;
