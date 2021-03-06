import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import LineHeader from '../../../components/commons/LineHeader/index'
import ReactTable from 'react-table'
import TablePagination from '../../../components/commons/TablePagination/index'

import 'react-table/react-table.css'
import '../../../components/managementPlatform/Company/PostsManage/index.scss'

class PostsManage extends React.Component {
  render() {
    const {data} = this.props

    return (
      <section style={{marginBottom: '20px'}}>
        <LineHeader title="实习岗位列表" style={{fontSize: '1.125em'}} />
        <ReactTable
          data={data}
          columns={[
            {
              Header: '序号',
              Cell({ viewIndex }) {
                return viewIndex + 1
              },
              sortable: false,
              filterable: false,
              className: 'text-center',
              width: 50,
            },
            {
              Header: '岗位名称',
              accessor: 'postName',
              className: 'text-center'
            },
            {
              Header: '发布日期',
              accessor: 'startDate',
              className: 'text-center'
            },
            {
              Header: '结束日期',
              accessor: 'endDate',
              className: 'text-center'
            },
            {
              Header: '报名人数',
              Cell({original}) {
                const {total, enrollment} = original
                return `${total} (${enrollment})`
              },
              className: 'text-center'
            },
            {
              Header: '操作',
              Cell() {
                return <div className="posts-manage-operation">
                  <Link to="/modify">
                    编辑
                  </Link>
                  <Link to="/abandon">
                    下架
                  </Link>
                  <Link to="/delete">
                    删除
                  </Link>
                  <Link to="/top">
                    置顶
                  </Link>
                  <Link to="/tohome">
                    发布到首页
                  </Link>
                </div>
              },
              width: 230
            }
          ]}
        showPagination
        PaginationComponent={TablePagination}
        />
      </section>
    )
  }
}

PostsManage.propTypes = {
  data: PropTypes.array.isRequired
}

export default PostsManage