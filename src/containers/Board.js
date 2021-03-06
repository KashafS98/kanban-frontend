import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import EditStateModal from "../components/EditStateModal";
import BoardContainer from "../containers/BoardContainer";
import {
  createTaskState,
  listTaskStates,
  updateTasks,
} from "../services";
import { primaryColor, secondaryColor, tertiaryColor } from "../utils/constants";

const onDragEnd = (result, columns, setColumns) => {

  if (!result.destination) return;
  const { source, destination } = result;

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.tasks];
    const destItems = [...destColumn.tasks];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);

    const payload = {
      id: result.draggableId,
      data: {
        taskState: destination.droppableId,
      },
    };

    updateTasks(payload);

    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        tasks: sourceItems,
      },
      [destination.droppableId]: {
        ...destColumn,
        tasks: destItems,
      },
    });
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.tasks];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        tasks: copiedItems,
      },
    });
  }
};

function DraggableBoard(props) {
  const [columns, setColumns] = useState({});
  const [newStateModal, setnewStateModal] = useState({
    id: "",
    isModalOpen: false,
  });

  useEffect(() => {
    listTaskStates().then((res) => {
      const obj = {};
      res.data.taskState.map((item) => {
        obj[item._id] = item;
      });
      props.dispatch({
        type: "UPDATE_TASK_LIST",
        payload: obj,
      });
    });
  }, []);

  useEffect(() => {
    setColumns(props.taskStates);
  }, [props.taskStates]);

  const addNewTask = () => {
    const payload = {
      data: {
        name: "New state",
      },
    };
    createTaskState(payload).then((res) => {
      if (res && res.status === 200) {
        setnewStateModal({ isModalOpen: true, id: res.data.taskState._id });
      }
    });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        height: "100%",
        alignItems: "flex-start",
      }}
    >
      <BoardContainer
        onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
        columns={columns}
      />
      <div
        style={{
          minHeight: 20,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "8px",
          backgroundColor: tertiaryColor,
          borderRadius: "6px",
          padding: "6px",
        }}
      >
        <div
          style={{
            border: `1px dotted ${primaryColor}`,
            width: "250px",
            textAlign: "center",
            cursor: "pointer",
          }}
          onClick={addNewTask}
        >
          <h3> + Add New State</h3>
        </div>
      </div>
      <EditStateModal
        isModalOpen={newStateModal.isModalOpen}
        closeEditModal={() => {
          setnewStateModal({ ...newStateModal, isModalOpen: false });
        }}
        title={""}
        id={newStateModal.id}
      />
    </div>
  );
}

const mapStateToProps = (state) => {
  const { taskStates } = state;
  return {
    taskStates,
  };
};

export default connect(mapStateToProps)(DraggableBoard);
