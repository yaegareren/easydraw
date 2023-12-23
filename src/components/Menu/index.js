import { useDispatch, useSelector } from "react-redux";
import cx from "classnames";
import {
  FaPencil,
  FaArrowRotateLeft,
  FaArrowRotateRight,
} from "react-icons/fa6";
import { FaEraser, FaFileDownload } from "react-icons/fa";
import styles from "./index.module.css";
import { menuItemClick, actionItemClick } from "@/slice/menuSlice";
import { MenuItems } from "@/constant";
const Menu = () => {
  const dispatch = useDispatch();
  const activeMenuItem = useSelector((state) => state.menu.activeMenuItem);
  const handleMenuClick = (itemName) => {
    dispatch(menuItemClick(itemName));
  };

  const handleActionItemClick = (itemName) => {
    dispatch(actionItemClick(itemName));
  };
  return (
    <div className={styles.menuContainer}>
      <div
        className={cx(styles.iconWrapper, {
          [styles.active]: activeMenuItem === MenuItems.PENCIL,
        })}
        onClick={() => handleMenuClick(MenuItems.PENCIL)}
      >
        <FaPencil className={styles.icon} />
      </div>
      <div
        className={cx(styles.iconWrapper, {
          [styles.active]: activeMenuItem === MenuItems.ERASER,
        })}
        onClick={() => handleMenuClick(MenuItems.ERASER)}
      >
        <FaEraser className={styles.icon} />
      </div>
      <div
        className={styles.iconWrapper}
        onClick={() => handleActionItemClick(MenuItems.UNDO)}
      >
        <FaArrowRotateLeft className={styles.icon} />
      </div>
      <div
        className={styles.iconWrapper}
        onClick={() => handleActionItemClick(MenuItems.REDO)}
      >
        <FaArrowRotateRight className={styles.icon} />
      </div>
      <div
        className={styles.iconWrapper}
        onClick={() => handleActionItemClick(MenuItems.DOWNLOAD)}
      >
        <FaFileDownload className={styles.icon} />
      </div>
    </div>
  );
};

export default Menu;
