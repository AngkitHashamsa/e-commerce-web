// domain/.netlify/functions/hello

const items = [
  {
    id: 1,
    name: 'Angkit Hashamsa',
  },
  {
    id: 2,
    name: 'mummy',
  },
]

exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify(items),
  }
}
