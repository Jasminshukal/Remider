import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { requestUserToken } from './Notification'


function App() {
  const [count, setCount] = useState(0)
  const [token, setToken] = useState('')

  useEffect(() => {
    // Request user token on app load
    requestUserToken().then((token) => {
      if (token) {

        console.log("FCM Token received:", token);
        setToken(token);
        // Send the token to your server to associate it with the user
      }
    });
  }, []);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Reminder Application</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          <code>{token}</code>
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
