import React, { useState } from "react";
import Droppable from "./SingleColumn";
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import { deleteTaskState, listTaskStates } from "../services";
import { useDispatch } from "react-redux";
import EditStateModal from "../components/EditStateModal";
import { tertiaryColor } from "../utils/constants";

export default function Columns({ columnId, column }) {

  const [editStateModal, seteditStateModal] = useState({
    id: '',
    isOpen: false
  })
  const dispatch = useDispatch()

  const deleteState = id => {
    if(column.tasks.length!==0){
      alert('Can not delete a State which has columns')
      return
    }
    deleteTaskState({id}).then(res=>{
      if(res.status===200){
        alert('State Deleted')
      }
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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      key={columnId}
    >
      <div
        style={{
          margin: 8,
          backgroundColor: tertiaryColor,
          borderRadius: 6,
          padding: 2,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 8,
          }}
        >
          <h3>{column.name}</h3>
          <div>
            <AiOutlineEdit onClick={()=>{seteditStateModal({id:columnId, isOpen: true})}}/>
            <AiOutlineDelete onClick={()=>{deleteState(columnId)}}/>
          </div>
        </div>
        <Droppable column={column} columnId={columnId} />
      </div>
      <EditStateModal
        isModalOpen={editStateModal.isOpen}
        closeEditModal={()=>{seteditStateModal({...editStateModal, isOpen:false})}}
        title={column.name}
        id={editStateModal.id}
     />
    </div>
  );
}
