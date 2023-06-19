import axios from "axios";
import styled from "styled-components";
import { Buttons } from "./components/Buttons";
import { useEffect, useState } from "react";
import { ListItem } from "./components/ListItem";
import { ListItemLayout } from "./components/ListItemLayout";
import { ListFilterItem } from "./components/ListFilterItem";
import { Pagenation } from "./components/Pagenation";
import { GITHUB_API } from "./api";
import { Link, useSearchParams } from "react-router-dom";

export const List = () => {
  const [inputValue, setInputValue] = useState("is:pr is:open");
  const [list, setList] = useState([]);
  const [modalList, setModalList] = useState([]);
  const [showModal, setShowModal] = useState();
  const [params, setParams] = useState();

  const [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get("page") ?? 1, 10);
  const mode = searchParams.get("mode");

  const filterList = ["Label", "Milestone", "Assignee"];

  // 리스트
  const getListData = async (params) => {
    const data = await axios.get(`${GITHUB_API}/repos/facebook/react/issues`, {
      params,
    });
    setList(data.data);
  };

  useEffect(() => {
    getListData({
      page,
      state: mode,
      ...params,
    });
  }, [page, mode, params]);

  // 모달 데이터
  useEffect(() => {
    if (showModal) {
      const apiPath = `${showModal.toLowerCase()}`;
      getData(apiPath);
    }
  }, [showModal]);

  const getData = async (apiPath) => {
    const data = await axios.get(
      `${GITHUB_API}/repos/facebook/react/${apiPath}s`
    );

    //name, title, login => name으로 가공
    let result = [];
    switch (apiPath) {
      case "assignee":
        result = data.data.map((d) => ({
          name: d.login,
        }));
        break;

      case "milestone":
        result = data.data.map((d) => ({
          name: d.title,
        }));
        break;

      case "label":
        result = data.data.map((d) => ({
          name: d.name,
        }));
        break;
      default:
        result = data.data;
        break;
    }
    setModalList(result);
  };

  return (
    <>
      <ListContainer>
        <TopSection>
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          ></Input>

          <Link to="/new">
            <Buttons
              style={{
                fontSize: "14px",
                backgroundColor: "green",
                color: "white",
              }}
            >
              New Issue
            </Buttons>
          </Link>
        </TopSection>
        <ListItemLayout className="listFilter">
          <div>
            <TextFilter
              role="button"
              className={mode !== "closed" ? "selected" : ""}
              onClick={() => setSearchParams({ mode: "open" })}
            >
              Open
            </TextFilter>
            <TextFilter
              role="button"
              className={mode === "closed" ? "selected" : ""}
              onClick={() => setSearchParams({ mode: "closed" })}
            >
              Closed
            </TextFilter>
          </div>
          <FilterList>
            {filterList.map((item) => {
              return (
                <>
                  <ListFilterItem
                    modalList={modalList}
                    key={item}
                    onClick={() => setShowModal(item)}
                    onClose={() => setShowModal()}
                    showModal={showModal === item}
                    onChangeFilter={(params) => {
                      setParams(params);
                    }}
                  >
                    {item}
                  </ListFilterItem>
                </>
              );
            })}
          </FilterList>
        </ListItemLayout>

        {list.map((item, idx) => {
          return <ListItem key={item.id} data={item} />;
        })}
      </ListContainer>
      <Pagenation
        currentPage={page}
        setCurrentPage={(pageNumber) => setSearchParams({ page: pageNumber })}
      />
    </>
  );
};

const ListContainer = styled.section`
  padding: 0 32px;
  margin-top: 24px;
`;

const TopSection = styled.section`
  display: flex;
  margin-bottom: 20px;
`;

const Input = styled.input`
  background: #f6f8fa;
  border-radius: 6px;
  border: 1px solid #d0d7de;
  padding-left: 10px;
  color: #57606a;
  width: 60%;
  margin-right: auto;
  box-shadow: none;
`;

const FilterList = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;

  span {
    padding: 0 16px;
    cursor: pointer;
    color: #57606a;
    &:hover {
      color: #000000;
    }
  }
`;

const TextFilter = styled.span`
  cursor: pointer;
  margin-right: 8px;

  &.selected {
    font-weight: 600;
  }
`;
