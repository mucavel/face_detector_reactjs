import React from "react";
import Navbar from "./components/NavBar/Navbar";
import Rank from "./components/Rank/Rank";
import InputForm from "./components/InputForm/InputForm";

class App extends React.Component{
    render(){
        return(
            <div className="AppContainer tc">
                <Navbar />
                <Rank />
                <InputForm />
            </div>
        );
    }
}
export default App;