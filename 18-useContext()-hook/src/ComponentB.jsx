// import { func } from "prop-types";
import ComponentC from "./ComponentC.jsx";
import { useContext } from "react";
import { UserContext } from "./ComponentA.jsx";


export default function ComponentB() {

    return (
        <>
            <div className="box">
                <h1>Component B</h1>
                <ComponentC />
            </div>
        </>
    );
}