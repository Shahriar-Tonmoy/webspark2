import React, { useEffect, useState } from 'react';

export default function PreviewPage(){
    const [iurl, setiurl] = useState('');
    useEffect(() => {
    const paramsString = window.location.hash.substring(1);
    const params = new URLSearchParams(paramsString);
    setiurl('http://aiuse.genwebbuilder.com'+params.get('site'));
    }, []);
    return (<div className='h-full w-full'>
        <iframe src={iurl} className='w-full h-full' />
    </div>)
}