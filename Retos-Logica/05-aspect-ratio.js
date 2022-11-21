/*
 * Crea un programa que se encargue de calcular el aspect ratio de una
 * imagen a partir de una url.
 * - Url de ejemplo: https://raw.githubusercontent.com/mouredev/
 *   mouredev/master/mouredev_github_profile.png
 * - Por ratio hacemos referencia por ejemplo a los "16:9" de una
 *   imagen de 1920*1080px.
 */
const getImg=async()=>{
const img = await fetch("https://picsum.photos/v2/list");
const data= await img.json();

return data ;
}
 getImg().then(data=> data.map(({width, height})=>{
    console.log("el ancho es " +width+" y el alto es "+ height)
    console.log("el ratio es "+ (width/height).toFixed(2))
 }))