import React, {useState} from 'react';
import './TollManagementSystem.css';
import Popup from './Popup';

function TollManagementSystem () {
  //popup
  const [buttonPopupVehicle, setButtonPopupVehicle] = useState (false);
  const [buttonPopupToll, setButtonPopupToll] = useState (false);
  const [buttonPopupAllTolls, setButtonPopupAllTolls] = useState (false);

  //array of vehicle entries with objects
  const [vehicleEntries, setVehicleEntries] = useState ([]);

  //user input for new vehicle entry
  const [newVehicleEntry, setNewVehicleEntry] = useState ({
    //initial values for this object
    vehicleType: '',
    vehicleNumber: '',
    entryDate: '',
    entryTime: '',
    tollName: '',
    Tarrif: '',
  });

  //array of tolls (string)
  const [tolls, setTolls] = useState ([]);

  //user input for new toll
  const [newToll, setNewToll] = useState ('');

  //Functions to handle Changes
  const handleNewVehicleEntryChange = event => {
    //updates newVehicleEntry using spread operator
    setNewVehicleEntry ({
      ...newVehicleEntry,
      [event.target.name]: event.target.value,
    });
  };

  //updates the toll value to a new value
  const handleNewTollChange = event => {
    setNewToll (event.target.value);
  };

  //adds new vehicle entries to array and resets the valus to initals
  const handleNewVehicleEntrySubmit = event => {
    event.preventDefault ();
    setVehicleEntries ([...vehicleEntries, newVehicleEntry]);
    setNewVehicleEntry ({
      vehicleType: '',
      vehicleNumber: '',
      entryDate: '',
      entryTime: '',
      tollName: '',
      Tarrif: '',
    });
  };

  //adds new tolls to array and resets the values to initals
  const handleNewTollSubmit = event => {
    event.preventDefault ();
    setTolls ([...tolls, newToll]);
    setNewToll ('');
  };

  return (
    <div>
      <div className="head">
        <h1>Toll Management Application</h1>

        <div>
          <div className="top_btn">

            <Popup
              trigger={buttonPopupVehicle}
              setTrigger={setButtonPopupVehicle}
            >
              <h2>Add Vehicle Entry</h2>

              <form onSubmit={handleNewVehicleEntrySubmit}>
                <label>
                  Vehicle Number*:
                  <br />
                  <input
                    className="field"
                    placeholder="Enter Vehicle Number"
                    type="text"
                    name="vehicleNumber"
                    value={newVehicleEntry.vehicleNumber}
                    onChange={handleNewVehicleEntryChange}
                  />
                </label>

                <br />

                <label>
                  Select Toll Name*:
                  <br />
                  <select
                    className="field"
                    value={newVehicleEntry.tollName}
                    onChange={handleNewVehicleEntryChange}
                    name="tollName"
                  >
                    <option value="Kapallur">Kapallur</option>
                    <option value="Chengalpattu">Chengalpattu</option>
                    <option value="Krishnagiri">Krishnagiri</option>
                  </select>
                </label>

                <br />

                <label>
                  Enter Date*:
                  <br />
                  <input
                    className="field"
                    type="date"
                    name="entryDate"
                    value={newVehicleEntry.entryDate}
                    onChange={handleNewVehicleEntryChange}
                  />
                </label>

                <br />

                <label>
                  Select Vehicle Type*:
                  <br />
                  <select
                    className="field"
                    onChange={handleNewVehicleEntryChange}
                    name="vehicleType"
                    value={newVehicleEntry.vehicleType}
                  >
                    <option value="Car/Jeep/Van">Car/Jeep/Van</option>
                    <option value="LCV">LCV</option>
                    <option value="Truck/Bus">Truck/Bus</option>
                    <option value="Heavy vehicle">Heavy vehicle</option>
                  </select>
                </label>

                <br />

                <label>
                  Entry Time:
                  <br />
                  <input
                    className="field"
                    type="time"
                    name="entryTime"
                    value={newVehicleEntry.entryTime}
                    onChange={handleNewVehicleEntryChange}
                  />
                </label>

                <br />

                <label>
                  Tarrif*:
                  <br />
                  <input
                    className="field"
                    placeholder="Tarrif Amount"
                    type="textfield"
                    name="Tarrif"
                    value={newVehicleEntry.Tarrif}
                    onChange={handleNewVehicleEntryChange}
                  />
                </label>

                <br />

                <button type="submit">Add Entry</button>
              </form>
            </Popup>

            <Popup
              trigger={buttonPopupAllTolls}
              setTrigger={setButtonPopupAllTolls}
            >
              <div className="all_tolls_popup">
                <h2>All Tolls</h2>
                <ul>
                  {tolls.map ((toll, index) => <li key={index}>{toll}</li>)}
                </ul>
              </div>
            </Popup>

            <Popup trigger={buttonPopupToll} setTrigger={setButtonPopupToll}>

              <div className="add_new_toll">
                <h2>Add New Toll</h2>
                <form onSubmit={handleNewTollSubmit}>
                  <div className="new_toll">
                    <label>
                      <h4>Toll Name*:</h4>
                      <input
                        type="text"
                        value={newToll}
                        placeholder="Enter Toll Name"
                        onChange={handleNewTollChange}
                        className="toll_input"
                      />
                    </label>
                  </div>
                  <br />

                  <div className="vehicle_fare_details">
                    <div className="vehicle_car">
                      <select className="dropdown">
                        <option>Car/Jeep/Van</option>
                        <option>LCV</option>
                        <option>Truck/Bus</option>
                        <option>Heavy vehicle</option>
                      </select>

                      <input type="text" placeholder="Single Journey" />
                      <input type="text" placeholder="Return Journey" />
                    </div>

                    <div className="vehicle_car">
                      <select className="dropdown">
                        <option>Car/Jeep/Van</option>
                        <option>LCV</option>
                        <option>Truck/Bus</option>
                        <option>Heavy vehicle</option>
                      </select>

                      <input type="text" placeholder="Single Journey" />
                      <input type="text" placeholder="Return Journey" />
                    </div>

                    <div className="vehicle_car">
                      <select className="dropdown">
                        <option>Car/Jeep/Van</option>
                        <option>LCV</option>
                        <option>Truck/Bus</option>
                        <option>Heavy vehicle</option>
                      </select>

                      <input type="text" placeholder="Single Journey" />
                      <input type="text" placeholder="Return Journey" />
                    </div>

                    <div className="vehicle_car">
                      <select className="dropdown">
                        <option>Car/Jeep/Van</option>
                        <option>LCV</option>
                        <option>Truck/Bus</option>
                        <option>Heavy vehicle</option>
                      </select>

                      <input type="text" placeholder="Single Journey" />
                      <input type="text" placeholder="Return Journey" />
                    </div>
                  </div>

                  <button type="submit" className="add_toll_btn">
                    Add Toll
                  </button>
                </form>
              </div>

            </Popup>
          </div>
        </div>
      </div>

      <div>

        <hr />

        <div className="subheading">
          <div className="subhead_left">
            <h2 className="all_vehicle_entries">
              Toll Entries/Vehicle Entries
            </h2>
            <input className="search" type="text" placeholder="Search a toll" />
          </div>

          <div className="top_btn">
            <button onClick={() => setButtonPopupVehicle (true)}>
              Add Vehicle Entry
            </button>
            <button onClick={() => setButtonPopupToll (true)}>
              Add New Toll
            </button>
            <button onClick={() => setButtonPopupAllTolls (true)}>
              View All Tolls
            </button>
          </div>

        </div>
        <table>
          <thead>
            <tr>

              <th>Vehicle Type</th>
              <th>Vehicle Number</th>
              <th>Date</th>
              <th>Time</th>
              <th>Toll Name</th>
              <th>Tarrif</th>
            </tr>
          </thead>
          <tbody>
            {vehicleEntries.map ((entry, index) => (
              <tr key={index}>
                <td>{entry.vehicleType}</td>
                <td>{entry.vehicleNumber}</td>
                <td>{entry.entryDate}</td>
                <td>{entry.entryTime}</td>
                <td>{entry.tollName}</td>
                <td>{entry.Tarrif}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TollManagementSystem;
