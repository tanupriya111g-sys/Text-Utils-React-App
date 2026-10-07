import React,{useState}from 'react'

export default function TextForm(props) {
  const handleUpclick = ()=>{
    console.log("Button was clicked" + text);
    let newtext = text.toUpperCase();
    setText(newtext)
    props.showAlert("Converted to Uppercase!" , "success");
  }

  const handleLoclick = ()=>{
    console.log("Button was clicked" + text);
    let newtext = text.toLowerCase();
    setText(newtext)
    props.showAlert("Converted to Lowercase!" , "success");
  }
  const handleCleclick = ()=>{
    console.log("Button was clicked" + text);
    let newtext = " ";
    setText(newtext)
    props.showAlert("Text Cleared!" , "success");
  }

  const handleReclick = ()=>{
    console.log("Button was clicked" + text);
    let newtext = text.repeat(2);
    setText(newtext)
  }

  
  const handleOnChange = (event)=>{
    console.log("On change");
    setText(event.target.value);
  }

  const[text , setText] = useState(" ");
  //text="New text"; //Wrong text
  //setText("New text");


  return (
    <>
      <div className="container" style={{color: props.mode==='dark'?'white':'black'}} >
        <h1>{props.heading} </h1>
        <div className="mb-3">
        <textarea className="form-control" value= {text} style={{backgroundColor: props.mode==='dark'?'#0b2942':'white', color: props.mode==='dark'?'white':'black'}} id="MyBox" onChange={handleOnChange} rows="10" ></textarea>
        <button className="btn btn-primary mx-2" onClick={handleUpclick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoclick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleCleclick}>Convert to Clear</button>
        <button className="btn btn-primary mx-2" onClick={handleReclick}>Convert to Repeat</button>

        </div>
    </div>

    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
      <h2><b>Your Text Summery</b></h2>
      <p>{text.split (" ").length} words and {text.length} characters</p>
      <p>{0.008*text.split (" ").length} Minutes Read</p>
      <h4>Preview</h4>
      <p>{text}</p>
    </div>
    </>
    
  )
}
