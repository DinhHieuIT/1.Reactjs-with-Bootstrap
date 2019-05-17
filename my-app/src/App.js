import React, { Component } from 'react';
import './App.css';
import TopMenu from './Component/TopMenu/TopMenu';
import Header from './Component/Header/Header';
import Content from './Component/Content/Content';
import Footer from './Component/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="_013">
        <TopMenu />
        <Header />
        <div className="container">
          <div className="row pt-5">
            <Content tieude="Cách sử dụng props" vitri1 ="order-xs-2 order-sm-2 order-md-2 order-lg-2" anh="img/01.jpg" trichdan="Day là phần 1" />
            <Content tieude="Tin tức số 2" anh="img/01.jpg" trichdan="Day là phần 2"/>
            <Content tieude="Tin số 3" vitri1 ="order-xs-2 order-sm-2 order-md-2 order-lg-2" anh="img/01.jpg" trichdan="Day là phần 3" />
          </div>
        </div>

        <div className="container">
          <div className="row pt-5">
            <Content tieude="Cách sử dụng props" vitri1 ="order-xs-2 order-sm-2 order-md-2 order-lg-2" anh="img/01.jpg" trichdan="Day là phần 1" />
            <Content tieude="Tin tức số 2" anh="img/01.jpg" trichdan="Day là phần 2"/>
            <Content tieude="Tin số 3" vitri1 ="order-xs-2 order-sm-2 order-md-2 order-lg-2" anh="img/01.jpg" trichdan="Day là phần 3" />
          </div>
        </div>

        <div className="container">
          <div className="row pt-5">
            <Content tieude="Cách sử dụng props" vitri1 ="order-xs-2 order-sm-2 order-md-2 order-lg-2" anh="img/01.jpg" trichdan="Day là phần 1" />
            <Content tieude="Tin tức số 2" anh="img/01.jpg" trichdan="Day là phần 2"/>
            <Content tieude="Tin số 3" vitri1 ="order-xs-2 order-sm-2 order-md-2 order-lg-2" anh="img/01.jpg" trichdan="Day là phần 3" />
          </div>
        </div>
        
        <Footer/> 
      </div>  
    );
  }
}

export default App;
