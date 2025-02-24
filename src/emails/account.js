import formdata from 'form-data'
import MailGun from 'mailgun.js'

const mailgunAPIKey = process.env.MAILGUN_API_KEY
const domainName = 'sandboxeb2d9d706db94c41a846d275403c3482.mailgun.org'

const mailgun = new MailGun(formdata)
const mg = mailgun.client({ username: 'api', key: mailgunAPIKey})

const sendWelcomeEmail = (email, name) => {
    mg.messages.create(domainName, {
        to: email,
        from: 'noahpetz@gmail.com',
        subject: 'Welcome to the app!',
        text: `Welcome to the app, ${name}. Thank you for letting us help you manage your tasks.`
    })
}

const sendCancellationEmail = (email, name) => {
    mg.messages.create(domainName, {
        to: email,
        from: 'noahpetz@gmail.com',
        subject: 'Cancellation Confirmed',
        text: `Goodbye, ${name}. I'll miss you terribly.`
    })
}

export {sendWelcomeEmail, sendCancellationEmail}
