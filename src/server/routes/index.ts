import express from "express";
import path from "path";

export const router: any = (app: any) => {
	app.get("*", (req: express.Request, res: express.Response) => {
		res.sendFile(path.resolve(__dirname, "index.html"));
	});
}