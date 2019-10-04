<template>
    <div class="goods-list">
        <div class="goods-item">
            <img src="https://img.alicdn.com/bao/uploaded/i1/100960645/O1CN017GKov81GdS1WrBiKL_!!100960645.jpg_360x360xzq90s150.jpg_.webp" alt="">
            <h1 class="title">Coolpad/酷派 1873-A0学生价全面屏安卓游戏智能手机全网通cool9</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥899</span>
                    <span class="old">￥999</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩60件</span>
                </p>
            </div>
        </div>
        <div class="goods-item">
            <img src="https://gaitaobao2.alicdn.com/tfscom/i1/3424894711/O1CN01MSmsdb1kfgMQbvlDp_!!0-item_pic.jpg_240x240xz.jpg_.webp" alt="">
            <h1 class="title">Sony索尼a5100l微单套机单反相机学生款入门级女生高像素旅行家用</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥899</span>
                    <span class="old">￥999</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩60件</span>
                </p>
            </div>
        </div>
        <div class="goods-item">
            <img src="https://img.alicdn.com/bao/uploaded/i1/100960645/O1CN017GKov81GdS1WrBiKL_!!100960645.jpg_360x360xzq90s150.jpg_.webp" alt="">
            <h1 class="title">Coolpad/酷派 1873-A0学生价全面屏安卓游戏智能手机全网通cool9</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥899</span>
                    <span class="old">￥999</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩60件</span>
                </p>
            </div>
        </div>
    </div>
</template>
<script>
</script>
<style scoped>
.goods-list {
    display: flex;
    flex-wrap: wrap;
    padding: 7px;
    justify-content: space-between;
}

.goods-list .goods-item {
    width: 49%;
    border: 1px solid #ccc;
    box-shadow: 0 0 8px #ccc;
    margin: 4px 0;
    padding: 2px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 293px;
}

.goods-list .goods-item img {
    width: 100%;
}

.goods-list .goods-item .title {
    font-size: 14px;
}

.goods-list .goods-item .info {
    background-color: #eee;
}

.goods-item .info p {
    margin: 0;
    padding: 5px;
}

.goods-item .info .price .now {
    color: red;
    font-weight: bold;
    font-size: 16px;
}

.goods-item .info .price .old {
    text-decoration: line-through;
    font-size: 12px;
    margin-left: 10px;
}

.goods-item .info .sell {
    display: flex;
    justify-content: space-between;
    font-size: 13px;
}
</style>