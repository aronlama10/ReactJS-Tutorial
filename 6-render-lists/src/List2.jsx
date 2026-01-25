
export default function List2() {
    const fruits = [{id: 1, name: "apple", calories: 95},
                    {id: 2, name: "orange", calories: 45},
                    {id: 3, name: "banana", calories: 105},
                    {id: 4, name: "coconut", calories: 159},
                    {id: 5, name: "pineapple", calories: 37}];

    // fruits.sort((a, b) => a.name.localeComapare(b.name)) ALPAHBETICAL
    // fruits.sort((a, b) => b.name.localeComapare(a.name)) REVEERSE ALPAHBETICAL
    // fruits.sort((a, b) => a.calories - b.calories); NUMERIC ORDER
    // fruits.sort((a, b) => b.calories - a.calories); REVERSE NUMERIC ORDER

    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
    // const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);

    const listItems = fruits.map(Fruit => <li key={Fruit.id}>
                                            {Fruit.name}: &nbsp;<b>{Fruit.calories}</b>
                                          </li>);

    return (<ol>{listItems}</ol>);
}