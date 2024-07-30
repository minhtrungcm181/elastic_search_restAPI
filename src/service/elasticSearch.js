import { Client } from '@elastic/elasticsearch';
import config from 'config';
import fs from 'node:fs'
const elasticConfig = config.get('elastic');


export const client = new Client({
    node: 'https://localhost:9200',
    auth: {
        username: elasticConfig.username,
        password: elasticConfig.password,
    },
    tls:{
        ca: fs.readFileSync('./http_ca.crt'),
        rejectUnauthorized:false
    }
});
client
    .info()
    .then(response => console.log(response))
    .catch(error => console.error(error));
