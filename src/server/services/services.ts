import {MongoLib} from "../lib/mongodb";

export class VideosService {
	public collection: string;
	public mongodbLib: any;

	constructor() {
		this.collection = "videos";
		this.mongodbLib = new MongoLib();
	}

	async getVideos () {
		const videos: any = this.mongodbLib.getAll(this.collection);
		return videos || [];
	}
} 