import { useState } from "react";
import kebabIcon from "../../../assets/icons/kebab.icon.svg";
//
export default function KebabBtn(onClick) {
  const [isOpen, setIsOpen] = useState(false);
  const onClickChange = () => {
    setIsOpen(!isOpen);
  };
  return (
    <button
      onClick={onClickChange}
      style={{
        width: "24px",
        height: "24px",
        border: "none",
        backgroundColor: "white",
      }}
    >
      <img src={kebabIcon} alt="케밥" />
    </button>
  );
}
