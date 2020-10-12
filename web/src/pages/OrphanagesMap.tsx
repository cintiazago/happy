import React from 'react';

import mapMarker from '../images/Map_marker.svg';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

import '../styles/pages/orphanages-map.css';

function OrphanagesMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarker} alt="Happy"/>

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando sua visita :)</p>
        </header>

        <footer>
          <strong>Sacramento</strong>
          <span>Minas Gerais</span>
        </footer>
      </aside>

      <Map
        center={[-19.8787377,-47.4432659]}
        zoom={15}
        style={{ width: "100%", height: "100%" }}
      >

        {/* Mapa alternativo: "https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" */}
        <TileLayer
          url={
            `https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`
          }
        />
      </Map>

      <Link to="/" className="create-orphanage">
        <FiPlus size={32} color="#fff"></FiPlus>
      </Link>
    </div>
  );
}

export default OrphanagesMap;
