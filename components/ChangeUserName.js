import { useMoralis } from "react-moralis";
import { useState } from "react";
import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

function ChangeUserName() {
  const { setUserData, isUserUpdating, userError, user } = useMoralis();
  const [isModalOpen, setIsModalOpen] = useState(false);
  let uN = "";

  const setUserName = () => {
    const username = prompt(
      `Enter your now username ( current : ${user.getUsername()})`
    );
    if (!username) return;
    setUserData({ username });
  };
  return (
    <div className="text-sm absolute top-6 right-6  bg-transparent">
      <button onClick={setUserName} className="hover:text-green-900">
        Change Your User Name
      </button>
    </div>
  );
}

export default ChangeUserName;
