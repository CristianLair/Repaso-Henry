const { Router } = require('express');
const { Character, Episode } = require('../db');
const { Op } = require("sequelize");
const axios = require('axios')

const route = Router();




const getApiInfo = async () => {
    const inf = await axios.get('https://rickandmortyapi.com/api/character')
    const mapeo = await inf.data.results.map(c =>{
        return {    
            id: c.id,
            name:c.name,
            species: c.species,
            origin:c.origin.name,
            image: c.image,
            created:c.created
        }
    })
    return mapeo
}
const miInfo = async ()=>{
    return await Character.findAll({
        include: {
            model: Episode,
            attributes : ['name'],
            through:{
                attributes :[],
            }
        }
    })
}

const getinfoAll = async ()=>{
    const apiInfo = await getApiInfo();
    const miInfoData = await miInfo();
    const allData = apiInfo.concat(miInfoData)
    console.log(allData)
    return allData

}

route.get('/', async(req,res)=>{
    const {name} = req.query;
    if(name){
        const resultado = await Character.findAll({
            where: {
                name:{
                    [Op.iLike]: `%${name}%`
                }
            },
            include: Episode 
        })

        if(resultado.length === 0){
            return res.status(404).json({
                msg: "Character no encontrado"
            })
        }

        res.status(200).json(resultado)
    }
    else{
        const resultado = await getinfoAll()
        res.status(200).send(resultado)
    }
})

route.post('/', async (req,res)=>{

const {name,species,origin,image,created,episodes} = req.body
try {
    let characterCreate = await Character.create({
        name,species,origin,image,created
    })  
    let episode = await Episode.findAll({where: {name: episodes}})
    characterCreate.addEpisode(episode)
    res.status(200).send('personaje creado correctamente')
} catch (error) {
    console.log(error)
}
})

module.exports = route