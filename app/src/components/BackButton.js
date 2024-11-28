import React from "react";
import { useHistory } from "react-router-dom";

// Composant BackButton
const BackButton = ({ to, label = "Back" }) => {
  const history = useHistory();

  const handleBack = () => {
    if (to) {
      history.push(to);
    } else {
      history.goBack();
    }
  };

  return (
    <div className="flex justify-end">
      <button onClick={handleBack} className="text-blue-500 font-medium p-2 border border-blue-500 rounded-md hover:bg-blue-100 transition">
        {label}
      </button>
    </div>
  );
};

export default BackButton;
