import { useState } from "react";
import "./App.css";

function App() {
    const [input, setInput] = useState("");

    const handleClick = (value) => setInput((prev) => prev + value);
    const handleClear = () => setInput("");
    const handleCalculate = () => {
        try {
            setInput(eval(input).toString()); // Используем eval (небезопасно, но для примера пойдет)
        } catch {
            setInput("Error");
        }
    };

    return (
        <div className="calculator">
            <div className="display">{input || "0"}</div>
            <div className="buttons">
                {["7", "8", "9", "/"].map((val) => (
                    <button key={val} onClick={() => handleClick(val)}>{val}</button>
                ))}
                {["4", "5", "6", "*"].map((val) => (
                    <button key={val} onClick={() => handleClick(val)}>{val}</button>
                ))}
                {["1", "2", "3", "-"].map((val) => (
                    <button key={val} onClick={() => handleClick(val)}>{val}</button>
                ))}
                {["0", ".", "+", "="].map((val) => (
                    <button key={val} onClick={val === "=" ? handleCalculate : () => handleClick(val)}>{val}</button>
                ))}
                <button className="clear" onClick={handleClear}>C</button>
            </div>
        </div>
    );
}

export default App;
