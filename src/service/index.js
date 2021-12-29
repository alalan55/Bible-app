import axios from "axios";

//const proxy = 'https://cors-anywhere.herokuapp.com/' 

const http = axios.create({
    baseURL: `https://api.scripture.api.bible/v1/`,
    headers: {
        'api-key': `${process.env.VUE_APP_API_KEY}`
    },
    mode: 'cors'
})

export default http