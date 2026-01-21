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

  return (
    <tr className="row">
      <td className="cell">{task.title}</td>
      <td className="cell" style={STATUS_STYLE[task.status]}>
        {task.status}
      </td>
      <td className="cell">{task.createdAt}</td>
    </tr>

  );
});

export default TaskRow;