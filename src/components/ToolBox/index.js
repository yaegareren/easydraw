import { useSelector, useDispatch } from "react-redux";
import cx from "classnames";
import styles from "./index.module.css";
import React from "react";
import { Colors, MenuItems } from "@/constant";
import { changeColor, changeBrushSize } from "@/slice/toolboxSlice";
import { socket } from "@/socket";

const ToolBox = () => {
  const dispatch = useDispatch();
  const activeMenuItem = useSelector((state) => state.menu.activeMenuItem);
  const showStrokeToolOption = activeMenuItem === MenuItems.PENCIL;
  const showBrushToolOption =
    activeMenuItem === MenuItems.PENCIL || activeMenuItem === MenuItems.ERASER;
  const { color, size } = useSelector((state) => state.toolbox[activeMenuItem]);
  const updateBrushSize = (e) => {
    dispatch(changeBrushSize({ item: activeMenuItem, size: e.target.value }));
    socket.emit("changeConfig", { color, size: e.target.value });
  };

  const updateColor = (newColor) => {
    dispatch(changeColor({ item: activeMenuItem, color: newColor }));
    socket.emit("changeConfig", { color: newColor, size });
  };

  return (
    <div className={styles.toolboxContainer}>
      {showStrokeToolOption && (
        <div className={styles.toolItem}>
          <h4 className={styles.toolText}>Stroke Colour</h4>
          <div className={styles.itemContainer}>
            <div
              className={cx(styles.colorBox, {
                [styles.active]: color === Colors.BLACK,
              })}
              style={{ backgroundColor: Colors.BLACK }}
              onClick={() => updateColor(Colors.BLACK)}
            />
            <div
              className={cx(styles.colorBox, {
                [styles.active]: color === Colors.RED,
              })}
              style={{ backgroundColor: Colors.RED }}
              onClick={() => updateColor(Colors.RED)}
            />
            <div
              className={cx(styles.colorBox, {
                [styles.active]: color === Colors.GREEN,
              })}
              style={{ backgroundColor: Colors.GREEN }}
              onClick={() => updateColor(Colors.GREEN)}
            />
            <div
              className={cx(styles.colorBox, {
                [styles.active]: color === Colors.BLUE,
              })}
              style={{ backgroundColor: Colors.BLUE }}
              onClick={() => updateColor(Colors.BLUE)}
            />
            <div
              className={cx(styles.colorBox, {
                [styles.active]: color === Colors.ORANGE,
              })}
              style={{ backgroundColor: Colors.ORANGE }}
              onClick={() => updateColor(Colors.ORANGE)}
            />
            <div
              className={cx(styles.colorBox, {
                [styles.active]: color === Colors.YELLOW,
              })}
              style={{ backgroundColor: Colors.YELLOW }}
              onClick={() => updateColor(Colors.YELLOW)}
            />
            <div
              className={cx(styles.colorBox, {
                [styles.active]: color === Colors.MAGENTA,
              })}
              style={{ backgroundColor: Colors.MAGENTA }}
              onClick={() => updateColor(Colors.MAGENTA)}
            />
            <div
              className={cx(styles.colorBox, {
                [styles.active]: color === Colors.PURPLE,
              })}
              style={{ backgroundColor: Colors.PURPLE }}
              onClick={() => updateColor(Colors.PURPLE)}
            />
            <div
              className={cx(styles.colorBox, {
                [styles.active]: color === Colors.PINK,
              })}
              style={{ backgroundColor: Colors.PINK }}
              onClick={() => updateColor(Colors.PINK)}
            />
            <div
              className={cx(styles.colorBox, {
                [styles.active]: color === Colors.CORAL,
              })}
              style={{ backgroundColor: Colors.CORAL }}
              onClick={() => updateColor(Colors.CORAL)}
            />
            <div
              className={cx(styles.colorBox, {
                [styles.active]: color === Colors.TEAL,
              })}
              style={{ backgroundColor: Colors.TEAL }}
              onClick={() => updateColor(Colors.TEAL)}
            />
            <div
              className={cx(styles.colorBox, {
                [styles.active]: color === Colors.GRAY,
              })}
              style={{ backgroundColor: Colors.GRAY }}
              onClick={() => updateColor(Colors.GRAY)}
            />
            <div
              className={cx(styles.colorBox, {
                [styles.active]: color === Colors.WHITE,
              })}
              style={{ backgroundColor: Colors.WHITE }}
              onClick={() => updateColor(Colors.WHITE)}
            />
          </div>
        </div>
      )}
      {showBrushToolOption && (
        <div className={styles.toolItem}>
          <h4 className={styles.toolText}>Brush Size</h4>
          <div className={styles.itemContainer}>
            <input
              type="range"
              min={1}
              max={10}
              step={1}
              onChange={updateBrushSize}
              value={size}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ToolBox;
