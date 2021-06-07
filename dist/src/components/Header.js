import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';

export default function Header(props) {
    return (
        <div className="header">
            <div className="head1">
                    <div> <h1 >DEMO STREAMING</h1></div>
                    <div>
                        <ul>
                            <li><Link to="/">Login</Link></li>
                            <li className="trial"><Link to="/">Start Your Trial</Link></li>
                        </ul>
                    </div>
                
            </div>
            <div className="head2"><h1>{props.name}</h1></div>
        </div>
    )
}
