import express from "express";
import path from "path";

export const router: any = (app: any) => {

	app.get("*", (req:any, res:any, next:any) => {
		try {
			res.send(`
				<!DOCTYPE html>
				<html>
					<head>
						<title>Mattey</title>
					</head>
					<body>
						<div id="root"></div>
						<script type="application/javascript" src="bundle.js"></script>
					</body>
				</html>`);
		} catch(e) {
			console.error(e);
			next(e);
		}
	});
}