import request from '@/utils/request'

// 加入购物车
// goodsId    => 商品id     iphone8
// goodsSkuId => 商品规格id  红色的iphone8  粉色的iphone8
export const addCart = (goodsId, goodsNum, goodsSkuId) => {
    console.log(goodsId, goodsNum, goodsSkuId)
    return request.post('/cart/add', {
        goodsId,
        goodsNum,
        goodsSkuId
    })
}

// 获取购物车列表
export const getCartList = () => {
    return request.get('/cart/list')
}
