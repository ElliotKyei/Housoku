const Pool = require('pg-pool')

// Configurations for database connection (Postgres)

const db = new Pool({
    user: 'ElliotKyei',
    password: process.env.PG_PASSWORD,
    host: 'localhost',
    port: 5432,
    database: 'Housoku'
})

// Connect to database

db.connect((err) => {
    if (err) {
        console.log("Error connecting to the database")
    }

    console.log("Database connection established")
})


module.exports = db
