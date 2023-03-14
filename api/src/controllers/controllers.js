const axios = require('axios');
const { dogs } = require("../db.js");


const getHome = async ()=>{
    try{
        const api =  await axios.get('https://api.thedogapi.com/v1/breeds')
        const datos = api.data?.map((perro)=>{
            return{
                id: perro.id,
                name:perro.name,
                temperament:perro.temperament,
            }
        })



    }catch(error){

    }
}


module.exports={
    getHome
}