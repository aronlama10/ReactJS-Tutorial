// props = read-only properties that are shared between components.
//         A parent component can send data to a child component.
//         <Component key=value />

// propTypes = a mechanism that ensures that the passed value
//             is of the correct datatype.
//             age: PropTypes.number

// defaultProps = deafault value for props in case they are not 
//                passed from the parent component 
//                name: "Guest"

// defaultProps are now deprecated in React 19+


import Student from "./Student.jsx";

function App() {
  return (
    <>
      <Student name="Aron Lama" age={18} isStudent={true} />
      <Student name="Lionel Messi" age={38} isStudent={false} />
      <Student name="Pedri Gonzalez" age={23} isStudent={false} />
      <Student name="Lamine Yamal" age={18} isStudent={true} />
      <Student name="" age="" isStudent=""/>
    </>
  );
}

export default App;
