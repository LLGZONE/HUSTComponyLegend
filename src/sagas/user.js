import { take, put, call, fork } from 'redux-saga/effects'
import { login, logout, LOGOUT, LOGIN, register, REGISTER } from '../actions/user'
import { BASE_URL } from '../config/url'
import { REQUEST } from '../actions'
import fetchEntity from '../utils/fetchEntity'
import { isPerfectCMsg } from '../actions/company'
import saveToken from '../utils/saveToken'

//使用用户id得到用户的个人信息
function fetchUserInfo(uid) {
  const url = `${BASE_URL}/user/getById/${uid}`

  return fetchEntity(url)
}

//注册
function fetchRegisterApi(info) {
  const url = `${BASE_URL}/user/register`
  const types =  ['company', 'school', 'student']
  const option = {
    method: 'POST',
    body: JSON.stringify({...info, usertype: types.indexOf(info.usertype)}),
    headers: {
      'Content-Type': 'application/json'
    }
  }

  return fetchEntity(url, option)
}

//登陆
function fetchLoginApi(info) {
  const types =  ['company', 'school', 'student']
  const url = `${BASE_URL}/user/login`
  const header = {
    method: 'POST',
    body: JSON.stringify({...info, usertype: types.indexOf(info.usertype)}),
    headers: {
      'Content-Type': 'application/json',
    },
  }

  return fetchEntity(url, header)
}

//退出登陆
function fetchLogoutApi() {
  const url = `${BASE_URL}/user/logout`

  return fetch(url)
    .then(response => response)
}

//work saga
function * fetchLogin(info) {
  try {
    const { response } = yield call(fetchLoginApi, info)
    if (response && response.uid) {
      localStorage.setItem('uid', response.uid)
      localStorage.setItem('type', info.usertype)
      const token = response.token
      saveToken(token)
      const { response: {cid, sid, stid} } = yield call(fetchUserInfo, response.uid)
      switch (info.usertype) {
        case 'company':
          if (cid) {
            localStorage.setItem('cid', cid.toString())
            yield put(isPerfectCMsg())
          }
          break;
        case 'school':
          if (sid) {
            localStorage.setItem('sid', sid.toString())
            yield put(()=>{})
          }
          break;
        case 'student':
          if (stid) {
            localStorage.setItem('stid', stid.toString())
            yield put(()=>{})
          }
          break;
        default:
          break
      }
      yield put(login.success(response.uid))
    } else {

      yield put(login.failure('用户名或密码错误'))
    }
  }
  catch (e) {
    yield put(login.failure('网络故障'))
  }
}

function * fetchRegister(info) {
  try {
    const {response} = yield call(fetchRegisterApi, info)
    if (response.status === 'success') {
      yield put(register.success())
    } else {
      yield put(register.failure('用户已经存在'))
    }
  }
  catch (e) {
    yield put(register.failure('网络故障'))
  }
}

//watch saga
function * userLogout() {
  while (true) {
    yield take(LOGOUT[REQUEST])
    try {
      yield call(fetchLogoutApi)
      yield put(logout.success())
      localStorage.clear()
    }
    catch (err) {
      yield put(logout.failure('网络故障'))
    }
  }
}

function * userLogin() {
  while (true) {
    const {username, password, userType} = yield take(LOGIN[REQUEST])
    yield call(fetchLogin, {username, password, usertype: userType})
  }
}

function * userRegister() {
  while(true) {
    const {email, password, phone, verify, usertype, identity} = yield take(REGISTER[REQUEST])
    const info = {
      password,
      verify,
      email: '',
      phone: '',
      usertype,
      identity,
    }
    if (email) {
      info.email = email
      info.username = email
    } else {
      info.phone = phone
      info.username = phone
    }
    yield call(fetchRegister, info)
  }
}

function * user() {
  yield fork(userLogout)
  yield fork(userLogin)
  yield fork(userRegister)
}

export default user