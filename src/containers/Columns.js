import React from "react";
import Droppable from "./SingleColumn";

export default function Columns({ columnId, column }) {
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
          backgroundColor: "#0b546b",
          borderRadius: 6,
          padding: 2,
        }}
      >
        <h2>{column.name}</h2>
        <Droppable column={column} columnId={columnId}/>
      </div>
    </div>
  );
}
