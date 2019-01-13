import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
      <div className="bg-dark">
        <div className="container py-5 text-white">
            <div className="row">
                <div className="col-md-3 offset-md-3">
                    <i class="fas fa-archway" style={{fontSize: '100px'}}></i>
                </div>
                <div className="col-md-3">
                    <p className="lead mb-0">External Links</p>
                    <ul className="list-unstyled">
                        <li><a href="#" className="text-white">Link 1</a></li>
                        <li><a href="#" className="text-white">Link 2</a></li>
                        <li><a href="#" className="text-white">Link 3</a></li>
                        <li><a href="#" className="text-white">Link 4</a></li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <p className="lead mb-0">About Us</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus inventore cumque maxime quibusdam.</p>
                </div>
            </div>
        </div>
      </div>
    )
  }
}


export default Footer;