import React from 'react';
import '../App.css';
export default function Footer() {
    return (
        <div className="footer">
            <div>
                 <ul>
                    <li><a href="/">Home  |</a></li>
                     <li><a    href="/">Terms and conditions | </a></li>
                     <li><a  href="/">Privacy Policy |</a></li>
                     <li><a  href="/">collection Statement |</a></li>
                     <li><a  href="/">Help |</a></li>
                     <li><a   href="/">Manage Account |</a></li>
                </ul>
            </div>
            <div className="copyright"><p>copyright @2021 Demo Streaming All Right Reserved</p></div>
            <div className="icons">
                <i class="fab fa-facebook-f fa-2x"></i>
                <i class="fab fa-twitter fa-2x" ></i>
                <i class="fab fa-instagram fa-2x"></i>
            </div>
           
            
        </div>
    )
}
