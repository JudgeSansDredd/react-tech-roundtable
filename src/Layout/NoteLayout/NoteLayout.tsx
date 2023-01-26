import React from "react";
import styles from "./NoteLayout.module.css";

const NoteLayout = (props: React.PropsWithChildren<{}>) => {
  return <div className={styles.noteLayout}>{props.children}</div>;
};

export default NoteLayout;
