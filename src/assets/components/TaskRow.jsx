import React from "react";

const TaskRow = React.memo(({ task }) => {
  const STATUS_STYLE = {
    "To do": {
      backgroundColor: "#fef3c7",
      color: "#92400e",
    },
    Doing: {
      backgroundColor: "#dbeafe",
      color: "#1e40af",
    },
    Done: {
      backgroundColor: "#d1fae5",
      color: "#065f46",
    },
  };
//promemoria: Fai refactoring usando i tag giusti
  return (
    <div className="row">
      <span>{task.title}</span>
      <span style={STATUS_STYLE[task.status]}>
        {task.status}
      </span>
      <span>{task.createdAt}</span>
    </div>
  );
});

export default TaskRow;