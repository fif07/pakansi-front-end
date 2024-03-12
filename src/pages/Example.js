import React, { Component } from "react";
// import  { InputDate } from "../elements/Form";
import Breadcrumb from "../elements/Breadcrumb"

export default class Example extends Component {
  // state = {
  //   value: {
  //     startDate: new Date(),
  //     endDate: new Date(),
  //     key: "selection",
  //   },
  // };

  // handleChange = (e) => {
  //   this.setState({ [e.target.name]: e.target.value });
  // };
  
  render() {
    // console.log(this.state);
    const breadcrumbList = [
      { pageTitle: "Beranda", pageHref: "" },
      { pageTitle: "Detail Rumah", pageHref: "" }
    ];
    
    return (
      <div className="container">
        <div
          className="row align-items-center justify-content-center"
          style={{ height: "100vh" }}
        >
          <div className="col-auto">
            <Breadcrumb data={breadcrumbList}/>
          </div>
        </div>
      </div>
    );
  }
}
