import nodemailer from "nodemailer";
import {config} from "../config";

export class Nodemailer {

	send (data:any) {
		let transporter: any = nodemailer.createTransport({
			service: "gmail",
			auth: {
				user: config.email,
				pass: config.emailPsw
			}
		});

		let mailOptions: any = {
			from: config.email,
			to: config.emailTo,
			subject: `${data.email}'s email!!`,
			text: data.text
		}

		transporter.sendMail(mailOptions, (err: Error | null, data:any)=> {
			if (err) {
				console.log(err);
			} else {
				console.log(`email sent`);
			}
		});
	}
}