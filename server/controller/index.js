const { prisma } = require('../prisma_client');
const { sendMailTemplate } = require('../mail/nodemailer');

module.exports = {
    addSubscriber: async (req, res) => {
        const { email } = req.body;
        if (!validateEmail(email)) return res.status(422).json({ data: { errors: 'email is required' } });

        let subscriber = await prisma.subscriber.findUnique({ where: { email: email } });
        if (subscriber) return res.status(403).json({ data: { errors: 'already subscribe' } });

        try {
            await prisma.subscriber.create({ data: { email: email } });

            const url = process.env.NODE_ENV === 'production' ? 'http://queenyekelsunrivaled.com/' : 'http://localhost:5001';
            sendMailTemplate('"Queen Yekel Unrivaled" <queenyekel\'sunrivaled@gmail.com>', email, 'Successful Subscription', 'subscription.html', { url });
            return res.status(201).json({ data: { message: 'successfully subscribe' } });
        } catch (error) {
            return res.status(500).json({ data: { error: 'Error processing your request please try again' } });
        }
    },

    getSubscriberById: async (req, res) => {
        const { id } = req.params;
        try {
            const subscriber = await prisma.subscriber.findUnique({ where: { id: parseInt(id) } });
            return res.status(200).json(subscriber ? subscriber : {});
        } catch (error) {
            return res.status(404).json({ data: { error: 'Invalid Credentials' } });
        }
    },

    getAllSubscribers: async (req, res) => {
        const subscribers = await prisma.subscriber.findMany();
        return res.status(200).json(subscribers ? subscribers : []);
    },

    requestRegistration: async (req, res) => {
        const data = req.body;
        data['number_of_siblings'] = parseInt(data['number_of_siblings']);
        data['date_of_birth'] = new Date(data['date_of_birth']).toISOString();
        if (!data['number_of_siblings']) data['number_of_siblings'] = 0;

        try {
            const register = await prisma.registration.create({ data: data });

            if (!register) return res.status(422).json({ data: { errors: 'Error occured while sending request' } });

            return res.status(200).json({ data: { message: 'request successfully sent' } });
        } catch (error) {
            return res.status(500).json({ data: { error: 'Error processing your request please try again' } });
        }
    },

    getRequestById: async (req, res) => {
        const { id } = req.params;
        try {
            const request = await prisma.registration.findUnique({ where: { id: parseInt(id) } });
            return res.status(200).json(request ? request : {});
        } catch (error) {
            return res.status(404).json({ data: { error: 'Invalid Credentials' } });
        }
    },

    getAllRequests: async (req, res) => {
        const requests = await prisma.registration.findMany();
        return res.status(200).json(requests ? requests : []);
    },

    forwardMail: async (req, res) => {
        const { name, email, phone, subject, message } = req.body;
        const html = `<p>${message}</p><br/><p><i>name: </i>${name}</p><p><i>phone: </i>${phone}</p><p><i>email: </i>${email}</p>`;

        sendMailTemplate('"Queen Yekel Unrivaled" <queenyekel\'sunrivaled@gmail.com>', email, subject, html);
        return res.status(200).json({ data: { message: 'Mail successfully sent' } });
    },
};

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
