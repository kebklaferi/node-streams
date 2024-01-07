const net = require('net');
const pipeConfig = require('./pipeConfig');

const client = net.connect(pipeConfig.PIPE_PATH, () => {
    console.log("[c] connecting ...");
})

client.on("data", data => {
    console.log("[c] streamed data: " + data.toString());
    client.end("[c] streaming ended");
})

client.on("end", () => {
    console.log("[c] end")
})