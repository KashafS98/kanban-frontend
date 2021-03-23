import React from "react";
import { Droppable } from "react-beautiful-dnd";
import Draggable from "./CardContainer";

export default function DroppableContainer({ column, columnId }) {
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
            {column.items.map((item, index) => {
              return <Draggable task={item} index={index} key={index}/>;
            })}
            {provided.placeholder}
          </div>
        );
      }}
    </Droppable>
  );
}
