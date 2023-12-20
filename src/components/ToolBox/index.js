import styles from "./index.module.css";
import React from "react";
import { Colors } from "@/constant";
const ToolBox = () => {
  const updateBrushSize = () => {};
  return (
    <div className={styles.toolboxContainer}>
      <div className={styles.toolItem}>
        <h4 className={styles.toolText}>Stroke Colour</h4>
        <div className={styles.itemContainer}>
          <div
            className={styles.colorBox}
            style={{ backgroundColor: Colors.BLACK }}
          />
          <div
            className={styles.colorBox}
            style={{ backgroundColor: Colors.RED }}
          />
          <div
            className={styles.colorBox}
            style={{ backgroundColor: Colors.GREEN }}
          />
          <div
            className={styles.colorBox}
            style={{ backgroundColor: Colors.BLUE }}
          />
          <div
            className={styles.colorBox}
            style={{ backgroundColor: Colors.ORANGE }}
          />
          <div
            className={styles.colorBox}
            style={{ backgroundColor: Colors.YELLOW }}
          />
          <div
            className={styles.colorBox}
            style={{ backgroundColor: Colors.MAGENTA }}
          />
          <div
            className={styles.colorBox}
            style={{ backgroundColor: Colors.PURPLE }}
          />
          <div
            className={styles.colorBox}
            style={{ backgroundColor: Colors.PINK }}
          />
          <div
            className={styles.colorBox}
            style={{ backgroundColor: Colors.CORAL }}
          />
          <div
            className={styles.colorBox}
            style={{ backgroundColor: Colors.TEAL }}
          />
          <div
            className={styles.colorBox}
            style={{ backgroundColor: Colors.GRAY }}
          />
        </div>
      </div>
      <div className={styles.toolItem}>
        <h4 className={styles.toolText}>Brush Size</h4>
        <div className={styles.itemContainer}>
          <input
            type="range"
            min={1}
            max={10}
            step={1}
            onChange={updateBrushSize}
          />
        </div>
      </div>
    </div>
  );
};

export default ToolBox;
