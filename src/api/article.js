/**
 * 文章请求模块
 */
import request from '@/utils/request'

/**

/**
 * 获取文章
 */
export const getArticleById = articleId => {
  return request({
    method: 'GET',
    url: `/${articleId}`
  })
}
