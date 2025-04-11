import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProfileCard from './ProfileCard'
import Sample from './Home'
import GridView from './GridView'
import Todo from './assets/todo'
import Navbar from './navbar'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from 'react-redux'
import storeredux from './assets/storeredux'
const profileLst = {
  name: "narasimman",
  Department: "AIDS",
  mobile: 9809890980,
  address: "D.No: 23/234,Saraswathi Nagar,Coimbatore",
};
function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    {/* <ProfileCard />
    <GridView/>
    <Todo/>  */}
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Sample />} />
         <Route path="/todo" element={<Todo />} />
        <Route path="/profilecard" element={<ProfileCard profile={profileLst} />} />
        <Route path="/gridview" element={<GridView/>} />
        <Route
      path="/reduxcounter"
      element={ 
        <Provider store={storeredux}>
        <Todo/>
        </Provider>


      }/>
      </Routes>
      </BrowserRouter>
    
   </div>
  );
}

export default App;
