// const dbConfig = require("../../data/db-config")
const db = require("../../data/db-config")

function find() {
    return db("users")
}
function getUserPlants(id) {
    return db("plants").where("user_id",id)

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
function updateUser(id,changes){
    return db("users")
    .where("users.user_id",id)
    .update(changes)
    .then(()=>{
        return findById(id);
    })
}



module.exports = {
    find,
    findBy,
    findById,
    add,
    updateUser,
    getUserPlants
}
