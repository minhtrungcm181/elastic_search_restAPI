import { response } from "express"
import { client } from "../service/elasticSearch.js"



export const run = async (req, res) => {
    await client.index({
      index: 'game-of-thrones',
      body: {
        character: 'Ned Stark',
      quote: 'Winter is coming.'
      }
    })
  
    await client.index({
      index: 'game-of-thrones',
      body: {
        character: 'Daenerys Targaryen',
      quote: 'I am the blood of the dragon.'
      }
    })
  
    await client.index({
      index: 'game-of-thrones',
      body: {
        character: 'Tyrion Lannister',
      quote: 'A mind needs books like a sword needs whetstone.'
      }
    })
  
    await client.indices.refresh({index: 'game-of-thrones'})

    if (client) {
        return res.json(client)
    }
  }
  

