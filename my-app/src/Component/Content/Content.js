import React, { Component } from 'react'
export default class Content extends Component {
  constructor(props){
    super(props);
    this.state= {
      trangThai :0
    }
  }
  thongbao = ()=>{alert("Cách xứ lý tương tác trong Reactjs");}
  thongbao2 = ()=>{alert("Thông báo lần 2")}
  thongbao3 =(x)=>{alert(x);}
  renderButton =()=>(
    <div className="row">
        <div className="btn btn-group">
          <div type="button" className="btn btn-info" onClick={()=>this.editClick()}>Edit</div>
          <div type="button" className="btn btn-warning">Remove </div>
        </div>
      </div>
  )
  renderForm =()=>(
    <div className="row">
          <div className="form-group">
            <input type="text" ref={(dulieunhap)=>{this.trunggian = dulieunhap}} defaultValue={this.props.tieude} name="ten"  className="form-control" />
          </div>
          <div className="form-group">
            <button className="btn btn-block btn-danger" onClick ={()=>this.saveClick()}>Save</button>
          </div>
        </div>
  )

  editClick = ()=>{
    this.setState({
      trangThai: 1
    });
  }
  saveClick =()=>{
    this.setState({
      trangThai:0
    });
    console.log(this.trunggian.value)
  }

  displayCheck =()=>{
    if(this.state.trangThai ===0){
      return this.renderButton()
    }else{
      return this.renderForm()
    }
  }

  render() {
    return (
        
<div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
  <div className="row">

    <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
      <div className ="p-1">
        <img src={this.props.anh} className="img-fluid rounded-circle" alt="" />
      </div>
    </div>
    
    <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7">
      <div className="p-1">
        <h2 className="display-6">{this.props.tieude}</h2> 
        <p>{this.props.trichdan}</p>
      </div>
    </div>
    {this.displayCheck()}
  </div>
</div>
)
}
}
