/**
 * Created by LLGZONE on 2017/11/6.
 */
import React from 'react'
import PropTypes from 'prop-types'

import LineHeader from '../../../commons/LineHeader'

import './index.scss'

const PendingReview = ({
  logo,         //公司 logo
  companyName,  //公司名字
  linkman,      //联系人
  place,        //电话
  size,         //规模
  phone,        //电话
  website,      //网站
  license,      //营业执照
  workImgs,     //工作环境
  simpleIntro   //简介
}) => (
  <main>
    <LineHeader title="请耐心等待校方审核" style={{fontSize: '20px'}}/>
    <div style={{padding: '0 40px'}}>
      <div className="pending-main-container">
        <div className="pending-info-container">
          <div className="pending-info-head">
            <img src={logo} alt={`${companyName}`} />
            <p>{companyName}</p>
          </div>
          <p>
            地址：{`${place}`}
          </p>
          <p>
            规模：{`${size}`}
          </p>
          <p>
            网址：{`${website}`}
          </p>
          <p>
            联系人：{`${linkman}`}
          </p>
          <p>
            电话：{`${phone}`}
          </p>
        </div>
        <div className="pending-info-license">
          <img src={license} alt={`${companyName}信誉凭证`} />
        </div>
      </div>
      <div className="pending-working-env">
        {workImgs.map(imgSrc => <img src={imgSrc} alt="工作环境" />)}
      </div>
      <div dangerouslySetInnerHTML={{__html: simpleIntro}} className="pending-intro" >
      </div>
      <div className="pending-foot-btn">
        <input type="button" value="撤回"/>
        <input type="button" value="修改"/>
      </div>
    </div>
  </main>
)

PendingReview.propTypes = {
  logo: PropTypes.object.isRequired,
  companyName: PropTypes.string.isRequired,
  linkman: PropTypes.string.isRequired,
  place: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  phone: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  license: PropTypes.object.isRequired,
  workImgs: PropTypes.array.isRequired,
  simpleIntro: PropTypes.string.isRequired,
}

export default PendingReview