import dotenv from "dotenv";
dotenv.config();

export const config: any = {
	port: process.env.PORT || 5000,
	dbUser: process.env.DB_USER,
	dbName: process.env.DB_NAME,
	dbPsw: process.env.DB_PSW,
	dbHost: process.env.DB_HOST
}