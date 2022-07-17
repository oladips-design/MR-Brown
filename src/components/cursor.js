import React, { useEffect, useRef } from "react";

function Cursor() {
  const cursor = useRef();
  const cursorInner = useRef();
  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      cursor.current.style.top = `${e.pageY - 16}px`;
      cursorInner.current.style.top = `${e.pageY - 5}px`;
      cursor.current.style.left = `${e.pageX - 16}px`;
      cursorInner.current.style.left = `${e.pageX - 5}px`;
    });
  }, []);

  return (
    <>
      <div className="cursor" ref={cursor}></div>
      <div className="cursorInner" ref={cursorInner}></div>
    </>
  );
}

export default Cursor;
