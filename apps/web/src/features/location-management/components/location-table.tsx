import { useState } from "react";

import { useManagedLocations } from "../hooks/use-managed-locations";

export default function LocationTable() {
  const locations = useManagedLocations();
  const [showForm, setShowForm] = useState(false);

  const [locationName, setLocationName] = useState("");

  const [locationCode, setLocationCode] = useState("");

  const [manager, setManager] = useState("");

  const [localLocations, setLocalLocations] = useState(locations);

  return (
    <div>
      <h2>Locations</h2>

      <div>
        Total Locations:
        {localLocations.length}
      </div>
      <button onClick={() => setShowForm(!showForm)}>Create Location</button>
      {showForm && (
        <div>
          <h3>New Location</h3>

          <input
            placeholder="Location Name"
            value={locationName}
            onChange={(e) => setLocationName(e.target.value)}
          />

          <input
            placeholder="Location Code"
            value={locationCode}
            onChange={(e) => setLocationCode(e.target.value)}
          />

          <input
            placeholder="Manager"
            value={manager}
            onChange={(e) => setManager(e.target.value)}
          />

          <button
            onClick={() => {
              const newLocation = {
                id: crypto.randomUUID(),

                tenantId: "tenant-1",
                brandId: "brand-001",

                code: locationCode,
                name: locationName,

                address: "",
                phone: "",
                email: "",

                manager,

                active: true,
              };

              setLocalLocations([...localLocations, newLocation]);

              setLocationName("");
              setLocationCode("");
              setManager("");
              setShowForm(false);
            }}
          >
            Save Location
          </button>
        </div>
      )}

      <table>
        <thead>
          <tr>
            <th>Code</th>
            <th>Name</th>
            <th>Manager</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {localLocations.map((location) => (
            <tr key={location.id}>
              <td>{location.code}</td>
              <td>{location.name}</td>
              <td>{location.manager}</td>
              <td>{location.active ? "Active" : "Inactive"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
