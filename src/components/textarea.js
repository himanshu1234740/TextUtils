import React, { useState } from 'react'

export default function Main(props) {
    const handleupper = () => {
        let newText = text.toUpperCase()
        setText(newText)

    }
    const handleonchange = (event) => {
        setText(event.target.value)

    }
    const back = () => {
        if (text !== "") {
            let value = text.split(" ");
            let textValue = ""
            for (let i = 0; i < value.length; i++) {
                let str = "";
                for (let j = 0; j < value[i].length; j++) {
                    if (j === 0) {
                        str = str + (value[i][0].toUpperCase());
                    } else {
                        str = str + (value[i][j]);
                    }
                }
                textValue = textValue + str + " ";
            }
            setText(textValue);
        }

    }
    const lowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }
    const copy = () => {
        let tex = document.getElementById("exampleInputEmail1")
        tex.select();
        console.log(navigator.clipboard.writeText(tex.value))
    }
    const space = () => {
        let myArray = text.split(/[ ]+/);
        let space = myArray.join(" ");
        setText(space)
    }
    function perview() {

        document.getElementById('para').innerHTML = text;
    }

    const [text, setText] = useState("")

    let count = 0;
    let chr = 0;
    if (text==="") {
        count = 0;
        chr=0;
    } else if (text.charAt(text.length - 1) === " ") {
        let data = text.trim().split(" ").length;
        if(data === 1){
            count=0
        }else{
            count = count+data;
        }
        
        let st = text.trim().length
        chr = chr+st;
        
    }
    else {
        count = count + text.split(" ").length;
        chr = chr+text.length;
    }

    return (
        <form>
            <div className="container mt-4">
                <div className="mb-3">
                    <label className="form-label">{props.text}</label>
                    <textarea type="text" style={{ backgroundColor: `${props.darkMode === 'dark' ? '#9f9f9f' : 'white'}`, color: `${props.darkMode === 'dark' ? 'white' : 'black'}` }} value={text} className="form-control" onChange={handleonchange} rows="6" id="exampleInputEmail1" aria-describedby="emailHelp" />

                </div>

                <button type='button' className={`btn btn-${props.darkMode === 'dark' ? 'dark' : 'primary'}`} onClick={handleupper}>Convert To UpperCase</button>
                <button type='button' className={`btn btn-${props.darkMode === 'dark' ? 'dark' : 'primary'} mx-3 my-2`} onClick={perview}>Preview</button>
                <button type='button' className={`btn btn-${props.darkMode === 'dark' ? 'dark' : 'primary'} mx-2 my-2`} onClick={back}>Cpaitlize Case</button>
                <button type='button' className={`btn btn-${props.darkMode === 'dark' ? 'dark' : 'primary'} mx-2 my-2`} onClick={lowerCase}>Convert To Lowercase</button>
                <button type='button' className={`btn btn-${props.darkMode === 'dark' ? 'dark' : 'primary'} mx-2 my-2`} onClick={copy}>Copy Text</button>
                <button type='button' className={`btn btn-${props.darkMode === 'dark' ? 'dark' : 'primary'}`} onClick={space}>Remove Extra Space</button>


            </div>
            <div className="container mt-3">
                <h1>Your Text Summary</h1>
                <p> {count} Words And {chr} Characters</p>
                <p>{0.0033 * count} Minutes To Read This Text</p>
                <h4>Preview Of Text</h4>
                <p id="para" ></p>
            </div>

        </form>
    )
}
