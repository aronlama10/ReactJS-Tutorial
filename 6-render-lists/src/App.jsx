import List1 from "./List1.jsx";
import List2 from "./List2.jsx";
import List3 from "./List3.jsx";

function App() {
  const fruits = [{id: 1, name: "apple", calories: 95},
                    {id: 2, name: "orange", calories: 45},
                    {id: 3, name: "banana", calories: 105},
                    {id: 4, name: "coconut", calories: 159},
                    {id: 5, name: "pineapple", calories: 37}];

  const vegetables = [{id: 6, name: "potatoes", calories: 110},
                      {id: 7, name: "celery", calories: 15},
                      {id: 8, name: "carrots", calories: 25},
                      {id: 9, name: "corn", calories: 63},
                      {id: 10, name: "broccoli", calories: 50}];

  return (
    <>
      <List1 />
      <List2 />
      {fruits.length > 0 && <List3 items={fruits} category="Fruits"/>}
      {vegetables.length > 0 && <List3 items={vegetables} category="Vegetables"/>}
    </>
  );
}

export default App
