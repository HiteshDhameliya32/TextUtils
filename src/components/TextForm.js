import React, {useState} from 'react'


export default function TextForm(props) {
  const [text, setText] = useState('');

  const handleUpperCase = ()=>{
    setText(text.toUpperCase());
    props.showAlert("Converted to uppercase!","success");
  }

  const handleLowerCase = ()=>{
    setText(text.toLowerCase());
    props.showAlert("Converted to lowercase!","success");
  }
  
  const handleOnChange = (event)=> {
    setText(event.target.value);
  }

  const handleClear = (event)=> {
    setText("");
    props.showAlert("Text box has been cleared!","success");
  }

  const handleCopy =() =>{
    // var text = document.getElementById("myBox");
    navigator.clipboard.writeText(text);
    document.getSelection().removeAllRanges();
    props.showAlert("Copied to clipboard!","success");
  }

  const handleRemoveSpace =() =>{
   let newText = text.split(/[ ]+/);
   setText(newText.join(" "));
   props.showAlert("Extra space has been removed!","success");
  }

  return (
    <>
    
    <div className='container' style={{color:props.mode==="dark"?"white":"#042743"}}>
        <h1>{props.heading}</h1>  
        <div className="mb-3">
        <textarea className="form-control" style={{backgroundColor:props.mode==="dark"?"#13466e":"white",color:props.mode==="dark"?"white":"#042743"}} onChange={handleOnChange} value={text}  id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-3 my-1" onClick={handleUpperCase}>Convert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-3 my-1" onClick={handleLowerCase}>Convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-3 my-1" onClick={handleClear}>Clear</button>
        <button disabled={text.length===0} className="btn btn-primary mx-3 my-1" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-3 my-1" onClick={handleRemoveSpace}>Remove Spaces</button>
    </div>
    <div className="container my-3" style={{color:props.mode==="dark"?"white":"#042743"}}>
      <h1>Your text summary</h1>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters.</p>
      <p>{0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes to read.</p>
      <h2>Preview</h2>
      <p>{text.length > 0 ?text : "Nothing to preview."}</p>
    </div>
    </>
  )
}
