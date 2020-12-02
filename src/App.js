import './App.css';
import Form from './components/Form';
import FormData from './components/FormData';
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <div className="container-fluid wrapper">
      <GlobalProvider>
      <div className="row flex-row d-flex">
         <Form/>
         <FormData/>
      </div> 
      </GlobalProvider>  
    </div>
  );
}

export default App;
