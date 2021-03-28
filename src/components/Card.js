import React, { useState } from "react";
import styled from "@emotion/styled";
import EditTaskModal from "./EditTaskModal";
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import { deleteOneTask, listTaskStates } from "../services";
import { useDispatch } from "react-redux";

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
  const dispatch = useDispatch()

  const showEditModal = () => {
    setisModalOpen(true);
  };
  const closeEditModal = () => {
    setisModalOpen(false);
  };

  const deleteTask = () => {
    deleteOneTask({id}).then(res=>{
        alert('Task Deleted!')
        listTaskStates().then(res=>{
          const obj = {}
          res.data.taskState.map(item=>{
            obj[item._id] = item
          })
          dispatch({
            type: 'UPDATE_TASK_LIST',
            payload: obj
          })
        })
    })
  }
  
  return (
    <CardWrapper>
      <Cover image={cover} />
      <CardBody>
        <Title>
          {title}
          <div>
          <AiOutlineEdit onClick={showEditModal}>Edit</AiOutlineEdit>
          <AiOutlineDelete onClick={deleteTask}>Delete</AiOutlineDelete>
          </div>
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
