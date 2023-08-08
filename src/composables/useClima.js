
import axios from "axios";
export default function useClima(){


    const obtenerClima = async({cuidad, pais}) =>{

        //importar apikey
        const key = import.meta.env.VITE_API_KEY

        //obetener lat, lng
        try {
            const url =  `http://api.openweathermap.org/geo/1.0/direct?q=${cuidad},${pais}&limit=1&appid=${key}`;
            const {data} = await axios(url);
            const {lat,lon}=data[0];

         //obtener clima

         const urlClima=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`
         const {data:resultado} = await axios(urlClima);
         console.log(resultado);
        } catch (error) {
            console.log(error);
        }

    }

    return{
        obtenerClima
    }
}