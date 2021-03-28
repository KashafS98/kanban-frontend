import React, { useState } from "react";
import Modal from "react-modal";
import styled from '@emotion/styled'
import { useDispatch } from "react-redux";
import { listTaskStates, updateTasks } from "../services";

const Form = styled.form`
    display: flex;
    flex-direction: column;
    input{
        height: 32px;
        border-radius: 6px;
        border: 1px solid #d9d9d9;
        margin: 2%;
        padding: 2% 5%;
    }
    button{
      height: 32px;
      width: 64px;
    }
`
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    transition: "ease 1s",
    borderRadius: '6px',
    width: '40vw'
  },
};

export default function EditTaskModal({
  isModalOpen,
  closeEditModal,
  title,
  description,
  imageURL,
  currentState,
  id
}) {
    const [data, setData] = useState({
        title: title,
        description: description,
        imageURL: imageURL
    })

    const dispatch = useDispatch()
    const saveChanges = (e) =>{
      e.preventDefault()
      const payload = {
        id,
        data: {
          name: data.title,
          description: data.description,
          featuredImg: data.imageURL
        }
      }
      updateTasks(payload).then(res=>{
        // console.log(res)
        if(res && res.status===200){
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
          closeEditModal()
        }
      })
    }
    
  return (
    <div>
      <Modal
        ariaHideApp={false}
        isOpen={isModalOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeEditModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div style={{display:'flex', justifyContent:'space-between', alignItems: 'center'}}>
        <h4>Edit Task</h4>
        <button onClick={closeEditModal} style={{height: '20px'}}>X</button>
        </div>
        <Form onSubmit={saveChanges}>
          <input placeholder="Task Name/Title" value={data.title} onChange={(e)=>{setData({...data, title: e.target.value})}} />
          <input placeholder="Task Description" value={data.description} onChange={(e)=>{setData({...data, description: e.target.value})}}/>
          <input placeholder="image link" value={data.imageURL} onChange={(e)=>{setData({...data, imageURL: e.target.value})}}/>
          <button type='submit'>Submit</button>
          
        </Form>
      </Modal>
    </div>
  );
}
