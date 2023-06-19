import styled from "styled-components";
import { Buttons } from "./Buttons";
import { Space } from "./Space";
import { Circle } from "./Circle";
import { Tabs } from "./Tabs";
import { RiGitRepositoryLine } from "react-icons/ri";

export const Header = () => {
  return (
    <>
      <HeaderContainer>
        <Wrapper>
          <UserAndRepository>
            <RiGitRepositoryLine className="icon" />
            bananashow / <span>pokemon</span>
          </UserAndRepository>
          <div>
            <Buttons
              style={{
                fontSize: "14px",
                backgroundColor: "transparent",
                color: "black",
              }}
            >
              Pin
            </Buttons>
            <Space />
            <Buttons
              style={{
                fontSize: "14px",
                backgroundColor: "transparent",
                color: "black",
              }}
            >
              Watch <Circle>1</Circle>
            </Buttons>
            <Space />
            <Buttons
              style={{
                fontSize: "14px",
                backgroundColor: "transparent",
                color: "black",
              }}
            >
              Fork <Circle>0</Circle>
            </Buttons>
            <Space />
            <Buttons
              style={{
                fontSize: "14px",
                backgroundColor: "transparent",
                color: "black",
              }}
            >
              Star <Circle>0</Circle>
            </Buttons>
          </div>
        </Wrapper>
        <Tabs title="title" number={5} />
      </HeaderContainer>
    </>
  );
};

const HeaderContainer = styled.header`
  padding: 16px 32px 0 32px;
  background-color: rgb(246, 248, 250);
  box-shadow: inset 0 -1px 0 hsla(210, 18%, 87%, 1);

  .icon {
    color: rgb(101, 109, 118);
    margin-right: 8px;
    vertical-align: -4px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
  justify-content: space-between;
  align-items: center;

  & div:nth-child(2) {
    display: flex;
  }
`;

const UserAndRepository = styled.div`
  font-size: 20px;
  color: rgb(9, 105, 218);
  cursor: pointer;
  span {
    font-weight: 600;
  }
`;
