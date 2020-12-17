import express from "express";
import path from "path";
import {videosApi} from "./routes/apis";
import {config} from "./config";

const app:any = express();

app.use(express.static("dist"));

//routes
const router:any = express.Router();
videosApi(app, router);

app.get("*", async (req: express.Request, res: express.Response, next: express.NextFunction) => {
	try {
		res.sendFile(path.resolve(__dirname, "index.html"));
	} catch (e) {
		console.error(e);
		next(e);
	}
});

app.listen(config.port, ()=> {
	console.log(`Server started on port ${config.port}`);
});