
import Login from "./Login";
import Users from "./Users";
export const Introduction = () => {
  return <h1>What is React</h1>
  };


const App = () =>{
  return(
    <div>
    <Login/>
    <Users/>
    </div>
  )
};

export default App;