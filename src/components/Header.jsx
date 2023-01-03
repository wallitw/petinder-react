import {React} from 'react';
import pic from '../assets/images/heart.png'

function Header() {
    const title = "Petinder";
    return (<header className="colored-background header">
        <img className="logo" src={pic} alt="heart"/>
        {title}
    </header>)
}

export default Header;