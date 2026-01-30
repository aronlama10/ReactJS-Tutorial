// Updater Function = A function passed as an argument to setState() usually
//                    ex. setYear(arrow function)
//                    Allow for safe updates based on the previous state 
//                    Used with multiple state updates and asynchronous functions 
//                    Good practice to use updater functions.

import MyComponents from "MyComponent.jsx";

function App() {
  return (
    <>
      <MyComponents />
    </>
  );
}

export default App;