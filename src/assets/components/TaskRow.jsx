import React from "react";
import { STATUS_STYLE } from "../../constants";

const TaskRow = React.memo(({ task }) => {

  return (
    <tr className="row">
      <td className="cell">{task.title}</td>
      <td className="cell status-label" style={STATUS_STYLE[task.status]}>
        {task.status}
      </td>
      <td className="cell">{new Date(task.createdAt).toLocaleDateString()}</td>
    </tr>

  );
});

export default TaskRow;