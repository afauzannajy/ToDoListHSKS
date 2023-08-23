import { SetStateAction, useState } from "react";
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
  const [task, setTask] = useState<string>("");
  const [todos, setTodos] = useState<string[]>([]);

  function inputTask(event: { target: { value: SetStateAction<string> } }) {
    setTask(event.target.value);
  }
  function deleteTask(this: number) {
    // console.log(this);
    const filteredTodos = todos.filter((todo: string, i: number) => {
      if (i !== this) {
        return todo;
      }
    });
    setTodos(filteredTodos);
  }

  function editTask(this: number) {}

  function addTodoHandler(event: { preventDefault: () => void }) {
    event.preventDefault();
    setTodos([...todos, task]);
  }
  return (
    <>
      <h1 className="my-16 text-5xl font-medium text-center text-slate-300 drop-shadow-[0_4px_2px_#164e63]">
        A Fauzan N's To Do Lists
      </h1>
      <div className="flex-col w-1/3 p-5 m-auto shadow-md rounded-2xl bg-slate-900 shadow-cyan-700">
        <form onSubmit={addTodoHandler} className="flex justify-center">
          <input
            className="w-[80%] p-3 font-medium border-2 rounded-l-lg outline-none min-w-fit bg-slate-900 border-cyan-700 text-slate-300 placeholder-slate-600 focus:border-cyan-600"
            type="text"
            placeholder="Have any task?"
            onChange={inputTask}
            // value={task}
          />
          <button
            className="p-3 font-medium rounded-r-lg w-[25%] bg-cyan-700 text-slate-300 hover:bg-cyan-800 focus:border-cyan-700 focus:border-2"
            type="submit"
          >
            Add Task
          </button>
        </form>
        <ul className="flex flex-col justify-center mt-[25px]">
          {todos.map((todo: string, i: number) => {
            return (
              <li
                key={i}
                className=" relative flex items-center justify-between w-full p-4 mt-[15px] font-medium rounded-lg bg-cyan-700 text-slate-300 hover:bg-cyan-800 focus:border-cyan-700 focus:border-2"
              >
                <span>{todo}</span>
                <div className="inline-block ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                    stroke="currentColor"
                    className=" absolute right-12 -translate-y-1/2 inline-block w-5 h-5 cursor-pointer hover:stroke-[3.5] hover:w-6 hover:h-6"
                    onClick={editTask.bind(i)}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                    stroke="currentColor"
                    className=" absolute right-4 -translate-y-1/2 inline-block w-5 h-5 cursor-pointer hover:stroke-[3.5] hover:w-6 hover:h-6"
                    onClick={deleteTask.bind(i)}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
export { App };

// UI edit
{
  /* <li
            // key={i}
            className="flex items-center justify-between w-full pr-1 font-medium border-2 rounded-lg outline-none min-w-fit bg-slate-900 border-cyan-700 text-slate-300 placeholder-slate-600 focus:border-cyan-600"
          >
            <input
              className="w-[75%] p-3 font-medium rounded-lg outline-none min-w-fit bg-slate-900 text-slate-300"
              type="text"
              onChange={inputTask}
              value={task}
            />
            <div className="inline-block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="inline-block w-9 h-9 cursor-pointer hover:stroke-[3] bg-cyan-700 p-[6px] rounded-md mx-1 hover:bg-cyan-800"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6A2.25 2.25 0 016 3.75h1.5m9 0h-9"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="inline-block w-9 h-9 cursor-pointer hover:stroke-[3] bg-cyan-700 p-[6px] rounded-md mx-1 hover:bg-cyan-800"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </li> */
}
// UI confirm delete
{
  /* <div className="absolute top-0 left-0 z-10 w-full h-full bg-[rgba(0,0,0,0.60)]">
            <div className="relative p-3 m-auto font-medium text-center rounded-lg shadow-md w-fit top-1/4 bg-slate-900 shadow-cyan-700 text-slate-300">
              <p className="text-xl">Are you Sure?</p>
              <div className="flex justify-between mt-8">
                <button className="px-2 py-1 mr-2 rounded-md bg-cyan-700 hover:bg-cyan-800">
                  Yes, delete this list.
                </button>
                <button className="px-2 py-1 rounded-md bg-slate-300 hover:text-cyan-900 text-slate-900">
                  No, go back.
                </button>
              </div>
            </div>
          </div> */
}
