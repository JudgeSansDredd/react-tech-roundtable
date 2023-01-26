import styles from "./MainLayout.module.css";

const MainLayout = (props: any) => {
  return <div className={styles.wrapper}>{props.children}</div>;
};

export default MainLayout;
