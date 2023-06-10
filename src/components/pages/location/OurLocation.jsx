import { useRef, useEffect, useState, Fragment } from "react";
import styles from "./OurLocation.module.scss";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";
import Button from "../../helpers components/Button";

//map
mapboxgl.accessToken =
  "pk.eyJ1IjoiY2h1a3d1ZG9iZW1pY2FoIiwiYSI6ImNsaWplcGNhdTA3ZnMzZW9kMzgwNGZtYmQifQ.lhEEy6MjADXuQEneOo8OEA";

const OurLocation = () => {
  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [lng, lat],
      zoom: zoom,
    });

    if (!map.current) return; // wait for map to initialize
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  }, []);

  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  // const [lng, setLng] = useState(41.479736);
  // const [lat, setLat] = useState(71.311124);
  const [zoom, setZoom] = useState(9);
  const map = useRef(null);
  const mapContainer = useRef(null);

  return (
    <Fragment>
      <section className={styles.ourLocation}>
        <div className={styles.button}>
          <Button message="back to home" className="home" />
        </div>
        <div className={`${styles.sidebar}`}>
          Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
        </div>
        <div
          ref={mapContainer}
          // id={`${styles.map} map`}
          className={`${styles.ourLocation} ${styles.map} map-container `}
        ></div>
      </section>
    </Fragment>
  );
};

export default OurLocation;
