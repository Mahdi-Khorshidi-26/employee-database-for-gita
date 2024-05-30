/* eslint-disable no-unused-vars */
import NeshanMap from "@neshan-maps-platform/react-openlayers";
import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import "@neshan-maps-platform/react-openlayers/dist/style.css";

Map.propTypes = {
  latitude: PropTypes.number,
  longitude: PropTypes.number,
};

function Map({ latitude = 35.7645394, longitude = 51.4749824 }) {
  const mapRef = useRef(null);

  const [ol, setOl] = useState();
  const [olMap, setOlMap] = useState();

  const onInit = (ol, map) => {
    setOl(ol);
    setOlMap(map);

    setTimeout(() => {
      const view = map.getView();
      view.animate({
        center: ol.proj.fromLonLat([51.36281969540723, 35.69672648316882]),
        zoom: 5,
        duration: 1000,
      });
    }, 2000);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (mapRef.current?.map) {
        mapRef.current?.map.setMapType("standard-night");
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <NeshanMap
        mapKey="web.a76e656b018640d1a12932b15a30b350"
        defaultType="neshan"
        center={{ latitude, longitude }}
        style={{ height: "28vh", width: "100%" }}
        onInit={onInit}
        zoom={6}
      ></NeshanMap>
    </>
  );
}

export default Map;
