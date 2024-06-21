import React from 'react'
import Header from '../components/Header'
import portada from '../assets/portada.png'
import labtecnosocial from '../assets/labtecnosocial.png'
import nucleo from '../assets/nucleo.png'

function Portada() {
    return (
        <>
            <Header />

            <div id="hero">
                <img src={portada}></img>
            </div>
            <div id="section">
                <p>
                    Festividades en los Andes es un repositorio fotográfico donde la recopilación fotográfica es una acción social de la memoria colectiva a través de fragmentos de la memoria individual de Gerardo Ichuta Ichuta con apoyo del Laboratorio de Tecnologías Sociales y la Fundación Núcleo.
                </p>
                <p>
                    Gerardo Ichuta es investigador de música folclórica y tradicional andina. Para acceder a las fotografías contactarse a:
                    gerard.ichu@gmail.com
                </p>
                <p>
                    Soy Gerardo, desde joven me interesé por conocer las expresiones folklóricas de la región andina de Bolivia en documentos e imágenes y con el paso del tiempo este interés fue incluyendo al folklore del centro sur peruano y el norte chileno. En un momento determinado al sacar conclusiones y querer plasmarlas en documentos, vi pertinente tener imágenes fotográficas propias para sustentar mis planteamientos por lo que se hizo una necesidad, el viajar a conocer las distintas fiestas de las que intentaba hablar. En este proceso me di cuenta que mucha información, no era del todo certera y que muchas fiestas eran muy complejas y polifacéticas, mostrándome un panorama inmenso de las fiestas patronales, los carnavales y concursos que fui registrando fotográficamente a lo largo de los años por lo que el número de sitios se multiplicó, llegando a un par centenas. Bueno, aquí les muestro una pequeña muestra de mi trabajo etnográfico, para que tengan un panorama de la diversidad folclórica de las fiestas andinas.
                </p>

                <div id="publicaciones">
                    <p><b>Publicaciones</b></p>
                    <a href="http://www.revistasbolivianas.ciencia.bo/pdf/ta/v14n1/v14n1a05.pdf">DE LA CIUDAD AL CAMPO: SIKURI – SIKURIADA</a>
                    <br></br>
                    <a href="https://www.youtube.com/watch?v=jsBeo6oxzD8">ENTRE FOLFLORE Y TRADICIÓN-DEM</a>
                </div>

            </div >
            <div class="logos-container">
                <div class="grid-item">
                    <a href="https://labtecnosocial.org/"><img class="logo" src={labtecnosocial}>
                    </img></a>
                </div>
                <div class="grid-item">
                    <a href="https://fundacionucleo.org/"><img class="logo" src={nucleo}>
                    </img></a>
                </div>

            </div >

        </>
    )
}

export default Portada