const router = require("express").Router();
const Plants = require("./plants-model")


router.get("/",(req,res)=>{
    Plants.getPlants()
    .then((plants)=>{
        res.status(200).json(plants)
    })
    .catch((err)=>{
        res.status(500).json(err)
    })
})

router.get("/:id", (req,res) => {
    const id = req.params.id
    if(id){
        Plants.findPlantById(id)
        .then(plant => {
            res.status(200).json(plant)
        })
        .catch(err => {
            res.status(500).json(err.message)
        })
    }else {
        res.status(404).json("plant not found")
    }
})

router.post("/id",(req,res) => {
   
})

router.put("/:id", (req,res) => {
    const id = req.params.id
    const changes = req.body
    if(id,changes) {
        Plants.edit(id,changes)
        .then(plant => {
            res.status(200).json(plant)
        })
        .catch(err => {
            res.status(500).json(err.message)
        })
    }else {
        res.status(400).json("please provide nickname,species and h2oFrequency")
    }  
})

router.delete("/:id", (req,res) => {
    const id = req.params.id
    if(id) {
        Plants.remove(id)
        .then(plant => {
            res.status(200).json(`${plant.nickname} was deleted`)
        })
        .catch(err => {
            res.status(500).json(err.message + " in delete")
        })
    }else {
        res.status(400).json("can't delete plant")
    }
})

module.exports = router;
