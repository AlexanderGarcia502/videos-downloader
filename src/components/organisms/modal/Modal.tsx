// Modal.tsx
import React from "react";

interface ModalProps {
  show: boolean;
  onAction: () => void;
  title: string;
  buttonName: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  show,
  onAction,
  title,
  buttonName,
  children,
}) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg m-2 w-full p-4 sm:w-1/3 sm:m-0">
        <div className="flex justify-between items-center border-b pb-2">
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        <div className="mt-4">{children}</div>
        <div className="flex justify-end mt-4">
          <button
            onClick={onAction}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            {buttonName}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
