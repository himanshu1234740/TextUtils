import React from 'react'

export default function alert(props) {
    return (
            <div style={{height: '10px'}} >
            {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{props.alert.type==='success'?'Success':null} </strong>{props.alert.msg}
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>}
            </div>
        
    )
}
