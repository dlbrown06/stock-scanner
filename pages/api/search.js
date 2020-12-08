const alpha = require('alphavantage')({ key: process.env.ALPHA_VANTAGE_KEY });

export default async function handler(req, res) {
  const search = await alpha.data.search('apple');
  res.status(200).json(search.bestMatches)
}