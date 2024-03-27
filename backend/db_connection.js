const mariadb = require('mariadb');
const pool = mariadb.createPool({
  host: '10.248.42.122',
  port: 3306, 
  user:'triangle-db', 
  password: '*21C97486F848924F17294AC60F73DE3A32B42455',
  database:'agents',
  connectionLimit: 5
});

async function test() {
  let db;
  try {
	  db = await pool.getConnection();

    console.log('success!');
    // rows = await db.query("SELECT * FROM agents_table");
    // console.log(rows);
	  

  } catch (err) {
	  console.log('womp. womp.');
    console.log(err);
  } finally {
	  if (db) return db.end();
  }
}

test();