// src/main/frontend/src/App.js

import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';


function App() {
   const [hello, setHello] = useState('')

    useEffect(() => {
        let body = {
            text : ''
        }
        axios.post('/calendar/create', body)
        .then(response => {
            console.log("res console :: ", response.data)
            console.log("body console :: ", body.text)
            setHello(response.data)
        })
        .catch(error => console.log(error))
    }, []);

    return (
        <div>
            백엔드에서 가져온 데이터입니다 ddd: {hello}
            <hr/>
            <form action="">
              <span>simple login</span>
              <input id = 'login' type="text"/>
              <Button>요청</Button>
            </form>
        </div>
    );
}

export default App;


// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
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

// export default App;
