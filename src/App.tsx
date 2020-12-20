import liff from '@line/liff';
import React, { useEffect } from 'react';
import { Splash } from './components/Splash';
import { myLiffId } from "./constants";
import TopPageContainer from './containers/TopPageContainer';
import { LiffInfoProvider } from './LiffProvider';

const App: React.FC = () => {
    useEffect(() => {
        liff.init({liffId: myLiffId}).catch(console.error)
    }, [])

    return (
        <LiffInfoProvider>
            <Splash />
            <TopPageContainer/>
        </LiffInfoProvider>
    );
// }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <p>
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
