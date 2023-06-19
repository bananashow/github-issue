import { useEffect, useState } from "react";
import styled from "styled-components";

export const Modal = ({
  title,
  opened,
  onClose,
  placeholder,
  searchDataList,
  onClickCell,
}) => {
  const [searchValue, setSearchValue] = useState("");
  const [filteredData, setFilteredData] = useState(searchDataList);

  useEffect(() => {
    setFilteredData(searchDataList);
  }, [searchDataList]);

  useEffect(() => {
    if (searchValue) {
      const filteredSearchList = searchDataList.filter((item) =>
        item.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredData(filteredSearchList);
    } else {
      setFilteredData(searchDataList);
    }
  }, [searchDataList, searchValue]);

  return (
    <ModalContainer className={opened ? "opened" : ""}>
      <Header>
        <span>filter by {title}</span>
        <button onClick={onClose}>X</button>
      </Header>

      <InputBox>
        <input
          placeholder={placeholder}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        ></input>
      </InputBox>

      <ModalList>
        {filteredData.map((data) => {
          return (
            <ModalItem
              key={data.name}
              role="button"
              onClick={() => {
                const isLabel = title.toLowerCase() === "label";
                const paramKey = isLabel ? "labels" : title.toLowerCase();
                onClickCell({ [paramKey]: data.name });
              }}
            >
              {data.name}
            </ModalItem>
          );
        })}
      </ModalList>
    </ModalContainer>
  );
};

const ModalList = styled.div`
  overflow: auto;
  max-height: 400px;
`;

const ModalContainer = styled.section`
  width: 300px;
  border-radius: 6px;
  border: 1px solid #d0d7de;
  box-shadow: 0 8px 24px rgba(140, 149, 159, 0.2);
  background-color: #ffffff;
  position: absolute;
  z-index: 99;
  display: none;

  &.opened {
    display: block;
  }
`;

const Header = styled.header`
  padding: 7px 7px 7px 16px;
  border-bottom: 1px solid #d0d7de;
  display: flex;
  align-items: center;

  span {
    flex: 1;
    font-weight: 800;
    font-size: 12px;
  }

  button {
    border: none;
    background-color: transparent;
  }
`;

const InputBox = styled.div`
  padding: 8px;

  input {
    box-shadow: none;
    border: 1px solid #d0d7de;
    border-radius: 6px;
    width: 100%;
    padding: 5px 12px;
    line-height: 20px;
  }
`;

const ModalItem = styled.div`
  padding: 7px 16px;
  border-bottom: 1px solid #d0d7de;
  line-height: 1.25;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;

  &:last-child {
    border-bottom: none;
  }
`;
