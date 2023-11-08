import GoogleMapReact from "google-map-react";
import { FaMapMarkerAlt } from "react-icons/fa";
const AnyReactComponent = () => (
  <div className="text-red-500">
    <FaMapMarkerAlt className="w-10 h-10"></FaMapMarkerAlt>
  </div>
);

const GoogleMap = () => {
  const defaultProps = {
    center: {
      lat: 23.7805,
      lng: 90.4267,
    },
    zoom: 14,
  };

  return (
    <>
      <div
        className="container mx-auto my-10 "
        style={{ height: "600px", width: "100%" }}
      >
        <GoogleMapReact
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent
            lat={defaultProps.center.lat}
            lng={defaultProps.center.lng}
            text="King Of Tech"
          />
        </GoogleMapReact>
      </div>
    </>
  );
};

export default GoogleMap;
