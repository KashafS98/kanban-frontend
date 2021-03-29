import React, { useState } from "react";
import Modal from "react-modal";
import styled from '@emotion/styled'
import { useDispatch } from "react-redux";
import { listTaskStates, updateTasks, updateTaskState } from "../services";
import { buttonStyles, headerColor, secondaryColor, textColor } from "../utils/constants";

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
      ${buttonStyles}
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

export default function EditStateModal({
  isModalOpen,
  closeEditModal,
  title,
  id
}) {
    const [data, setData] = useState({
        title: title,
    })

    const dispatch = useDispatch()
    const saveChanges = (e) =>{
      e.preventDefault()
      const payload = {
        id,
        data: {
          name: data.title,
        }
      }
      updateTaskState(payload).then(res=>{
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

    const closeModal = ()=>{
      closeEditModal()
      setData({title:''})
    }
    
  return (
    <div>
      <Modal
        ariaHideApp={false}
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Edit Task State"
      >
        <div style={{display:'flex', justifyContent:'space-between', alignItems: 'center'}}>
        <h4>Edit Task State</h4>
        <button onClick={closeEditModal} style={{height: '20px', background:'transparent', border:'none', outline: 'none'}}>X</button>
        </div>
        <Form onSubmit={saveChanges}>
          <input placeholder="State Name/Title" value={data.title} onChange={(e)=>{setData({...data, title: e.target.value})}} />
          <button type='submit'>Submit</button>
        </Form>
      </Modal>
    </div>
  );
}
