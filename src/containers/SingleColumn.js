import React, { useState } from "react";
import { Droppable } from "react-beautiful-dnd";
import Draggable from "./CardContainer";
import { createTask } from "../services";
import EditTaskModal from "../components/EditTaskModal";
import { primaryColor, tertiaryColor} from "../utils/constants";

export default function DroppableContainer({ column, columnId }) {
  const [newTaskModal, setnewTaskModal] = useState({
    id: "",
    isOpen: false,
  });

  const addNewTask = () => {
    createTask({ data: { name: "new task", taskState: columnId } }).then(
      (res) => {
        setnewTaskModal({
          id: res.data.task._id,
          isOpen: true,
        });
      }
    );
  };

  return (
    <Droppable droppableId={columnId} key={columnId}>
      {(provided) => {
        return (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            style={{
              padding: 4,
              width: 250,
              minHeight: 20,
            }}
          >
            {column.tasks.map((item, index) => {
              return <Draggable task={item} index={index} key={index} />;
            })}
            {provided.placeholder}
            <div
              style={{
                background: primaryColor,
                padding: 6,
                marginBottom: 12,
              }}
            >
              <div
                style={{
                  border: `1px dotted ${tertiaryColor}`,
                  textAlign: "center",
                  cursor: "pointer",
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "#ffffffa3",
                  padding: 6,
                }}
                onClick={addNewTask}
              >
                + Add New Task
              </div>
              <EditTaskModal
                isModalOpen={newTaskModal.isOpen}
                closeEditModal={() => {
                  setnewTaskModal({ ...newTaskModal, isOpen: false });
                }}
                title={""}
                description={""}
                imageURL={""}
                id={newTaskModal.id}
              />
            </div>
          </div>
        );
      }}
    </Droppable>
  );
}
