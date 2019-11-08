import React from "react";
import ReactMapboxGl, {
  Layer,
  ZoomControl,
  RotationControl,
  Marker,
  Cluster
} from "react-mapbox-gl";
// import "./../terminals.json";
import terminals from "./../terminals.json";
// import map_pin from "./../images/map_pin.svg";

const accessToken =
  "pk.eyJ1IjoicXBheSIsImEiOiJjazJsbzEzZjUwOGV0M2NxdTRvcnV2NDNlIn0.AKe5EkkdFbQTdNV4oxZ_dg";
const Mapbox = ReactMapboxGl({ accessToken });
const clusterMarker = (coordinates, pointCount) => (
  <Marker coordinates={coordinates}>
    <span
    // style={{ background: "orange", borderRadius: "50%", padding: "10px" }}
    >
      <svg
        style={{ fontSize: "2em" }}
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="darkorange"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        color="white"
        class="feather feather-map-pin"
      >
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
        <circle cx="12" cy="10" r="3"></circle>
      </svg>
      {/* <div
        style={{
          background: "red",
          borderRadius: "50%",
          width: "0.4em",
          height: "0.4em",
          textAlign: "center",
          position: "absolute",
          top: " 50%",
          right: "50%"
        }}
      ></div> */}
      <div
        style={{
          background: "#009cde",
          borderRadius: "50vh",
          color: "#ffffff",
          padding: "2px 0px",
          width: "100%",
          textAlign: "center",
          position: "absolute",
          top: " -30%",
          right: "-50%"
        }}
      >
        {pointCount}
      </div>
    </span>
  </Marker>
);
export default class Map extends React.Component {
  state = {
    selectedTerminal: ""
  };
  onClickMarker = number => {
    console.log(number);
    this.setState({ selectedTerminal: number });
    console.log(this.state.selectedTerminal);
  };
  render() {
    const { selectedTerminal } = this.state;
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
            <Cluster radius={30} ClusterMarkerFactory={clusterMarker}>
              {terminals.map(
                terminal =>
                  terminal.number &&
                  terminal.lat &&
                  terminal.lng && (
                    <Marker
                      offset={{ bottom: [4, 12] }}
                      coordinates={[terminal.lng, terminal.lat]}
                      anchor="bottom"
                      onClick={() => this.onClickMarker(terminal.number)}
                    >
                      {/* {map_pin} */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        color="white"
                        fill="darkorange"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-map-pin"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      {terminal.number === selectedTerminal && (
                        <div>{selectedTerminal}</div>
                      )}
                    </Marker>
                  )
              )}
            </Cluster>
            <RotationControl />
            <ZoomControl />
          </Mapbox>
        </div>
      </div>
    );
  }
}
