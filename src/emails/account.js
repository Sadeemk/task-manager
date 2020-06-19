const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
	sgMail.send({
		to: email,
		from: 'imsadeem98@gmail.com',
		subject: 'Welcome to the app!',
		text: `Welcome to the app, ${name}. Let me know how you get along with the app`
	});
};

const sendCancellationEmail = (email, name) => {
	sgMail.send({
		to: email,
		from: 'imsadeem98@gmail.com',
		subject: "We're sad to see you go!",
		text: `We're so sorry to see you go, ${name}. Please let us know why you are cancelling and we hope to see you back`
	});
};

module.exports = {
	sendWelcomeEmail: sendWelcomeEmail,
	sendCancellationEmail: sendCancellationEmail
};
