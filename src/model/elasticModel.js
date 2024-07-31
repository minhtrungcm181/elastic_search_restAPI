import { client } from '../service/elasticSearch.js';
import { responseSend } from '../config/error-handler.js';

export const createIndex = async (req, res) => {
    try {
        let param = req.body.index_name;
        console.log(param);
        let result = await client.indices.create({ index: `${param}` });
        if (result) {
            responseSend(res, '', 'Thành công !', 200);
        }
    } catch (error) {
        responseSend(res.status(400), `${error.message}`, 'Failed', 400);
    }
};
export const insertToIndex = async (req, res) => {
    try {
        let param = req.body;
        let result = await client.index({
            index: `${param.index_name}`,
            document: {
                title: `${param.title}`,
                content: `${param.content}`,
                date: new Date(),
            },
        });
        if (result) {
            responseSend(res, '', 'Thành công !', 200);
        }
    } catch (error) {
        responseSend(res.status(400), `${error.message}`, 'Failed', 400);
    }
};
export const searchDocument = async (req, res) => {
    try {
        let param = req.body;
        let result = await client.search({
            body: {
                query: {
                    multi_match: {
                        query: param.search_content,
                        fields: ['title', 'content'], // Search in multiple fields
                        fuzziness: 'AUTO',
                    },
                },
            },
        });

        if (result) {
            const hits = result.hits.hits.map(hit => ({
                ...hit._source,
                score: hit._score,
                highlight: hit.highlight,
            }));
            responseSend(res, hits, 'Thành công !', 200);
        }
    } catch (error) {
        responseSend(res.status(400), `${error.message}`, 'Failed', 400);
    }
};
