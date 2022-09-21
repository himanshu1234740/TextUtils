import React, { useState } from 'react'

export default function About() {

    const toggleDarkMode = () => {

        if (light.backgroundColor === "blue") {
            setLight({
                marginLeft: '1004px',
                color: 'white',
                backgroundColor: 'black'
            })
            setBtn("Light Mode")
            setLightMode({
                backgroundColor: 'grey',
                color: 'white',
            })
            

        }
        else if (light.backgroundColor === 'black') {

            setLight({
                marginLeft: '1004px',
                color: 'white',
                backgroundColor: 'blue'
            })
            setBtn("Dark Mode")
            setLightMode({
                backgroundColor: 'white',
                color: 'black',
            })
        }
    }
    const [btn, setBtn] = useState("Dark Mode")
    const [light, setLight] = useState({
        marginLeft: '1004px',
        color: 'white',
        backgroundColor: 'blue'
    })
    const [lightMode, setLightMode] = useState({
        backgroundColor: 'white',
        color: 'black',
    })


    return (
        <>

            <div className="container mt-3">
                <button className='btn ' style={light} onClick={toggleDarkMode}>{btn}</button>
                <div className="row row-cols-1 row-cols-md-3 g-4 mt-4">
                    <div className="col"  >
                        <div className="card h-100" style={lightMode} >

                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100" style={lightMode}>

                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a short card.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100" style={lightMode}>

                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a short card.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100" style={lightMode}>

                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a short card.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
