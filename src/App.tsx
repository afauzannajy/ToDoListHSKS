// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   );
// }

function App() {
  return (
    <>
      <h1 className="text-5xl text-slate-300 text-center font-medium my-16">
        A Fauzan N's To Do Lists
      </h1>
      <div className="flex justify-center">
        <input
          className="p-3 min-w-fit w-[30%] rounded-l-lg bg-slate-900 border-cyan-700 border-2 outline-none text-slate-300 font-medium placeholder-slate-600 focus:border-cyan-600"
          type="text"
          placeholder="Have any task?"
        />
        <button
          className="p-3 rounded-r-lg bg-cyan-700 text-slate-300 font-medium hover:bg-cyan-800 focus:border-cyan-700 focus:border-2"
          type="submit"
        >
          Add Task
        </button>
      </div>
    </>
  );
}
export { App };
