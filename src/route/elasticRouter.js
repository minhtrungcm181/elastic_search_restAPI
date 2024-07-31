import express from "express";
import { createIndexAPI, insertToIndexAPI, searchDocumentAPI } from "../controller/elastic.js";
const elasticRouter = express.Router();

elasticRouter.post("/create", createIndexAPI);
elasticRouter.post("/insert", insertToIndexAPI);
elasticRouter.post("/search", searchDocumentAPI);

export default elasticRouter