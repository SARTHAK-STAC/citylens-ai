import { MapContainer, TileLayer, CircleMarker, Popup } from "react-leaflet";

const complaints = [
  {
    name: "Brooklyn",
    position: [40.6782, -73.9442],
    complaints: 1240,
    color: "#ef4444",
  },
  {
    name: "Queens",
    position: [40.7282, -73.7949],
    complaints: 920,
    color: "#f59e0b",
  },
  {
    name: "Bronx",
    position: [40.8448, -73.8648],
    complaints: 710,
    color: "#22c55e",
  },
  {
    name: "Manhattan",
    position: [40.7831, -73.9712],
    complaints: 1055,
    color: "#3b82f6",
  },
];

export default function HeatmapCard() {
  return (
    <div className="rounded-3xl border border-[#232B36] bg-[#151A22] p-6 h-full">

      <div className="mb-5">

        <h2 className="text-xl font-semibold">
          Complaint Hotspots
        </h2>

        <p className="text-slate-500 mt-1">
          Live city complaint density
        </p>

      </div>

      <div className="overflow-hidden rounded-2xl h-[390px]">

        <MapContainer
          center={[40.73, -73.93]}
          zoom={10}
          style={{
            height: "100%",
            width: "100%",
          }}
        >

          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          />

          {complaints.map((item) => (

            <CircleMarker
              key={item.name}
              center={item.position}
              radius={14}
              pathOptions={{
                color: item.color,
                fillColor: item.color,
                fillOpacity: 0.8,
              }}
            >

              <Popup>

                <strong>{item.name}</strong>

                <br />

                Complaints: {item.complaints}

              </Popup>

            </CircleMarker>

          ))}

        </MapContainer>

      </div>

    </div>
  );
}