/**
 * Created by LLGZONE on 2017/10/28.
 */
import React from 'react'
import NavBarItem from './NavBarItem'

import Logout from '../../../containers/Logout'
import './index.css'

const ExercitationHeader = () => {

  return (
    <div>
      <header className="commons-exercitation-header">
        <h1>信息与网络空间安全实习平台</h1>
        <nav className="commons-exercitation-nav">
          <NavBarItem
            to="/exercitation"
            label="实习首页"
            exact={true}
          />
          <NavBarItem
            to="/exercitation/base"
            label="实习基地"
          />
          <NavBarItem
            to="/exercitation/posts"
            label="实习岗位"
          />
          <NavBarItem
            to="/exercitation/institute"
            label="实习学院"
          />
          <NavBarItem
            to="/exercitation/model"
            label="实习标兵"
          />
          <NavBarItem
            to="/member/center"
            label="会员中心"
          />
        </nav>
        <Logout/>
      </header>
      <div className="hidden-div">
      </div>
    </div>
  )
}

export default ExercitationHeader