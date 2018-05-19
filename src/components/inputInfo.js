import React from 'react'
function InputInfo(props) {
    return (
        <div className="inp">

            <input id="button" type="submit" onClick={props.find} value='Information'/>
        </div>
    )
}
export default InputInfo