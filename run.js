const pm2 = require('pm2');

pm2.start(
    {
        script: 'npm start',
        autorestart: true,
    },
    (err, apps) => {
        pm2.disconnect();
        if (err) {
            throw err;
        }
    }
);
