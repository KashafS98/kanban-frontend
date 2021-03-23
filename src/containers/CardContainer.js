import React from "react";
import { Draggable } from "react-beautiful-dnd";
import Card from '../components/Card'

export default function DraggableContainer({task, index}) {
  return (
    <div>
      <Draggable key={task.id} draggableId={task.id} index={index}>
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
              <Card snapshot={snapshot} title={task.content}/>
            </div>
          );
        }}
      </Draggable>
    </div>
  );
}
