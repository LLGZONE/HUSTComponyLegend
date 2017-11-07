/**
 * Created by LLGZONE on 2017/11/5.
 */
import React from 'react'
import {Link} from 'react-router-dom'

import './LogInType.scss'

const LogInType = ({type}) => (
  <nav className="login-select-field">
    <Link to="/login/company">
      <div className={(type === 'company' ? 'active' : '')+' login-select-btn'}>
        企业用户
      </div>
    </Link>
    <Link to="/login/school">
      <div className={(type === 'student' ? 'active' : '')+' login-select-btn'}>
        高校用户
      </div>
    </Link>
    <Link to="/login/person">
      <div className={(type === 'person' ? 'active' : '')+' login-select-btn'}>
        个人用户
      </div>
    </Link>
  </nav>
)

export default LogInType