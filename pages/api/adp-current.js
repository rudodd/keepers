// Fetch current year ADP values
export default function handler(req, res) {
  return fetch('https://fantasyfootballcalculator.com/api/v1/adp/ppr?teams=8&year=2023')
    .then((response) => {
      if (response.ok) {
        return response.json()
          .then((json) => res.status(200).json(json))
      } else {
        return res.status(response.status).json(response)
      }
    })
}
