import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home'
import Form from './components/Form'
import People from './components/People'
import Planets from './components/Planets'
import Ships from './components/Ships'
import Homeworld from './components/Homeworld';

function App() {
  return (
    <div className="App">
      <h1>Star Wars</h1>
      <Form></Form>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path='/people/:id' element={<People></People>}></Route>
        <Route path='/planets/:id' element={<Planets></Planets>}></Route>
        <Route path='/starships/:id' element={<Ships></Ships>}></Route>
      </Routes>
    </div>
  );
}

export default App;
