import React, { useRef } from 'react';
import html2canvas from 'html2canvas';

const ScreenShotV2 = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const captureIframe = () => {
    const iframe = iframeRef.current;
    
    if (iframe) {
      html2canvas(iframe.contentDocument.body).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.download = 'iframe_capture.png';
        link.href = imgData;
        link.click();
      });
    }
  };

  return (
    <div>
      <iframe
        ref={iframeRef}
        src="https://genwebbuilder.com"
        title="Iframe to capture"
        width="800"
        height='800'
      />
      <button className='bg-white h-full w-fit mx-auto' onClick={captureIframe}>Save as PNG</button>
    </div>
  );
};

export default ScreenShotV2;