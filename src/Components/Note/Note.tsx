import styles from "./Note.module.css";
import { NoteType } from "./Types";

interface PropType extends NoteType {
  closeHandler: (id: string) => void;
}

const Note = (props: PropType) => {
  return (
    <div className={styles.note}>
      <div
        className={styles.noteClose}
        onClick={() => props.closeHandler(props.id)}
      >
        x
      </div>
      <div className={styles.noteTitle}>{props.title}</div>
      <div className={styles.noteBody}>{props.content}</div>
    </div>
  );
};

export default Note;
