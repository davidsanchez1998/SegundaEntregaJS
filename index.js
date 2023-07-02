
const peliculas = [
    {id: 1, name: 'El Padrino'},
    {id: 2, name: 'Scarface'},
    {id: 3, name: 'Taxi Driver'},
    {id: 4, name: 'Avangers: Infinity War'},
    {id: 5, name: 'Batman: The Dark Knight'},
    {id: 6, name: 'Drive'},
    {id: 7, name: 'Big Hero 6'},
    {id: 8, name: 'Hercules'},
]

//onst peliculas = ['EL Padrino', 'Scarface', 'Taxi Driver', 'Avangers: Infinity War', 'Batman: The Dark Knight', 'Drive', 'Big Hero 6', 'Hercules']


let peli = document.createElement('div');

peli.innerHTML = `<div id="boxes" class="grid-container">
<button>
    <div><img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr9K8NKrOES4bYCvXB32tBifXnHQjtk_R7cw&usqp=CAU"><p>EL padrino</p></div>
</button>
<button>
    <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTf8qbp2SwqqMXCwTnGGgITYkvdTf4X37GAA&usqp=CAU"><p>Scarface</p></div>
</button>
<button>
    <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGyIXnt6dBU-3KFlG5AuxDXtattN3ljAl-uA&usqp=CAU"><p>Taxi Driver</p></div>
</button>
<button>
    <div><img src="https://www.pngplay.com/wp-content/uploads/12/Avengers-Infinity-War-Download-Free-PNG.png"><p>Avangers: Infinity War</p></div>
</button>
<button>
    <div><img src="https://w7.pngwing.com/pngs/846/181/png-transparent-batman-two-face-commissioner-gordon-film-dvd-christian-bale-celebrities-television-poster.png"><p>Batman: The Dark Knight</p></div>
</button>
<button>
    <div><img src="https://www.kindpng.com/picc/m/238-2383827_drive-movie-png-drive-movie-logo-png-transparent.png"><p>Drive</p></div>
</button>
<button>
    <div><img src="https://pics.filmaffinity.com/Big_Hero_6-340669492-large.jpg"><p>Big Hero 6</p></div>
</button>
<button>
    <div><img src="https://i0.wp.com/www.edmradio.es/wp-content/uploads/2020/12/mercules_cine.png?fit=640%2C410&ssl=1"><p>Hercules</p></div>
</button>
</div>
<div id="enviar"><button>Guardar</button></div>
`

document.body.append(peli);

console.log('Watchlist')

const btns = document.getElementsByTagName('button')
for (const btn of btns) {
    btn.onclick = addtoplaylist
}

function addtoplaylist(e) {
    const btn = e.target
    const id = btn.id.split('-')[1]

    const pelicula = peliculas.find(p => p.name == peliculas)
    console.log('peliculas')
}




const guardado = (clave, valor) => {localStorage.setItem(clave, valor)}

guardado('listaPeliculas', JSON.stringify(peliculas))

let enviar = document.getElementById('enviar')



enviar.onmousedown = () => {alert('Muchas gracias')
                            location.reload()
}



