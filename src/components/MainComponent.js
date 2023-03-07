import React, { useState, useEffect } from 'react';
// import Spinner from 'react-spinkit';

function MainComponent() {
    const [msgData, setMsgData] = useState();
    const [appData, setAppData] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    // receive data from iframe to component
    function compMethod(dataObj) {
        console.log("received in compMethod", dataObj);
        if (dataObj && dataObj.id === 'sendData' && dataObj.data.body) {
            setAppData(dataObj.data.body);
        }
    }
    window.compMethod = compMethod;

    function loadIframe() {
        setIsLoading(false);
        let destination = document.getElementById("my_frame");
        if (destination && destination.contentWindow) {
            destination.contentWindow.getData(msgData);   // sending data from component to iframe if both at same origin
            // destination.contentWindow.postMessage(msgData, '*');
            let frameWindow = destination.contentWindow;  // returns Window object
            // use this window object to access the iframe's document and its internal DOM
            frameWindow.document.querySelector("body").style.backgroundColor = "grey";
        }
    }

    useEffect(() => {
        let element = document.getElementById("my_frame");
        if (element) {
            document.getElementById('my_frame').src = 'newTask.html';
        }
    }, [msgData]);

    // this block can be used if component and iframe are running on different origins(for receiving data to component)
    window.addEventListener('message', function (e) {
        if (e && e.data) {
            let messageData = e.data.toString();
            let containsData = messageData.includes("sendData");
            if (containsData) {
                console.log("Data received in Site/app:", JSON.parse(e.data));
                let dataObj = JSON.parse(e.data);
                if (dataObj && dataObj.id === 'sendData' && dataObj.data.body) {
                    setAppData(dataObj.data.body);
                }
            }
        }
    });

    function handleClick() {
        let dataPassed = {
            id: "message",
            data: "Data Object passed from component to inside of Iframe"
        }
        console.log('data:', dataPassed);
        setMsgData(dataPassed);
    }

    return (
        <div className='mainContainer'>
            <div className='buttonDiv'>
                <button onClick={handleClick}>Load/Send to Iframe</button>
            </div>

            <div className='displayDiv'>{appData && appData}</div>

            <iframe
                id='my_frame'
                className="iframe"
                src=""
                height="500px"
                width="600px"
                onLoad={loadIframe}
                title="IframeTest">
            </iframe>
        </div>
    );
}

export default MainComponent;