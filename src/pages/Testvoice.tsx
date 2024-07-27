import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import React from "react";


const Dictaphone = () => {


    const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'bn-BD' });
    const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();

    if (!browserSupportsSpeechRecognition) {
        return null
    }

    return (
        <div className='bg-white'>
            <div className="container">
                <h2>Speech to Text Converter</h2>
                <br/>
                <p>A React hook that converts speech from the microphone to text and makes it available to your React
                    components.</p>

                <div className="main-content">
                    {transcript}
                </div>

                <div className="btn-style">

                    <button onClick={startListening}>Start Listening</button>
                    <button onClick={SpeechRecognition.stopListening}>Stop Listening</button>

                </div>

            </div>

        </div>
    );
};

export default Dictaphone;