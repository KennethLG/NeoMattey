import dotenv from "dotenv";
dotenv.config();

export const config: any = {
	port: process.env.PORT || 4000
}