import React from "react";
import { Draggable } from "react-beautiful-dnd";
import Card from "../components/Card";

export default function DraggableContainer({ task, index }) {
  return (
    <div>
      <Draggable key={task._id} draggableId={task._id} index={index}>
        {(provided, snapshot) => {
          return (
            <div
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              style={{
                userSelect: "none",
                margin: "0 0 8px 0",
                minHeight: "50px",
                // color: "white",
                ...provided.draggableProps.style,
              }}
            >
              <Card
                id={task._id}
                title={task.name}
                description={task.description}
                currentState={task.taskState}
                cover={task.featuredImg}
              />
            </div>
          );
        }}
      </Draggable>
    </div>
  );
}
