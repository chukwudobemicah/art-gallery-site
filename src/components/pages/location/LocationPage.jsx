import { Fragment } from "react";
import OurLocation from "./OurLocation";
import LocationSectionOne from "./LocationSectionOne";
import LocationSectionTwo from "./LocationSectionTwo";
import Footer from "../../Footer";

const LocationPage = () => {
  return (
    <Fragment>
      <OurLocation />
      <LocationSectionOne />
      <LocationSectionTwo />
      <Footer className="locationPage" />
    </Fragment>
  );
};

export default LocationPage;
