const db = require("../../data/db-config")


function getPlants() {
    return db("plants")
}

function findPlantBy(filter) { //filte would be user
    return db("plants")
    .where(filter)
}

async function addPlant(plant) {
    const [id] = await db("plants")
    .insert(plant)
    return findPlantById(id)
}

function findPlantById(id) {
    return db("plants")
    .where(id)
    .first()
}

function edit(id,changes) {
    return db("plants")
    .where({id})
    .update(changes)
    .then(() => {
        return findPlantById(id)
    })
    // const [id] = await db("plants")
    // .where(id)
    // .update(changes)
    // return findPlantById(id)
}

function remove(id) {
    return db("plants")
    .where(id)
    .del()
}

module.exports = {
    findPlantBy,
    findPlantById,
    addPlant,
    edit,
    remove,
    getPlants
}
