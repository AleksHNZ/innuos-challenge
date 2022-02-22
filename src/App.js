import {
   BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Main from './components/Main/main'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={ <Main/> } />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
