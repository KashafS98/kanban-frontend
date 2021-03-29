import React, { useState } from "react";
import styled from "@emotion/styled";
import EditTaskModal from "./EditTaskModal";
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import { deleteOneTask, listTaskStates } from "../services";
import { useDispatch } from "react-redux";
import { primaryColor } from "../utils/constants";

const CardWrapper = styled.div`
  background: ${primaryColor};
  border-radius: 6px;
  min-height: 5vh;
  &:hover {
    box-shadow: 0 1px 2px -2px rgb(0 0 0 / 16%), 0 3px 6px 0 rgb(0 0 0 / 45%), 0 5px 12px 4px rgb(0 0 0 / 9%);
    transition: box-shadow 0.3s, -webkit-box-shadow 0.3s;
  }
  ${
    props=>props.dragging
    ? 
    `
    transform: rotate(-8deg);
    `
    :
    ''
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
  id,
  isDragging,
}) {
  const [isModalOpen, setisModalOpen] = useState(false);
  const [isHovered, setisHovered] = useState(false)
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
    <CardWrapper dragging={isDragging} onMouseEnter={()=>setisHovered(true)} onMouseLeave={()=>{setisHovered(false)}}>
      <Cover image={cover} />
      <CardBody>
        <Title>
          {title}
          {
            isHovered
            ?
            <div>
          <AiOutlineEdit onClick={showEditModal}>Edit</AiOutlineEdit>
          <AiOutlineDelete onClick={deleteTask}>Delete</AiOutlineDelete>
          </div>
          :''
          }
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
