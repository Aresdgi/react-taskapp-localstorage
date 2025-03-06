import React from 'react';
export const VisibilityControl = ({setShowCompleted}) => {
  const handleDelete = () => {
    alert("cleaning");
  };
  return (
    <div>
      <input
        type="checkbox"
        onChange={(e) => setShowCompleted(e.target.checked)}
      />{" "}
      <label>Show Tasks Done</label>
      <button onClick={handleDelete}>Clear</button>
    </div>
  );
};
