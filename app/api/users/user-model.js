const db = require("../../data/db-config")

function find() {
    return db("users")
}

function findby(filter) {
    return db("users").where(filter)
}

async function add(user) {
    const [id] = await db("users")
    .insert(user,"user_id")
    return findbyId(id) 
}

function findbyId(id) {
    return db("users")
    .where("users.user_id",id)
    .first()
}



module.exports = {
    find,
    findby,
    findbyId,
    add
}
