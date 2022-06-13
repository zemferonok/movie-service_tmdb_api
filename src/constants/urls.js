const baseUrl = process.env.REACT_APP_API
const apiKey = process.env.REACT_API_KEY
const imgUrl = process.env.REACT_APP_IMG;

// const baseUrl = 'https://api.themoviedb.org/3'
// const apiKey = 'c0063193502a8410c34f84413f097628';
// const imgUrl = 'https://image.tmdb.org/t/p/w500';



const urls = {
    discover: '/discover/movie',
    genre: '/genre/movie/list',
    movie: '/movie/'
}

const images = {
    mouse: "https://cs4.pikabu.ru/post_img/2014/07/24/10/1406218309_463510454.jpg"
}

export {
    baseUrl,
    imgUrl,
    apiKey,
    urls,
    images
}