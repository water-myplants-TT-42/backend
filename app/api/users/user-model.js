const db = require("../../data/db-config")

function find() {
    return db("users")
}

function findBy(filter) {
    return db("users").where(filter)
    // .select("users.user_id","users.username","users.password")
    
}

async function add(user) {
    const [id] = await db("users")
    .insert(user,"user_id")
    return findById(id) 
}

function findById(id) {
    return db("users")
    .where("users.user_id",id)
    .select("users.user_id","users.username","users.phoneNumber")
    .first()
}



module.exports = {
    find,
    findBy,
    findById,
    add
}
