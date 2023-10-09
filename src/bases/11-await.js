const getImagen = async () => {
  try {
    const apiKey = "kWKT4t7q6zjcv3EIT2EUjvNXg8WFVVq7";
    const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    const { data } = await resp.json();
    const { url } = data.images.original;
    const img = document.createElement("img");
    img.src = url;
    document.body.append(img);
  } catch (error) {
    console.log(error);
  }

  // return 'http://alsdalskdlakd.com'
};

// console.log( getImagen() );
getImagen();

// peticion
//     .then(resp=> resp.json())
//     .then(({data}) => {
//         const {url} = data.images.original;
//         const img = document.createElement('img');
//         img.src = url;
//         document.body.append(img)
//     })
// .catch(console.warn);
