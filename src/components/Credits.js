import React from 'react';
import "./css/Credits.css"

const Credits = () => {
    return(

    <footer className="footer">
    <div className="footer-left">
    Build with <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">React</a>
    </div>
    <div className="footer-center">
        <a href="https://github.com/kilianMeddas" target="_blank" rel="noopener noreferrer">GitHub</a> 
        {" |  "} 
        <a href="https://www.linkedin.com/in/kilian-meddas-6b361525b" target="_blank" rel="noopener noreferrer">LinkedIn</a>
    </div>
    <div className="footer-right"><p>Kilian Meddas © {new Date().getFullYear()}</p></div>
    
    </footer>
    )
}

export default Credits;
