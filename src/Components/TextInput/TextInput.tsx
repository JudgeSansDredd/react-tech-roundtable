import React from "react";
import styles from "./TextInput.module.css";

interface PropType {
  name: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const TextInput = (props: PropType) => {
  return (
    <input
      className={styles.textInput}
      name={props.name}
      type="text"
      value={props.value}
      onChange={props.onChange}
    />
  );
};

export default TextInput;
