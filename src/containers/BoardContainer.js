import React from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Columns from "./Columns";

export default function BoardContainer({ onDragEnd, columns }) {
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      {Object.entries(columns).map(([columnId, column], index) => {
        return (
          <Columns columnId={columnId} column={column} key={index} />
        );
      })}
    </DragDropContext>
  );
}
