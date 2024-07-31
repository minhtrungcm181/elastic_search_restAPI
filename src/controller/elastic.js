import { createIndex, insertToIndex, searchDocument } from "../model/elasticModel.js"

export const createIndexAPI = async (req, res) => {
    let result = await createIndex(req, res);
    return result;
}
export const insertToIndexAPI = async (req, res) => {
  let result = await insertToIndex(req, res);
  return result;
}
export const searchDocumentAPI = async (req, res) => {
  let result = await searchDocument(req, res);
  return result;
}
  

