
const TOKEN = 'ffc526653c8e152832932589e3fb6fa8'
const API_URL = 'https://api.themoviedb.org/3/movie'


async function GetMovies({category = 'popular', page = 1}){
    try {

        const res = await fetch(`${API_URL}/${category}?api_key=${TOKEN}&page=${page}`)
        return await res.json();

    } catch (error) {

        console.warn(error)   
    }

}   



async function GetMovieDetail({idMovie}){
    try {
        if (idMovie){
            const res = await fetch(`${API_URL}/${idMovie}?api_key=${TOKEN}`)
            return await res.json();
        }
        return {}

    } catch (error) {
        console.warn(error)   
    }

}


async function GetVideosMovies({idMovie}){
    try {
        if (idMovie){
            const res = await fetch(`${API_URL}/${idMovie}/videos?api_key=${TOKEN}`)
            return await res.json();
        }
        return {}

    } catch (error) {
        console.warn(error)   
    }

} 


export {GetMovies, GetMovieDetail, GetVideosMovies}