// useEffect() = React Hook that React DO SOME CODE WHEN (pick one):
//               This component re-renders
//               This component mounts
//               The state of a value changed

// useEffect(function, [dependences])

// 1. useEffect(() => {})           //Runs after every re-render
// 2. useEffect(() => {}, [])       //Runs only on mount 
// 3. useEffect(() => {}, [value])  //Runs on mount + when value changes

// USES 
// 1. Event listeners
// 2. DOM Manipulation 
// 3. Subscription (real-time updates)
// 4. Fetching Data from an API
// 5. Clean up when a component unmounts

// import Counter from "./Counter.jsx"
import Example from "./Example.jsx";

function App() {
  return (
    <>
      <Example />
      {/* <Counter /> */}
    </>
  );
}

export default App