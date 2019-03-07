const { Client } = require('pg')


async function run() {
  Object.keys(process.env).filter(key => key.startsWith('PG')).forEach(key => {
    console.log(key, process.env[key])
  })
  const client = new Client()
  await client.connect()
  const { rows } = await client.query('SELECT version()')
  console.log(rows)
  await client.end()
}

run().catch(error => console.log(error) || process.exit(-1))
