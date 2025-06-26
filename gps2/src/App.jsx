import { useState } from 'react'

function App() {
  const [lat, set_lat] = useState(0)
  const [lon, set_lon] = useState(0)
  const [accuracy, set_accuracy] = useState(0)

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
<h2 className='zxc'>위도:{lat}</h2>
<h2 className='asd'>경도:{lon}</h2>
<h2 className='qwe'>정확도:{accuracy}미터</h2>
        </div>
      </>
    )
  }

export default App
