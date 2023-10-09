const apiKey = 'kWKT4t7q6zjcv3EIT2EUjvNXg8WFVVq7';


const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)

peticion
    .then(resp=> resp.json())
    .then(({data}) => {
        const {url} = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img)
    })
.catch(console.warn);