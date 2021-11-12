import './App.css';
import { AccountProvider } from './components/context';
import Receivelayout from './components/receivelayout';
import Togglelayout from './components/togglelayout';

function App() {

      return(
      <AccountProvider>
        <Receivelayout/>
        <Togglelayout/>
      </AccountProvider>
      )
      
  
    
}

export default App;
