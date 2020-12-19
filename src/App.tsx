import React, {useEffect, useState} from 'react';
import TopPageContainer from './containers/TopPageContainer';
import { Splash } from './components/Splash';

import {myLiffId} from "./constants";

const App: React.FC = () => {
    const [value, setValue] = useState<string>('')
    const [isLogin, setIsLogin] = useState<boolean>(false)
    useEffect(() => {
        liff.init({liffId: myLiffId}).then(() => {
            setIsLogin(liff.isLoggedIn())
        })
    }, [])

    return (
        <React.Fragment>
            <Splash />
            <TopPageContainer/>
        </React.Fragment>
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
