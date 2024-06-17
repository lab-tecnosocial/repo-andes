import { Marker, Popup } from 'react-leaflet'
import { Icon } from 'leaflet'
import { useState } from 'react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";


const icon = new Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png',
    iconSize: [25, 41],
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
                <p>Clic en la imagen para agrandar</p>
                <p>{item.nombre}</p>
                <p>{item.categoria}</p>
                <p>{item.lugar}</p>
                <p>{item.fecha}</p>
                <Lightbox
                    styles={{ container: { backgroundColor: "rgba(0, 0, 0, .8)" } }}
                    open={open}
                    close={() => setOpen(false)}

                    slides={[
                        { src: item.foto1, description: 'Colorizado con IA' },
                        { src: item.foto2, description: 'Original' },
                        { src: item.foto3, description: 'Original' },
                        { src: item.foto4, description: 'Original' },
                        { src: item.foto5, description: 'Original' },
                    ]}
                    plugins={[Captions]}
                    captions={{ descriptionTextAlign: 'center' }}
                />

            </Popup>
        </Marker>
    )
}

