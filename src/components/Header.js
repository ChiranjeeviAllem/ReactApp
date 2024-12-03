import {useState} from "react";

const Header=()=>{
    const[login, setLogin]=useState("Login");
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-256.png">
                </img>
                </div>
                <div className="nav-items">
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Home</li>
                        <li>
                            <button id="login" className="login" onClick={()=>{
                                login==="Login"?setLogin("Logout"):setLogin("Login");
                            }}>
                                {login}
                            </button>
                        </li>
                    </ul>
                </div>
        </div>
        )
    
}

export default Header;