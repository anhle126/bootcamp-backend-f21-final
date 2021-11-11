import mongo from '../../../server/mongo'

export default async function handler(req, res) {
    const db = await mongo()

    const { infoRequest } = req.query
    let result
    if (infoRequest === 'boroughs') {
        result = await db.collection('restaurants').distinct('borough')
    } else if (infoRequest === 'cuisines') {
        result = await db.collection('restaurants').distinct('cuisine')
    } else if (infoRequest === 'neighborhoods') {
        result = await db.collection('neighborhoods').distinct('name')
    }
    res.status(200).json(result)
}