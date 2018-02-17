import React, { Component } from 'react'
import Header from './Admin/Header'
import Sidebar from './Admin/Sidebar'
import Footer from './Admin/Footer'

export default class Admin extends Component {
  render() {
    return (
      <div className="layout-admin">
        <Header />
        <main className="container-fluid">
          <div className="wrapper">
            <Sidebar />
            <div className="content">
              {this.props.children}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }
}
