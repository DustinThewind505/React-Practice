import React from 'react';



function Footer() {




    return(
        <footer>
            <div className="left-section">
                <img className="github-logo" src="/images/reactLogo.png" alt="github logo" />
            </div>
            <div className="middle-section">
                <p>Designed by Dustin Guillen</p>
            </div>
            <div className="right-section">
                <a href="https://github.com/DustinThewind505/react-practice">
                    <img className="github-logo" src="https://cdn3.iconfinder.com/data/icons/ultimate-social/150/48_github-512.png" alt="github logo" />
                    <p>View Code</p>
                </a>
            </div>
        </footer>
    )
}

export default Footer;