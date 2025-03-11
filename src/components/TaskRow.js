import React from 'react';
export const TaskRow = ({ task, toggleTask }) => {
    return (
        <tr>
            <td>{task.name}</td>
            <td>
                <input type="checkbox" checked={task.done} onChange={() => toggleTask(task)} />
            </td>
        </tr>
    );
}