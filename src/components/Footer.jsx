import {React} from 'react';

function Footer() {
    return (<footer className="hugs-bottom colored-background footer">
        <p>
            &copy;
            {new Date().getFullYear()}
            {' '}
            Switchfully
        </p>
    </footer>)
}

export default Footer;