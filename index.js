const { Client } = require('pg')


async function run() {
  console.log('$PGHOST', process.env.PGHOST)
  console.log('$PGPORT', process.env.PGPORT)
  const client = new Client()
  await client.connect()
  const { rows } = await client.query('SELECT version()')
  console.log(rows)
  await client.end()
}

run().catch(e => console.log(error) || process.exit(-1))
