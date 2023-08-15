// 'use client'

// import { useLayoutEffect } from "react";
// import { useRef } from "react";

// const Cursor = () => {
//     const cursorRef = useRef(null);
//     useLayoutEffect(() => {
//         const mouseMove = (e) => {
//           let x = e.pageX + window.scrollX;
//           let y = e.pageY - window.scrollY;
    
//           setCursorPosition(x, y);
//         };
    
//         document.body.addEventListener("mousemove", mouseMove);
//         document.addEventListener("mouseleave", () => setCursorVisibility(false));
//         document.addEventListener("mousemove", () => setCursorVisibility(true));
    
//         return () => document.body.removeEventListener("mousemove", mouseMove);
//       }, [setCursorPosition, setCursorVisibility]);
//   return (
//     <div>Cursor</div>
//   )
// }

// export default Cursor