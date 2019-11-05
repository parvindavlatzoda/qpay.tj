import React from "react";
import ReactMapboxGl, {
  Layer,
  ZoomControl,
  RotationControl,
  Marker,
  Cluster
} from "react-mapbox-gl";
import "./../terminals.json";

const accessToken =
  "pk.eyJ1IjoicXBheSIsImEiOiJjazJsbzEzZjUwOGV0M2NxdTRvcnV2NDNlIn0.AKe5EkkdFbQTdNV4oxZ_dg";
const Mapbox = ReactMapboxGl({ accessToken });
export default class Map extends React.Component {
  render() {
    return (
      <div>
        <div class="header-back" />
        <div class="main-div">
          <Mapbox
            // eslint-disable-next-line
            center={[68.784848, 38.574192]}
            zoom={[12]}
            style="mapbox://styles/mapbox/outdoors-v10?optimize=true"
            containerStyle={{
              height: "100vh",
              width: "100%"
            }}
          >
            <Layer type="symbol" />
            <RotationControl />
            <ZoomControl />
          </Mapbox>
        </div>
      </div>
    );
  }
}
