import React, { Component } from 'react'

export default class Footer extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
        <footer className="py-5 bg-black">
        <div className="container">
          <p className="m-0 text-center text-white small">Copyright © Your Website 2019</p>
        </div>
        {/* /.container */}
      </footer>
    )
  }
}
