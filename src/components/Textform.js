import { useState } from 'react'
import React from 'react'

export default function Textform(props) {
    const handleUpClick = () => {
        console.log("Uppercase was clicked"+text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("converted to Uppercase was clicked","success")
    }
    const handlelowClick = () => {
        console.log("Lowercase was clicked"+text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("converted to Lowercase was clicked","success")
    }
    const handleonclear = () => {
        console.log("Lowercase was clicked"+text);
        setText("")
        props.showAlert("All clear","success")
    }
    const FontStyle = () => {
        console.log("Lowercase was clicked"+text);
        let mybox = document.getElementById("my-box")
        mybox.style.fontFamily = 'Courier New'
        props.showAlert("FontStyle changed","success")
    }
    const handleonCopy = () => {
        console.log("Lowercase was clicked")
        let mybox = document.getElementById("my-box")
        mybox.select()
        navigator.clipboard.writeText(mybox.value)
        props.showAlert("copy to clipboard","success")
    }
    const  removeExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extraspaces are removed","success")
    }
    const handleonChange = (event) => {
        setText(event.target.value)
    }
    const [text,setText] = useState("");
return (
    <>
<div className='container' style={{color:  props.mode=== 'light'?'#042743':'white'}}>
    <h1>{props.heading}</h1>
<div className="mb-3">
<label htmlFor="my-box" className="form-label"></label>
<textarea className="form-control" value={text} onChange={handleonChange} style={{backgroundColor:  props.mode=== 'dark'?'#042743':'white' ,color:  props.mode=== 'dark'?'white':'#042743'}} id="my-box" rows="9"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-2" onClick={handlelowClick}>Convert to Lowercase</button>
<button className="btn btn-primary mx-2" onClick={handleonclear}>Clear</button>
<button className="btn btn-primary mx-2" onClick={handleonCopy}>Copy</button>
<button className="btn btn-primary mx-2" onClick={removeExtraSpaces}>Remove extra spaces</button>
<button className="btn btn-primary mx-2" onClick={FontStyle}>FontStyle changed</button>



</div>
<div className="container" style={{color:  props.mode=== 'light'?'black':'white'}}>
    <p className='my-2'>Your text summary</p>
    <p className='my-2'>{text.split(" ").length} words and {text.length} characters</p>
    <p className='my-2'> Preview</p>
    <p className='my-2'>{text.length === 0?"Enter your word to preview":text}</p>

</div>
</>
)
}
