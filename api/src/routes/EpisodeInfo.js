const { Router } = require('express');
const { Character, Episode } = require('../db');
const { Op } = require("sequelize");
const axios = require('axios');



const route = Router();


route.get ('/',async (req,res)  =>{
    const inf = await axios.get('https://rickandmortyapi.com/api/episode')
    const mapeoData = await inf.data.results.map(c => c.name)
      mapeoData.forEach((el)=>{
          Episode.findOrCreate({
              where:
              
              { name:el },

          })
      })
        
    
    const allInfoData = await Episode.findAll()
    res.send(allInfoData)
})

const miInfo = async ()=>{
    return await Episode.findAll({
        include: {
            model: Character,
            attribiutes : ['name'],
            through:{
                attribiutes :[],
            }
        }
    })
}

const getinfoAll = async ()=>{
    const apiInfo = await getApiInfo();
    const miInfoData = await miInfo();
    const allData = apiInfo.concat(miInfoData)
    return allData

}

route.get('/', async(req,res)=>{
    const {name} = req.query;
    if(name){
        const resultado = await Episode.findAll({
            where: {
                name:{
                    [Op.iLike]: `%${name}%`
                }
            },
            include: Activity 
        })

        if(resultado.length === 0){
            return res.status(404).json({
                msg: "Episodio no encontrado"
            })
        }

        res.status(200).json(resultado)
    }
    else{
        const resultado = await getinfoAll()
        res.status(200).send(resultado)
    }
})



    
module.exports = route