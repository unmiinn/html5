import { useState } from 'react'

function App() {
  const [lat, set_lat] = useState()
  const [lon, set_lon] = useState()
  const [accuracy, set_accuracy] = useState()

  navigator.geolocation.getCurrentPosition((position) => {
    const lat0 = position.coords.latitude;
    const lon0 = position.coords.longitude;
    const accuracy0 = position.coords.accuracy;

    set_lat(lat0)
    set_lon(lon0)
    set_accuracy(accuracy0)
  })

    return (
      <>
        <div>
<h2>위도:{lat}</h2>
<h2>경도:{lon}</h2>
<h2>정확도:{accuracy}미터</h2>
        </div>
      </>
    )
  }

export default App
