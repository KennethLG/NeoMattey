import express from "express";
import path from "path";

const app:any = express();

app.use(express.static("dist"));

app.get("*", (req: express.Request, res: express.Response) => {
	res.sendFile(path.resolve(__dirname, "index.html"));
});

app.listen(4000, ()=> {
	console.log("server on port 4000");
});