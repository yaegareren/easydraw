import {
  FaPencil,
  FaArrowRotateLeft,
  FaArrowRotateRight,
} from "react-icons/fa6";
import { FaEraser, FaFileDownload } from "react-icons/fa";
import styles from "./index.module.css";

const Menu = () => {
  return (
    <div className={styles.menuContainer}>
      <div className={styles.iconWrapper}>
        <FaPencil className={styles.icon} />
      </div>
      <div className={styles.iconWrapper}>
        <FaEraser className={styles.icon} />
      </div>
      <div className={styles.iconWrapper}>
        <FaArrowRotateLeft className={styles.icon} />
      </div>
      <div className={styles.iconWrapper}>
        <FaArrowRotateRight className={styles.icon} />
      </div>
      <div className={styles.iconWrapper}>
        <FaFileDownload className={styles.icon} />
      </div>
    </div>
  );
};

export default Menu;
