import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import CreateService from './components/Home'
// import Requests from './components/Requests'
import Layout from './components/Layout'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
            <Route path="/" element={<CreateService/>} exact/>
            {/* <Route path="/recent_prompts/" element={<Requests/>}/> */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
