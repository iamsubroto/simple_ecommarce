import React, { Component } from 'react'

class Sidebar extends Component {
  render() {
    return (
        <React.Fragment>
            <h5>Products Category</h5>
            <div className="list-group my-3">
                <a href="#" className="list-group-item list-group-item-action">Health</a>
                <a href="#" className="list-group-item list-group-item-action">Beauty</a>
                <a href="#" className="list-group-item list-group-item-action">Sport</a>
                <a href="#" className="list-group-item list-group-item-action">Fitness</a>              
            </div>
            <h5>Price Range</h5>
            <div className="list-group my-3">
                <a href="#" className="list-group-item list-group-item-action">1000 - 2000</a>
                <a href="#" className="list-group-item list-group-item-action">2000 - 5000</a>
                <a href="#" className="list-group-item list-group-item-action">5000 - 10000</a>
                <a href="#" className="list-group-item list-group-item-action">10000 - 20000</a>              
            </div> 
        </React.Fragment> 
    )
  }
}

export default Sidebar;