
export default function List1() {
    const fruits = ["apple", "orange", "banana", "coconut", "pineapple"];

    const listItems = fruits.map(fruit => {
        return <li>{fruit}</li>
    });

    return (<ul>{listItems}</ul>);
}