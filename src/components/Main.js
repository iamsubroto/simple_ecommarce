import React, { Component } from 'react'
import Sidebar from './Sidebar';
import Products from './Products'

class Main extends Component {
  render() {
    return (
        <div className="container py-4">
            <div className="row">
            <div className="col-md-3">
                <Sidebar />
            </div>
            <div className="col-md-9">
                <Products />
            </div>
            </div>
        </div>

    )
  }
}


export default Main;