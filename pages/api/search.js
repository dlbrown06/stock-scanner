const alpha = require('alphavantage')({ key: process.env.ALPHA_VANTAGE_KEY });

export default async function handler(req, res) {
  try {
    const keywords = req.query.keywords;
    if (keywords.length <= 1) return res.status(200).json({ data: [], error: "" });
    
    const search = await alpha.data.search(req.query.keywords);
    res.status(200).json(search.bestMatches);
  } catch (err) {
    res.status(429).end("Too many Requests");
  }
}