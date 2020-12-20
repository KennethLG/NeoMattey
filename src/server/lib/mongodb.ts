import {MongoClient} from "mongodb";
import {config} from "../config";

const MONGO_URI:string = `mongodb+srv://${config.dbUser}:${config.dbPsw}${config.dbHost}/${config.dbName}?retryWrites=true&w=majority`;

export class MongoLib {
	public client:any;
	public dbName:any;
	public connection:any;

	constructor() {
		this.client = new MongoClient(MONGO_URI, { 
			useNewUrlParser: true,
			useUnifiedTopology: true
		});
		this.dbName = config.dbName;
	}

	connect() {
		if (!this.connection) {
			this.connection = new Promise((resolve, reject) => {
				this.client.connect(err => {
					if (err) {
						reject(err);
					}
					console.log("Connected to database");
					resolve(this.client.db(this.dbName))
				})
			})
		}

		return this.connection;
	}

	getAll(collection: string, query:any) {
		return this.connect().then(db=> {
			return db.collection(collection).find(query).toArray();
		});
	}

	getNewVideos(collection: string) {
		return this.connect().then(db=> {
			return db.collection(collection).find({}).toArray();
		});
	}
}