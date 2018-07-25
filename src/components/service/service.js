import React, { Component } from 'react';

class Service extends Component {
    render(){
        return (
            <div>
                <div id="our-services" class="our-services section py-4">
        <h3 class="section-title text-center my-5">Our Services</h3>
       
        <div class="features py-4 mb-4">
          <div class="container">
            <div class="row">
              <div class="feature py-4 col-md-6 d-flex">
                <div class="icon text-primary mr-3"><i class="fa fa-paint-brush"></i></div>
                <div class="px-4">
                    <h5>Design &amp; Branding</h5>
                    <p>Quisque mollis mi ac aliquet accumsan. Sed sed dapibus libero. Nullam luctus purus duis sensibus signiferumque.</p>
                </div>
              </div>
              <div class="feature py-4 col-md-6 d-flex">
                <div class="icon text-primary mr-3"><i class="fa fa-code"></i></div>
                <div class="px-4">
                    <h5>Programming</h5>
                    <p>Quisque mollis mi ac aliquet accumsan. Sed sed dapibus libero. Nullam luctus purus duis sensibus signiferumque.</p>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="feature py-4 col-md-6 d-flex">
                <div class="icon text-primary mr-3"><i class="fa fa-font"></i></div>
                <div class="px-4">
                    <h5>Copywriting</h5>
                    <p>Quisque mollis mi ac aliquet accumsan. Sed sed dapibus libero. Nullam luctus purus duis sensibus signiferumque.</p>
                </div>
              </div>
              <div class="feature py-4 col-md-6 d-flex">
                <div class="icon text-primary mr-3"><i class="fa fa-support"></i></div>
                <div class="px-4">
                    <h5>Training &amp; Support</h5>
                    <p>Quisque mollis mi ac aliquet accumsan. Sed sed dapibus libero. Nullam luctus purus duis sensibus signiferumque.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
       
      </div>
            </div>
        )
    }
}

export default Service;