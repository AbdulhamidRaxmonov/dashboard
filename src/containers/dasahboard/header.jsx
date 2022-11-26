import React, { Component } from 'react'
import Nav from '../../companents/nav'
var objNav = {
    title: "TailStack",
    NavImg: "../logo512.png",
    li: "Featurs",
    li1: "Pricing",
    li2: "Sign up",
    btn: "login"
}

export default class header extends Component {
  render() {
    return (
      <div>
         <Nav data={objNav}/>
      </div>
    )
  }
}
