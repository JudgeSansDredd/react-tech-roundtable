import { MouseEventHandler } from "react";
import styles from "./Note.module.css";
import { NoteType } from "./Types";

interface PropType extends NoteType {
  closeHandler: (id: string) => void;
}

const Note = (props: PropType) => {
  const onClickhandler: MouseEventHandler<HTMLDivElement> = (e) => {
    props.closeHandler(props.id);
  };

  return (
    <div className={styles.note}>
      <div className={styles.noteClose} onClick={onClickhandler}>
        x
      </div>
      {props.title && <div className={styles.noteTitle}>{props.title}</div>}
      <div className={styles.noteBody}>{props.content}</div>
    </div>
  );
};

export default Note;
