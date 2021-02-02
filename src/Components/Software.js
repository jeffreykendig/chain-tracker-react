import React from 'react';
import {

} from 'react-bootstrap'
//import {Link} from 'react-router-dom';

export default class Software extends React.Component {
    constructor(props){
        super(props); 
        this.state = {}
    }

    render(){
        return(
            <div className="Software">
                <div className="body">
                    <p>This software will be storing all of your important information using Blockchain.</p>
                    <form class="softwareForm">
                        <a href="Website\info.txt" download="Chain_Tracker">Download Now</a>
                    </form>
                </div>
                
            </div>
        );        
    }
}