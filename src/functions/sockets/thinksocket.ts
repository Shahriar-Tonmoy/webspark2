function get_thinking(promt: string, callback: (data: string) => void, ws: WebSocket) {
    ws.onopen = () => {
        console.log('socket live');
        ws.send(JSON.stringify({promt: promt}))
    }
    ws.onmessage = (event) => {
        const data = JSON.parse(event.data)
        callback(data);
    }
}

export {get_thinking};