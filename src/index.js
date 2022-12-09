import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,  Route } from 'react-router-dom';
import HomeV1 from './components/home-v1';

import Thankyou from './Thankyou';


class Root extends Component {
    render() {
        return(
            <BrowserRouter>
	             
	            
	                    <Route exact path="/" component={HomeV1} />
                        <Route exact path="/Thankyou" component={Thankyou} />
                    
	                
                    </BrowserRouter>
        )
    }
}

export default Root;

ReactDOM.render(<Root />, document.getElementById('quarter'));
