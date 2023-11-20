import './App.css';
import Weather from './Weather/Weather';
import Menu from './Menu/Menu';
import Map from './Map/Map';

const cities = [
  {
    name: "Kyoto",
    coordinates: [35.0116, 135.7681],
  },
  {
    name: 'Tokyo',
    coordinates: [35.6895, 139.6917],
  },
  {
    name: 'Osaka',
    coordinates: [34.6937, 135.5023],
  },
  {
    name: 'Okinawa',
    coordinates: [26.4384, 127.8049],
  },
];

const countryCenter = [35.5, 137.5];

function App() {
    
    return (
        <>
            <Menu/>
            <p style={{marginTop: 8 + 'em'}}></p>
            <div class="main">
                <div className="weather-container">
                      {cities.length > 0 ? (
                        cities.map((city) => (
                          <Weather
                            city_name={city.name}
                          />
                        ))
                      ) : (
                        <p>No cities available.</p>
                      )}
                </div>
                <div className="map">
                    <Map coordinates={cities} location={countryCenter}/>
                </div>
            </div>
        </>
    );
}

export default App;
