import express from "express";
import path from "path";
import {router} from "./routes/index";
import {config} from "./config";

const app:any = express();

app.use(express.static("dist"));

//routes
router(app);

app.listen(config.port, ()=> {
	console.log(`Server started on port ${config.port}`);
});