const alpha = require('alphavantage')({ key: process.env.ALPHA_VANTAGE_KEY });

export default async function handler(req, res) {
  try {
    const search = await alpha.data.search(req.query.keywords);
    res.status(200).json(search.bestMatches);
  } catch (err) {
    res.status(429).json({ data: [], error: err });
  }
}