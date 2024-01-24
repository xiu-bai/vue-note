import request from '@/utils/request'

// 分类：获取文章分类
export const artGetChannelsService = () => request.get('/my/cate/list')
