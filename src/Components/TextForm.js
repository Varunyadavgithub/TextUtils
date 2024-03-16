import React, { useState } from "react";

export default function TextForm(props) {
    // function to convert in UpperCase...
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Your text is converted into Upper Case","success");
  };
  // function to convert in LowerCase...
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Your text is converted into Lower Case","success");
  };
  // function to clear the input...
  const handleClearText = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared!","success");
  };
  // function to reverse the text...
  const handleReverseText = () => {
    let newText = "";
    for (let i = text.length - 1; i >= 0; i--) {
      newText += text[i];
    }
    setText(newText);
    props.showAlert("Your text has been reversed","success");
  };
  // function to make text CapitalizeCase...
  const handleCapitalizeText = () => {
    let newText = text
      .split(" ")
      .map((el) => el.charAt(0).toUpperCase() + el.slice(1))
      .join(" ");
    setText(newText);
    props.showAlert("Your text is converted into Capitalized form","success");
  };

  // function to copy text...
  const handleCopyText = () => {
    let newText = document.getElementById("myBox");
    newText.select();
    navigator.clipboard.writeText(newText.value);
    props.showAlert("Copied to Cligboard.","success");
  };
  // function to remove extra spaces...
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed.","success");
  };
  // function to make text bold...
  const handleBoldText = () => {
    let newText = document.getElementById("myBox");
    newText.style.fontFamily = "bold";
    props.showAlert("Your text is converted into Bold text","success");
  };


  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  // text="new text"; //Wrong way to change the state
  // setText("new text"); //Correct way to change the state

  return (
    <>
      <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1 className="mb-2">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'#042743'}}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button disabled={text.length===0} style={{cursor:'pointer'}} className="btn btn-primary mx-1 my-1 " onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>
          Convert to LowerCase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCapitalizeText}>
          Capitalize Case
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleReverseText}>
          Reverse Text
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleBoldText}>
          Bold Text
        </button>
        <button disabled={text.length===0} className="btn btn-success mx-1 my-1" onClick={handleCopyText}>
          Copy Text
        </button>
        <button disabled={text.length===0} className="btn btn-danger mx-1 my-1" onClick={handleClearText}>
          Clear Text
        </button>
      </div>

      <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Your Text Summary</h2>
        <p>
          Word Count: {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} | Character Count: {text.length}{" "}
          | Sentence Count: {text.split("\n").length-1}
        </p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read.</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview"}</p>
      </div>
    </>
  );
}
