import React,{useState} from 'react'

export default function TextForm(props) {
    
    const handleUpClick = ()=>{
        console.log('uppercase was clicked ' + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted to upperCase!","success");
    }
    const handleOnChange = (event)=>{
        console.log('on-upper-channge')
        setText(event.target.value);
    }
    const handleLowClick = ()=>{
        console.log('Lowercase was clicked ' + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("converted to LowerCase!","success");
    }
    const handleClear = ()=>{
        console.log("all text are erased!!");
        let newText = '';
        setText(newText);
        props.showAlert("cleared all letters from text-box!","success");
    }
    const handleCopy = ()=>{
        console.log("copybutton clicked");
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to clipboard!","success");
    }
    const handleExtraSpaces = ()=>{
        console.log("extra spaces button clicked");
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "));
        props.showAlert("Extra Spaces has been romoved from text-box","success");
    }
    const [text, setText] = useState("");
    return (
        <>
        <div className="container" style={{color: props.mode==='light'?'black':'white'}}>
            <h1 className= "mb-4">{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'#13466e',color: props.mode==='light'?'black':'white'}}  id="myBox" rows="8"></textarea>
            </div>
            <button disabled ={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled ={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
            <button disabled ={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClear}>Clear</button>
            <button disabled ={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text</button>
            <button disabled ={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='light'?'black':'white'}}>
            <h2>Your text summary</h2>
            <p>{text.split(/\s/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview!"}</p>
        </div>
        </>    
    )
}
