import { Modal } from "./Modal";
import styled from "styled-components";

export const ListFilterItem = ({
  children,
  showModal,
  onClick,
  onClose,
  modalList,
  onChangeFilter,
}) => {
  return (
    <FilterItem>
      <span role="button" onClick={onClick}>
        {children} ▾
      </span>
      <ModalContainer>
        <Modal
          title={children}
          opened={showModal}
          onClose={onClose}
          placeholder="Filter labels"
          searchDataList={modalList}
          onClickCell={(params) => {
            onChangeFilter(params);
          }}
        />
      </ModalContainer>
    </FilterItem>
  );
};

const ModalContainer = styled.div`
  top: 30px;
  left: 10px;
  position: absolute;
`;

const FilterItem = styled.div`
  position: relative;
`;
