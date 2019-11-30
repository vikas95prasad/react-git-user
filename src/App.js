import React, {Component} from 'react';
import './App.css';
import Particles from 'react-particles-js';

const particleParams = {
                        "particles": {
                            "number": {
                                "value": 1000,
                                "density": {
                                    "enable": true,
                                    "value_area": 15000
                                }
                            }
                          }
                        }

class App extends Component{
  render(){
    return (
      <div>
        <Particles params={particleParams} />
      </div>
    );
  }
}

export default App;
