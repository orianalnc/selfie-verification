import logo from './logo.svg';
import './assets/main.css';
import SelfieCapture from './components/SelfieCapture';
import VerificationCanvas from './components/VerificationCanvas';

function App() {
  return (
    <div className="App h-screen w-auto text-slate-900">
     <h1 className="  text-3xl"> Hello selfie </h1>
     <VerificationCanvas/>
    </div>
  );
}

export default App;
