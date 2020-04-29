<template>
    <div class="index_detail header_margintop" id="nav">
        <mt-header title="首页-子页面" fixed>
            <router-link to="" slot="left">
                <mt-button icon="back" @click="$router.back(-1)">返回</mt-button>
            </router-link>
        </mt-header>
        <!--<div class="goods_img ">-->
            <!--<img :src="goodsDetail.img_url"/>-->
        <!--</div>-->
        <div class="detail_main">
            <div class="detail_name">
                {{goodsDetail.name}}
            </div>
            <div class="detail_nums">
                当前库存 {{goodsDetail.num}}
            </div>
            <div class="detail_price">
                <span>¥</span> {{goodsDetail.price}}
            </div>
        </div>
    </div>

</template>

<script lang="ts">
    import {Component, Prop, Vue, Watch} from 'vue-property-decorator';
    import {Toast} from 'mint-ui'
    import Ports from '../utils/ports/ports.js'

    @Component
    export default class index_detail extends Vue {
        goodsId='';
        goodsDetail={};

        private beforeRouteEnter(to, from, next): void {
            // console.log('beforeRouteEnter', to, from, next)
            if (from.name === '') {
                to.meta.isBack = true;
            }
            next();
        }

        private activated(): void {
            var that = this
            // console.log('index_detail activated ', that.$route.meta.isBack)
            // 如果isBack是false，表明需要获取新数据，否则就不再请求，直接使用缓存的数据
            if (!that.$route.meta.isBack) {
                console.log('index_detail activated----', '表明需要获取新数据，否则就不再请求，直接使用缓存的数据')
                // var goodsId = this.$route.params.id
                var goodsId = this.$route.query.id
                this.goodsId = goodsId
                console.log('indexGoodsDetail activated：', goodsId)
                that.$post(Ports.getProductDetails, {id: this.goodsId,userid: 10118}).then((res) => {
                    console.log('获取商品详情', res)
                    that.goodsDetail = res.data
                })
            }
            // 恢复成默认的false，避免isBack一直是true，导致下次无法获取数据
            that.$route.meta.isBack = false
        }
    }

</script>

<style scoped>
    .index_detail{text-align: left;}
    .goods_img{width: 100%;height: 40vh;display: flex;align-items: center;justify-content: center;}
    .goods_img img{height: 100%}
    .detail_main{padding: 10px;}
    .detail_main .detail_name{overflow:hidden;text-overflow:-o-ellipsis-lastline;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;line-clamp:2;-webkit-box-orient:vertical;word-wrap:break-word;font-size: 16px;}
    .detail_nums{padding:10px 0;color: #999;font-size: 13px;}
    .detail_price{font-size: 18px;color:#FF262B;font-family:Helvetica;}
    .detail_price span{font-size: 13px;}
</style>