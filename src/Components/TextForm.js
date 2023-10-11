import React, {useState} from 'react'


export default function TextForm(props) {
    const HandleUpClick = ()=>{
      let newText = text.toUpperCase();
      setText(newText);
    }

    const HandleOnChange = (event)=>{
      setText(event.target.value)
    }
    
    const handleCopy = () => {
      var text = document.getElementById("mybox");
      text.select();
      navigator.clipboard.writeText(text.value);
      document.getSelection().removeAllRanges();
    }

    const handleClearClick = () => {
      let newText = '';
      setText(newText)
    }

    const handleExtraSpaces = () => {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
    }
   const [text, setText] = useState('Enter Your Text Here');
  return (
          <>
          <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1>{props.Heading}</h1>
            <div className="mb-3 my-4">
            <textarea className="form-control" value={text} onChange={HandleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} id="mybox" rows='8'></textarea>
            </div>
            <button className="btn btn-primary mx-1 my-1" onClick={HandleUpClick}>Change to UpperCase</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>CopyText</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
          </div>
          <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!== 0}).length} Words and {text.length} Characters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!== 0}).length} Minutes Read</p>
          </div>
          </>
  )
}
