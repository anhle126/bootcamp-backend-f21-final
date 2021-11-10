// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// Curious about file path: https://stackoverflow.com/questions/7591240/what-does-dot-slash-refer-to-in-terms-of-an-html-file-path-location
import mongo from '../../server/mongo'

export default async function handler(req, res) {
  const db = await mongo()

  /*const results = await db.collection('restaurants').find({},{_id: 0}).toArray()
  res.status(200).json(results)*/

  const cuisine = req.query.cuisine
  const borough = req.query.borough

  // obj['thing'] is equivalent to obj.thing
  // let bob = "joe"
  // obj.bob and obj[bob] // obj.joe are equivalent

  const sort_by = req.query.sort_by
  
  let page = req.query['page']
  let pageSize = req.query['page-size']
 
  
  let results = await db.collection('restaurants')
  .find({cuisine: cuisine, borough: borough})
  .toArray()

  if (!sort_by) {
    //sort_by is undefined. Don't really have to sort
    
  }

}


