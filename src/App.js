
import {BrowserRouter, Routes ,Route} from 'react-router-dom'
import Dynamic_Styling from './Componant/Dynamic_Styling/Dynamic_Styling'
const App = () => {
  return (
    <div>
<BrowserRouter>
<Routes>
  <Route path="/Dynamic_Styling" element={<Dynamic_Styling/>}/>
</Routes>

</BrowserRouter>
      
    </div>
  )
}

export default App