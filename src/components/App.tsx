import defaultProducts from '../data/defaultProducts'
import './App.css'
import Body from './Body'
import itemListReducer from './reducers/item-list-reducer'
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';



function App() {
  return (
    <>
      <Provider store={store}>
        <Body />
      </Provider>
    </>
  )
}

export default App
