// HOW TO STYLE REACT COMPONENTS WITH CSS
// --------------------------------------
// (not including external framework or preprocessor

// 1.EXTERNAL: Global CSS like index.css
// 2.MODULES: Create own componentName.module.css file and importing it on its own components(Button/Button.jsx, Button.module.css)
// 3.INLINE: Create a styles Object and writing a CSS code inside it and use it in a element which will return 

import Button from "./Button";

function App() {
    return (
      <>
        <Button />
      </>
    );
}

export default App
