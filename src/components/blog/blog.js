import React, { Component } from 'react';

class Blog extends Component {
    render(){
        return (
            <div>
                <div className="blog section section-invert py-4">
        <h3 className="section-title text-center m-5">Latest Posts</h3>

        <div className="container">
          <div className="py-4">
            <div class="row">
              <div class="card-deck">
              <div class="col-md-12 col-lg-4">
                <div class="card mb-4">
                  <img className="card-img-top" src="/assets/images/card-1.jpg" alt="Card image cap" />
                  <div className="card-body">
                    <h4 className="card-title">Find Great Places to Work While Travelling</h4>
                    <p className="card-text">He seems sinking under the evidence could not only grieve and a visit. The father is to bless and placed in his length hid...</p>
                    <a className="btn btn-primary btn-pill" href="#">Read More →</a>
                  </div>
                </div>
              </div>

              <div class="col-md-12 col-lg-4">
                <div class="card mb-4">
                  <img class="card-img-top" src="images/common/card-3.jpg" alt="Card image cap"/>
                  <div class="card-body">
                    <h4 class="card-title">Quick Tips for Improving Your Website's Design</h4>
                    <p class="card-text">He seems sinking under the evidence could not only grieve and a visit. The father is to bless and placed in his length hid...</p>
                    <a class="btn btn-primary btn-pill" href="#">Read More →</a>
                  </div>
                </div>
              </div>

              <div class="col-md-12 col-lg-4">
                <div class="card mb-4">
                  <img class="card-img-top" src="images/common/card-2.jpg" alt="Card image cap" />
                  <div class="card-body">
                    <h4 class="card-title">A Designer's Tips While Travelling and Working</h4>
                    <p class="card-text">He seems sinking under the evidence could not only grieve and a visit. The father is to bless and placed in his length hid...</p>
                    <a class="btn btn-primary btn-pill" href="#">Read More →</a>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
            </div>
        );
    }
}

export default Blog;