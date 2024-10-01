$.ready(() => {
    const channel = new BroadcastChannel('test-channel');

    channel.onmessage = event => {
        console.log('receive message ');
        console.log(event.data);
    }

    let button = $('button');

    button.on('click', evt => {
        const channel = new BroadcastChannel('test-channel');

        channel.postMessage({
            x: 10,
            y: 20
        })       
    })
})