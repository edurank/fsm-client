import React, { useState } from "react";

const Toast = ({ message, success }: { message: string; success: boolean }) => {
  const [visible, setVisible] = useState(true);

  const handleClose = () => {
    setVisible(false);
  };

  return (
    <>
      {visible && (
        <div
          className={`${
            success ? "bg-green-500" : "bg-red-500"
          } fixed bottom-0 right-0 mb-4 mr-4 p-4 text-white rounded-md shadow-md`}
        >
          <div className="flex items-center justify-between">
            <span>{message}</span>
            <button onClick={handleClose} className="text-white">
              X
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Toast;
