const http = require("http")
const fs = require("fs")
const server = http.createServer((req, res) => {
    const Emiter = require("events")
    const event = new Emiter()

    // event.on("anshu", () => {
    //     console.log("hello from anshu");
    // })

    // event.emit("anshu")
    // if (req.url == '/') {
    //     fs.readFile('hello.text', 'utf-8', (err, data) => {
    //         if (err) {
    //             console.log(err);
    //         }
    //         console.log(data);
    //         res.end(data)
    //     })
    // }
    // else if (req.url == '/hello') {
    //     fs.ReadStream("data")
    // }
    const rdStream = fs.createReadStream("hello.text")
    // ! way 1 
    // rdStream.on("data", (chunkdata) => {
    //     res.end(chunkdata)
    // })
    // rdStream.on("end", () => {
    //     res.end()
    // })
    // rdStream.on("err", (error) => {
    //     res.end(error)
    // })

    //! way 2  
    rdStream.pipe(res)
})

server.listen(8000, () => {
    console.log("Server is running");
})