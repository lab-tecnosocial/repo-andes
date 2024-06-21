import { Marker, Popup } from 'react-leaflet'
import { Icon } from 'leaflet'
import { useState } from 'react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";
import marker from '../assets/andes.png'
import enlargeIcon from '../assets/enlargeIcon.png' // Import the enlargement icon



const icon = new Icon({
    iconUrl: marker,
    iconSize: [40, 40],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
})

export default function MiMarker({ item }) {
    const [open, setOpen] = useState(false);

    return (
        <Marker position={item.coord.split(", ")} icon={icon}>
            <Popup>
                <img src={item.foto1} width="300px" alt={item.lugar} onClick={() => setOpen(true)} />


                <div id="datos">
                    <p style={{ textAlign: 'center', fontSize: '10px', fontWeight: 'bold' }}>(Clic en la imagen para agrandar y ver más fotografías)</p>
                    <br></br>
                    <p><b>Nombre:</b> {item.nombre}</p>
                    <p><b>Categoría:</b> {item.categoria}</p>
                    <p><b>Lugar:</b> {item.lugar}</p>
                    <p><b>País:</b> {item.pais}</p>
                    <p><b>Fecha:</b> {item.fecha}</p>
                    <br></br>
                    <img src={enlargeIcon} width='30px' style={{ position: 'absolute', bottom: '0', right: '0', cursor: 'pointer' }} alt="Enlarge" onClick={() => setOpen(true)} />
                </div>


                <Lightbox
                    styles={{ container: { backgroundColor: "rgba(0, 0, 0, .8)" } }}
                    open={open}
                    close={() => setOpen(false)}

                    slides={[
                        { src: item.foto1, description: 'Fotografía 1' },
                        { src: item.foto2, description: 'Fotografía 2' },
                        { src: item.foto3, description: 'Fotografía 3' },
                        { src: item.foto4, description: 'Fotografía 4' },
                        { src: item.foto5, description: 'Fotografía 5' },
                    ]}
                    plugins={[Captions]}
                    captions={{ descriptionTextAlign: 'center' }}
                />

            </Popup>
        </Marker>
    )
}

