import React from "react";
import styles from "./Button.module.css";

interface PropType {
  onClick: React.MouseEventHandler<HTMLDivElement>;
  text: string;
}

const Button = (props: PropType) => {
  return (
    <div onClick={props.onClick} className={styles.button}>
      {props.text}
    </div>
  );
};

export default Button;
