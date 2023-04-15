import React, {useState} from 'react';
import './TollManagementSystem.css';

function TollManagementSystem () {
  //array of vehicle entries with objects
  const [vehicleEntries, setVehicleEntries] = useState ([]);

  //user input for new vehicle entry
  const [newVehicleEntry, setNewVehicleEntry] = useState ({
    //initial values for this object
    vehicleNumber: '',
    entryDate: '',
    entryTime: '',
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
      vehicleNumber: '',
      entryDate: '',
      entryTime: '',
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
      <h1>Toll Management System</h1>

      <h2>Add Vehicle Entry</h2>
      <form onSubmit={handleNewVehicleEntrySubmit}>
        <label>
          Vehicle Number:
          <input
            type="text"
            name="vehicleNumber"
            value={newVehicleEntry.vehicleNumber}
            onChange={handleNewVehicleEntryChange}
          />
        </label>
        <br />
        <label>
          Entry Date:
          <input
            type="date"
            name="entryDate"
            value={newVehicleEntry.entryDate}
            onChange={handleNewVehicleEntryChange}
          />
        </label>
        <br />
        <label>
          Entry Time:
          <input
            type="time"
            name="entryTime"
            value={newVehicleEntry.entryTime}
            onChange={handleNewVehicleEntryChange}
          />
        </label>
        <br />
        <button type="submit">Add Entry</button>
      </form>

      <h2>Add New Toll</h2>
      <form onSubmit={handleNewTollSubmit}>
        <label>
          Toll Name:
          <input type="text" value={newToll} onChange={handleNewTollChange} />
        </label>
        <br />
        <button type="submit">Add Toll</button>
      </form>

      <h2>All Tolls</h2>
      <ul>
        {tolls.map ((toll, index) => <li key={index}>{toll}</li>)}
      </ul>

      <h2>All Vehicle Entries</h2>
      <table>
        <thead>
          <tr>
            <th>Vehicle Number</th>
            <th>Entry Date</th>
            <th>Entry Time</th>
          </tr>
        </thead>
        <tbody>
          {vehicleEntries.map ((entry, index) => (
            <tr key={index}>
              <td>{entry.vehicleNumber}</td>
              <td>{entry.entryDate}</td>
              <td>{entry.entryTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TollManagementSystem;
