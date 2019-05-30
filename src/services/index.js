/**
 * api接口的统一出口
 */
import { get } from 'common/ajax'
import { getConfig } from 'common/utils'
const { url } = getConfig()
const { ct, lf } = url
export default {
    inviteDetail: (params) => get(`${ct}/sac-offline-activity-web/api/invitation/detail`, params),
    signUpList: (params) => get(`${ct}/sac-offline-activity-web/api/invitation/recordList`, params),
    login: (params) => get(`${lf}/login`, params)
}
