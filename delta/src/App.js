import './App.css';
const conn = require('./config/db')

function queryDB() {
  console.log("testing.. OK")
}
function App() {
  return (
    <div>
  <h1>Auto Tracker</h1>

  <div className="db_conn_status">
    <button id=""></button>
    <h3 id="db_status"> DB Disconnected </h3>
  </div>

  
  <div className="dropdowns"> 
    <label htmlFor="dealer_dd" id="dealer_dd_label">Dealership: </label>
    <select name="dealer_dd" id="dealer_list">
      <option value="arlingtoncdjr">AH CDJR</option>
      <option value="Napleton Hyundai">Napleton Hyundai</option>
      <option value="elmacura">Elmhurst Acura</option>
    </select>

    <label htmlFor="make_dd" id="make_dd_label"> Make: </label>
    <select name="make_dd" id="make_list">
      <option value="toyota">Toyota</option>
      <option value="acura">Acura</option>
      <option value="hyundai">Hyundai</option>
    </select>

    <label htmlFor="model_dd" id="model_dd_label"> Model: </label>
    <select name="model_dd" id="model_list">
      <option value="camry">Camry</option>
      <option value="sonata">Sonata</option>
      <option value="ilx">ILX</option>
    </select>


  </div>
  <div className="search_button">
    <button className="init_search" onClick={queryDB}> Search </button>
    <button className="db_query" onClick={queryDB}> Search DB</button>
  </div>

</div>
  );
}

export default App;
