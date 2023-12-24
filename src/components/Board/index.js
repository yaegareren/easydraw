import styles from "./index.module.css";
import React, { useEffect, useLayoutEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MenuItems } from "@/constant";
import { actionItemClick } from "@/slice/menuSlice";
const Board = () => {
  const dispatch = useDispatch();
  const canvasRef = useRef(null);
  const drawHistory = useRef([]);
  const historyptr = useRef(0);
  const shouldDraw = useRef(false);
  const { activeMenuItem, actionMenuItem } = useSelector((state) => state.menu);
  const { color, size } = useSelector((state) => state.toolbox[activeMenuItem]);

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    if (actionMenuItem === MenuItems.DOWNLOAD) {
      const url = canvas.toDataURL();
      const anchor = document.createElement("a");
      anchor.href = url;
      anchor.download = "picture.png";
      anchor.click();
    } else if (
      actionMenuItem === MenuItems.UNDO ||
      actionMenuItem === MenuItems.REDO
    ) {
      if (historyptr.current > 0 && actionMenuItem === MenuItems.UNDO)
        historyptr.current -= 1;
      if (
        historyptr.current < drawHistory.current.length - 1 &&
        actionMenuItem === MenuItems.REDO
      )
        historyptr.current += 1;
      const imageData = drawHistory.current[historyptr.current];
      context.putImageData(imageData, 0, 0);
    }
    dispatch(actionItemClick(null));
  }, [actionMenuItem, dispatch]);

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    const changeConfig = () => {
      context.strokeStyle = color;

      context.lineWidth = size;
    };

    changeConfig();
  }, [color, size]);

  // before browser paints
  useLayoutEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    // when mounting
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const beginPath = (x, y) => {
      context.beginPath();
      context.moveTo(x, y);
    };

    const drawLine = (x, y) => {
      context.lineTo(x, y);
      context.stroke();
    };

    const handleMouseDown = (e) => {
      shouldDraw.current = true;
      beginPath(e.clientX, e.clientY);
    };
    const handleMouseMove = (e) => {
      if (!shouldDraw.current) return;
      drawLine(e.clientX, e.clientY);
      context.stroke();
    };
    const handleMouseUp = (e) => {
      shouldDraw.current = false;
      const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
      drawHistory.current.push(imageData);
      historyptr.current = drawHistory.current.length - 1;
    };

    canvas.addEventListener("mousedown", handleMouseDown);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseup", handleMouseUp);

    return () => {
      canvas.removeEventListener("mousedown", handleMouseDown);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <>
      <canvas ref={canvasRef}></canvas>
    </>
  );
};

export default Board;
