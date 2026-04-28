'use strict'

const getUrlFotos = async function(raca){
    
    const base_url  = `https://dog.ceo/api/breed/${raca}/images`
    const response  = await fetch(base_url)
    const data      = await response.json()

    return data.message
}

const criarFoto = function(urlFoto){

    const foto     = document.createElement('img')
    foto.src       = urlFoto
    foto.className = 'foto'

    return foto
}

const preencherGaleria = async function(){

    const galeria  = document.getElementById('container-galeria')
    const raca     = document.getElementById('raca').value
    const urlFotos = await getUrlFotos(raca)

    const fotos = urlFotos.map(criarFoto)
    galeria.replaceChildren(...fotos)
}



document.getElementById('pesquisar').addEventListener('click', preencherGaleria)
