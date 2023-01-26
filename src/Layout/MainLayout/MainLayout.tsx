import React from "react";
import styles from "./MainLayout.module.css";

const MainLayout = (props: React.PropsWithChildren<{}>) => {
  return <div className={styles.wrapper}>{props.children}</div>;
};

export default MainLayout;
