import React, { useState } from 'react';


export default function TextForm(props) {
    // const handleUpClick = () => {
    //     console.log("Uppercase was clicked" + text);
    //     let newText = text.toUpperCase();
    //     setText(newText);
    // }
    // const handleUpChange = (event) => {
    //     console.log("On change");
    //     setText(event.target.value);
    // }
    const handleUpClick = () => {
        // setText("Upper CAse");
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text converted to uppercase", "Success");
    }
    const handleLoClick = () => {
        // setText("Upper CAse");
        console.log("Lowercase was clicked" + text);
        let newText = text.toLocaleLowerCase();
        setText(newText);
        props.showAlert("Text converted to lowercase", "Success");
    }
    const hendleToclear = () => {
        // setText("Upper CAse");
        console.log("Lowercase was clicked" + text);
        let newText = ("");
        setText(newText);
        props.showAlert("Text cleared", "Success");
    }
    const handleUpChange = (event) => {
        setText(event.target.value);
    }
    const copyText = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Text copied to clipboard", "Success");
    }
    const undoText = () => {
        setText(text.substring(0, text.length - 1));
        props.showAlert("Text removed", "Success");
    }
    const redoText = () => {
        setText(text.substring(0, text.length + 1))
        props.showAlert("Text added", "Success");
    }
    const extraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed", "Success");
    }
    const [text, setText] = useState("");

    return (
        <>
            <div className='container my-3' style={{ color: props.mode === "dark" ? "white" : "black" }}>
                <h1>{props.heading}</h1>
                <textarea className="form-control my-3" value={text} onChange={handleUpChange} style={{ backgroundColor: props.mode === "dark" ? "#13428e" : "white", color: props.mode === "dark" ? "white" : "black" }} id="textBox" rows="8"></textarea>
                <button disabled={text.length===0} onClick={handleUpClick} className="btn btn-primary m-1">Convert to Uppercase</button>
                <button disabled={text.length===0} onClick={handleLoClick} className="btn btn-primary m-1">Convert to Lowercase</button>
                <button disabled={text.length===0} onClick={hendleToclear} className="btn btn-primary m-1">Clear Text</button>
                <button disabled={text.length===0} onClick={copyText} className="btn btn-primary m-1">Copy Text</button>
                <button disabled={text.length===0} onClick={undoText} className="btn btn-primary m-1">Undo</button>
                <button disabled={text.length===0} onClick={redoText} className="btn btn-primary m-1">Redo</button>
                <button disabled={text.length===0} onClick={extraSpaces} className="btn btn-primary m-1">Remove Extra Spaces</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === "dark" ? "white" : "black" }}>
                <h2>Your text summary</h2>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!=0}).length} words {text.length} character</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!=0}).length} Minutes read</p>
                <h2>Preview</h2>
                <p id="textBox">{text.length > 0 ? text : "Nothing to priview"}</p>
            </div>
        </>
    )
}
