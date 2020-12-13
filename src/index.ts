import express from "express";
import {router} from "./routes/index";

const app:any = express();
router(app);

app.listen(3000, ()=> {
	console.log("server on port 3000");
});