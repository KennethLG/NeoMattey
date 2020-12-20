import {MongoLib} from "../lib/mongodb";
import {Nodemailer} from "../lib/nodemailer";

export class VideosService {
	public collection: string;
	public mongodbLib: any;

	constructor() {
		this.collection = "videos";
		this.mongodbLib = new MongoLib();
	}

	async getVideos (tag:any) {
		const query = tag ? {tag: { $in : [tag]}} : {};
		const videos: any = this.mongodbLib.getAll(this.collection, query);
		return videos || [];
	}
} 

export class MessagesService {

	public msgLib: any;

	constructor() {
		this.msgLib = new Nodemailer();
	}

	async sendMessage (data: any) {
		this.msgLib.send(data);
	}
}