import React, { useState } from "react";
import styled from "@emotion/styled";
import EditTaskModal from "./EditTaskModal";

const CardWrapper = styled.div`
  background: #456c86;
  border-radius: 6px;
  min-height: 5vh;
  :hover {
    transition: box-shadow 0.3s, border-color 0.3s, -webkit-box-shadow 0.3s;
  }
`;

const Cover = styled.div`
  border-radius: 6px;
  background: url("${(props) => props.image}");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: ${(props) => (props.image ? "20vh" : "auto")};
`;

const CardBody = styled.div`
  padding: 18px;
  text-align: left;
  font-size: 14px;
  color: white;
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default function Card({
  cover = "",
  title = "",
  description = "",
  currentState,
  id
}) {
  const [isModalOpen, setisModalOpen] = useState(false);

  const showEditModal = () => {
    setisModalOpen(true);
  };
  const closeEditModal = () => {
    setisModalOpen(false);
  };

  
  return (
    <CardWrapper>
      <Cover image={cover} />
      <CardBody>
        <Title>
          {title}
          <button onClick={showEditModal}>Edit</button>
        </Title>
        <p>{description}</p>
      </CardBody>
      <EditTaskModal
        isModalOpen={isModalOpen}
        closeEditModal={closeEditModal}
        title={title || ''}
        description={description || ''}
        imageURL={cover || ''}
        currentState={currentState}
        id={id}
      />
    </CardWrapper>
  );
}
