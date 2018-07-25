import React, { Component } from 'react';

class Navbar extends Component {

    render() {
        return ( 
            <div> 
              
              <div className="container">
        
          <nav className="navbar navbar-expand-lg navbar-dark pt-4 px-0">
            <a className="navbar-brand" href="#">
              <img src="%PUBLIC_URL%/assets/img/shards-logo-white.svg" className="mr-2" alt="Shards - Agency Landing Page" />
              Shards Agency
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Our Services</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Blog</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Testimonials</a>
                </li>
              </ul>

              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="https://twitter.com/DesignRevision"><i className="fa fa-twitter"></i></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://www.facebook.com/designrevision"><i className="fa fa-facebook"></i></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://dribbble.com/hisk"><i className="fa fa-dribbble"></i></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://github.com/designrevision"><i className="fa fa-github"></i></a>
                </li>
              </ul>
            </div>
          </nav>
        
        </div> 
                        
                    
            </div>
          );
        }
}
export default Navbar;