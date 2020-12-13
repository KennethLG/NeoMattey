import express from "express";
import {router} from "./routes/index";

const app:any = express();
router(app);

app.listen(4000, ()=> {
	console.log("server on port 4000");
});