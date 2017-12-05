/**
 * Created by LLGZONE on 2017/11/8.
 */
import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import Header from '../../../components/managementPlatform/Company/Header/index'
import AsideNav from '../../../components/managementPlatform/Company/AsideNav/index'
import PendingReview from './PendingReview'
import PerfectMessage from '../../../components/managementPlatform/Company/PerfectMessage/index'
import PostsManage from './PostsManage'
import PostsPublish from '../../../components/managementPlatform/Company/PostsPublish/'
import SignUp from '../../../components/managementPlatform/Company/SignUp/index'
import TraineeFilter from './TraineeFilter'
import Footer from '../../../components/commons/Footer/index'
import routes from '../../../routes'

import hotClicks from '../../../api/home/hotClicks.json'
import articles from '../../../api/home/aticles.json'
//for test
import namor from 'namor'

import '../../../components/managementPlatform/Company/index.scss'
//just for test
import range from '../../../utils/range'

import _360 from '../../../components/Exercitation/images/Base/360.png'
import license from '../../../components/managementPlatform/Company/PendingReview/license.png'
import env1 from '../../../components/managementPlatform/Company/PendingReview/env1.png'
import env2 from '../../../components/managementPlatform/Company/PendingReview/env2.png'
import env3 from '../../../components/managementPlatform/Company/PendingReview/env3.png'

const newPerson = () => {
  return {
    name: namor.generate({words: 1, numbers: 0}),
    sex: Math.floor(Math.random()) + 1,
    birthday: Math.floor(Math.random() * 50) + 1970,
    major: Math.floor(Math.random() * 100),
    from: 'Hust',
  }
}

const makeData = (len) => {
  return range(len).map(d => {
    return {
      ...newPerson(),
      children: range(10).map(newPerson),
    }
  })
}

const newPer = () => {
  return {
    postName: namor.generate({words: 1, numbers: 0}),
    startDate: Math.floor(Math.random() * 50) + 1970,
    endDate: Math.floor(Math.random() * 50) + 1970,
    total: 30,
    enrollment: 5,
  }
}

const makeData1 = (len) => {
  return range(len).map(d => {
    return {
      ...newPer(),
      children: range(10).map(newPer),
    }
  })
}

const CompanyManagement = () => {
  const companyManagement = routes.companyManagement

  return (
    <div>
      <Header/>
      <main className="management-company-main-container" style={{display: 'flex', paddingTop: '70px'}}>
        <AsideNav/>
        <Route path={companyManagement.pending.path} render={() => <PendingReview
          logo={_360}
          companyName="360集团有限公司"
          linkman="张某"
          place="武汉东湖开发区xxx"
          size={100}
          phone="1999999999"
          website="www.360.com"
          license={license}
          workImgs={[env1, env2, env3]}
          simpleIntro="网络安全关键在人才，而武汉的最大机遇就在人才。昨日，“人才”二字成为国家网络安全周开幕首日的最火关键词。上午，武汉市政府、奇虎360公司与武汉大学签署三方战略合作协议"
        />}/>
        <Route path={companyManagement.postsPublish.path} component={PostsPublish}/>
        <Route path={companyManagement.postsManage.path} render={() => <PostsManage data={makeData1(100)}/>}/>
        <Route path={companyManagement.msgPerfection.path} component={PerfectMessage}/>
        <Route path={companyManagement.signUp.path} component={SignUp}/>
        <Route path={companyManagement.traineeFilter.path} render={() => <TraineeFilter data={makeData(100)}/>}/>
      </main>
      <Footer hotClicks={hotClicks} latestArticle={articles}/>
    </div>
  )
}

export default CompanyManagement