import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'
import '../template/Custom.css'

import Routes from './routes'
import Menu from '../template/Menu'

import React from 'react'

export default props => (
  <div className="container">
    <Menu />
    <Routes />
  </div>
)
