import styled from "styled-components";
import { BsGithub } from "react-icons/bs";

export const Navigation = () => {
  return (
    <Nav>
      <BsGithub className="githubIcon" />
      <input placeholder="Search of jump to..." />
    </Nav>
  );
};

const Nav = styled.nav`
  padding: 16px 32px;
  background-color: #24292f;
  display: flex;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
  align-items: center;

  .githubIcon {
    font-size: 32px;
    color: white;
    margin-right: 18px;
  }

  input {
    background-color: inherit;
    padding: 6px 12px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    line-height: 1.5;
    font-size: 14px;
    border-radius: 6px;
    width: 280px;
    color: rgba(255, 255, 255, 0.7);
    ::placeholder {
      color: rgba(255, 255, 255, 0.7);
    }
  }
`;
