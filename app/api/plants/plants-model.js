const db = require("../../data/db-config")


function getPlants() {
    return db("plants")
}

function findPlantBy(filter) { //filte would be user
    return db("plants")
    .where(filter)
}

function addPlant(plant) {
  return db("plants")
    .insert(plant,"plant_id")
    .then(id=>{
        // console.log(Number(id) )
        return findPlantById(Number(id));
    })
}

function findPlantById(id) {
    return db("plants")
    .where("plant_id",id)
    .first()
}

function edit(id,changes) {
    return db("plants")
    .where("plant_id",id)
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
    .where("plant_id",id)
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
