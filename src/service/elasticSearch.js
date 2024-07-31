import { Client } from '@elastic/elasticsearch';
import fs from 'node:fs';

export const client = new Client({
    node: 'https://localhost:9200',
    auth: {
        username: process.env.ELASTIC_USRNAME,
        password: process.env.ELASTIC_PASSWORD,
    },
    tls: {
        ca: fs.readFileSync('./http_ca.crt'),
        rejectUnauthorized: false,
    },
});
client
    .info()
    .then()
    .catch(error => console.error(error));
