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

  //Parse page and pageSize or set as default

  if (!page) {
    // Default page
    page = 1;
  } else {
    page = parseInt(page)
    if (page < 0) {
      res.status(400).send("Bad request. Invalid page.")
    }
  }

  if (!pageSize) {
    // Default pageSize
    pageSize = 10
  } else {
    pageSize = parseInt(pageSize)
    if (pageSize < 0) {
      res.status(400).send("Bad request. Invalid page")
    }
  }


  let results

  if (!sort_by) {
    //sort_by is undefined. Don't really have to sort

    results = await db.collection('restaurants')
      .find({ cuisine: cuisine, borough: borough })
      .skip((page - 1) * pageSize)
      .limit(pageSize)
      .toArray()

  } else {
    // This is not correct yet. It returns the first-found values and then sort. 
    // Should be sorted first and then pick out the first-found values. 
    if (sort_by === 'grades.asc') {

      results = await db.collection('restaurants')
        .find({ cuisine: cuisine, borough: borough })
        .sort({ 'grades.0.score' : 1})
        .skip((page - 1) * pageSize)
        .limit(pageSize)
        .toArray()

      /*results = results.sort((restaurant_1, restaurant_2) => {
          return restaurant_1.grades[0].score - restaurant_2.grades[0].score
        })*/

    } else if (sort_by === "grades.desc"){

      results = await db.collection('restaurants')
        .find({ cuisine: cuisine, borough: borough })
        .sort({'grades.0.score' : -1})
        .skip((page - 1) * pageSize)
        .limit(pageSize)
        .toArray()

      /*results = results.sort((restaurant_1, restaurant_2) => {
          return restaurant_2.grades[0].score - restaurant_1.grades[0].score
        })*/
    }
  }

  res.status(200).json(results)

}
