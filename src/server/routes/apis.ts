import express from "express";
import {VideosService} from "../services/services";

export const videosApi = (app:any, router:any) => {
	app.use("/api", router);
	const videosService: any = new VideosService();

	router.get("/videos", async (req: express.Request, res: express.Response, next: express.NextFunction) => {
		try {
			const {tag}:any = req.query;
			const videos: any = await videosService.getVideos(tag);
			res.status(200).json({
				data: videos,
				msg: "videos listed"
			})
		} catch (e) {
			console.error(e);
			next(e);
		}
	});

	router.get("/news", async (req: express.Request, res: express.Response, next: express.NextFunction) => {
		try {
			const videos: any = await videosService.getVideos();
			res.status(200).json({
				data: [videos[0], videos[1], videos[2], videos[3]],
				msg: "new videos listed"
			})
		} catch (e) {
			console.error(e);
			next(e);
		}
	});

	router.get("*", async (req, res, next) => {
		try {
			res.status(404).send("404 NOT FOUND :(");
		} catch(e) {
			console.error(e);
			next(e);
		}
	});
}