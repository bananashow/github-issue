import styled from "styled-components";
import { Circle } from "./Circle";
import { Link, useLocation } from "react-router-dom";
import { BiCode } from "react-icons/bi";
import { VscIssues } from "react-icons/vsc";
import { AiOutlinePullRequest } from "react-icons/ai";
import { BsPlayCircle, BsGraphUp } from "react-icons/bs";
import { LuTable2 } from "react-icons/lu";
import { MdSecurity } from "react-icons/md";
import { LuSettings } from "react-icons/lu";

const tabList = [
  {
    name: (
      <>
        <BiCode className="icon" />
        Code
      </>
    ),
    pathname: "/code",
  },
  {
    name: (
      <>
        <VscIssues className="icon" />
        Issues
      </>
    ),
    pathname: "/issue",
  },
  {
    name: (
      <>
        <AiOutlinePullRequest className="icon" />
        Pull Requests
      </>
    ),
    pathname: "/pulls",
  },
  {
    name: (
      <>
        <BsPlayCircle className="icon" />
        Action
      </>
    ),
    pathname: "/action",
  },
  {
    name: (
      <>
        <LuTable2 className="icon" />
        Projects
      </>
    ),
    pathname: "/projects",
  },
  {
    name: (
      <>
        <MdSecurity className="icon" />
        Security
      </>
    ),
    pathname: "/security",
  },
  {
    name: (
      <>
        <BsGraphUp className="icon" />
        Insights
      </>
    ),
    pathname: "/insights",
  },
  {
    name: (
      <>
        <LuSettings className="icon" />
        Settings
      </>
    ),
    pathname: "/settings",
  },
];

export const Tabs = () => {
  const { pathname } = useLocation();

  return (
    <TabUl>
      {tabList.map((tab, idx) => {
        return (
          <Tab
            key={idx}
            item={tab}
            selected={(pathname === "/" ? "/issue" : pathname) === tab.pathname}
          />
        );
      })}
    </TabUl>
  );
};

export const Tab = ({ item, selected, number }) => {
  return (
    <>
      <li className={selected ? "selected" : ""}>
        <Link to={item.pathname}>
          <TabBox>
            <span>{item.name}</span> {number && <Circle>{number}</Circle>}
          </TabBox>
        </Link>
      </li>
    </>
  );
};

const TabBox = styled.button`
  border: none;
  background-color: transparent;
  justify-content: center;
  padding-bottom: 12px;
  margin-right: 12px;
  cursor: pointer;
  flex: 1;
`;

const TabUl = styled.ul`
  display: flex;
  align-items: center;

  .icon {
    font-size: 18px;
  }
  li {
    padding: 0 2px 0 6px;
  }

  .selected {
    border-bottom: #fa4549 2px solid;
    font-weight: 600;
  }
`;
