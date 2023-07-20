import styled from "styled-components";

export const Pagination = ({ currentPage, setCurrentPage }) => {
  const MAX_PAGE = 10;

  return (
    <PaginationContainer>
      <PrevNextButton
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        {"< Previous"}
      </PrevNextButton>
      {new Array(MAX_PAGE).fill(null).map((_, i) => {
        const pageNumber = i + 1;
        const isSelected = pageNumber === currentPage;
        return (
          <PageButtons
            key={i}
            className={isSelected ? "selected" : ""}
            onClick={() => setCurrentPage(pageNumber)}
          >
            {pageNumber}
          </PageButtons>
        );
      })}

      <PrevNextButton
        disabled={currentPage === MAX_PAGE}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        {"Next >"}
      </PrevNextButton>
    </PaginationContainer>
  );
};

const PageButtons = styled.button`
  border: none;
  box-shadow: none;
  background: none;
  font-size: 14px;
  padding: 5px 10px;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    border: 1px solid #d0d7de;
  }

  &.selected {
    background-color: #0969da;
    color: #ffffff;
  }
`;

const PrevNextButton = styled(PageButtons)`
  color: #0969da;

  &:disabled {
    color: #8c959f;
    &:hover {
      border: none;
    }
  }
`;

const PaginationContainer = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 18px;
`;
