import React , {useState} from 'react'
import './TollManagementSystem.css';




function TollManagementSystem() {
    const [vehicleEntries, setVehicleEntries] = useState ([]);
    const [newVehicleEntry, setNewVehicleEntry] = useState ({


    })

    const [tolls, setTolls] = useState ([]);
    const [newToll, setNewToll] = useState ('');

    const handleNewVehicleEntryChange = event => {

    }

    const handleNewTollChange = event => {

    }

    const handleNewVehicleEntrySubmit = event => {

    }

    const handleNewTollSubmit = event => {
        
    }



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
  )
}

export default TollManagementSystem