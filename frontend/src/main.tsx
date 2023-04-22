import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { FavoritesProvider } from "./context/favoriteContext";

ReactDOM.render(
  <React.StrictMode>
    <FavoritesProvider>
      <App />
    </FavoritesProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
