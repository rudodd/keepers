// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  fetch('https://fantasyfootballcalculator.com/api/v1/adp/ppr?teams=8&year=2023')
    .then((response) => {
      if (response.ok) {
        response.json()
          .then((json) => res.status(200).json(json))
      } else {
        res.status(response.status).json(response)
      }
    })
}
