const net = require("net");
const pipeConfig = require('./pipeConfig');

const server = net.createServer(stream => {
    console.log("[s] connection has been set");

    stream.on("data", data => {
        console.log("[s] streamed data: " + data.toString());
    })
    stream.on("end", () => {
        console.log("[s] streaming has ended")
        server.close();
    })

    stream.write("This message was sent from server.");
})

server.on("close", () => {
    console.log("[s] Server has been closed.")
})

server.listen(pipeConfig.PIPE_PATH, () => {
    console.log("[s] Server is listening.")
})