import express from "express";

const app = express();

app.get("/", (req, res)=>{
        res.json({
            code: 200,
            result: {
                message: "嘻嘻"
            }
        })
})

app.listen("8000", ()=>{
    console.log("app listenning on 8000");
})