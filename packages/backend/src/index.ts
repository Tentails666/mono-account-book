import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res)=>{
        res.json({
            code: 200,
            result: {
                message: "嘻2嘻"
            }
        })
})

app.listen(port, ()=>{
    console.log(`app listenning on ${port}`);
})