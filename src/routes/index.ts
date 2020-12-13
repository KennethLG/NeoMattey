import express from "express";
import path from "path";

export const router: any = (app: any) => {

	app.get("*", (req:any, res:any, next:any) => {
		try {
			res.sendFile(path.resolve(__dirname, "index.html"));
		} catch(e) {
			console.error(e);
			next(e);
		}
	});

	
}