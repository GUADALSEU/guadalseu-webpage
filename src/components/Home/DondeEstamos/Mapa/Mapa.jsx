import './Mapa.css'
import { useLoadScript, GoogleMap, MarkerF } from "@react-google-maps/api"

export const Mapa = ({ width = '100%', height = '100%' }) => {
  const { loadError, isLoaded } = useLoadScript({ googleMapsApiKey: process.env.REACT_APP_API_GOOGLE })

  if (loadError) return <div>"Error loading Maps."</div>
  if (!isLoaded) return <div>"Loading Maps"</div>

  return (
    <div id='mapa'>
      <GoogleMap
        mapContainerStyle={{
          width: width,
          height: height
        }}
        zoom={14}
        center={{
          lat: 40.55709134477392,
          lng: -3.632478583940057
        }}
        options={{
          streetViewControl: false,
          mapTypeControl: false
        }}
      >
        <MarkerF
          position={{
            lat: 40.55710918290393,
            lng: -3.632457338115146
          }}
        />
      </GoogleMap>
    </div>
  )
}
