<template>
    <div class="index header_margintop" id="index">
        <mt-header title="index" fixed></mt-header>


        <About :msg="about"/>
        <p>----------------------------</p>
        <p>{{message}},{{num}}</p>
        <p v-on:click="changeMessage()">点击</p>
        <p>
            <input style="border: 1px solid #999;" v-model="input"/>
        </p>
        <p>{{input}}</p>
        <p>-----------------------</p>
        <div style="padding-bottom: 30px;">
            <router-link to="/Home">Home</router-link>
            |
            <router-link to="/About">About</router-link>
            <router-view></router-view>
        </div>
        <hr/>

        <!--商品分类-->
        <nav class="typesHeader flex ">
            <div class="typesList" v-for="(goodstypes,$index) in goodsTypes" :key="goodstypes.id"
                 v-on:click="toggle($index, goodstypes.id)" :class="{active:$index==active}">
                {{goodstypes.name}}
            </div>
        </nav>

        <hr/>

        <!--商品列表-->
        <div class="flex main">
            <div class="flex goods_list" v-for="(item, index) in goodsList" :key="item.id" :id="item.id">
                <div class="goods_img" v-on:click="goodsDetail(item.id)">
                    <img :src="item.img_url"/>
                </div>
                <div class="goods_right ">
                    <div class="goods_name">{{item.name}}</div>
                    <div class="goods_bottom flex">
                        <div class="goods_bottom_left">
                            <div class="goods_price">¥ {{item.price}}</div>
                            <div class="goods_stock">库存 {{item.num}}</div>
                        </div>
                        <div class="goods_bottom_right flex">
                            <i v-if="item.shoppingcart.length>0" class="iconfont icon-jian" v-on:click="minTapp(index, item.num, item.id, item.name, item.price, item.unitname, 'gou', item.shoppingcart[0])" ></i>
                            <div v-if="item.shoppingcart.length>0" class="add_num">{{item.shoppingcart[0].productcount}}</div>
                            <!--<div v-else class="add_num"></div>-->
                            <i class="iconfont icon-jia1" v-on:click="addTap(index, item.num, item.id, item.name, item.price, item.unitname, 'gou', item.shoppingcart[0])"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <tabbar :selected="selected" :tabs='tabs' />

    </div>
</template>

<script lang="ts">

    import {Component, Prop, Vue, Watch} from 'vue-property-decorator';
    import tabbar from '@/components/tabbar.vue'
    import Home from '@/components/Home.vue'
    import About from '@/components/About.vue'
    import Ports from '../utils/ports/ports.js'
    import { Toast } from 'mint-ui'

    @Component({
        components: {
            tabbar,About
        },
    })

    export default class index extends Vue {
        msg = 'Home';
        message = 'Hello';
        num = 0;
        input = '监听输入框内容';
        selected = 'index';
        tabs = [require("../assets/images/icons/home_green.png"),require("../assets/images/icons/cart_gray.png"), require("../assets/images/icons/my_gray.png")];
        about = ['about1','about2'];
        goodsTypes = [];
        goodsList = [];
        typeIndex = 0; // 首页默认显示哪条数据
        active = 0;

        // Watch 监听
        @Watch('input', {immediate: true, deep: true})
        inputChanged(val: string, oldVal: string) {
            console.log(val, oldVal)
        }

        // @Watch('$route', {immediate: true, deep: true})
        // routeChanged(to, from){
        //     console.log('$route：', to, from)
        // }

        // 计算属性
        private get reversedMessage(): string[] {
            return this.message.split('').reverse().join('')
        }

        private get Num(): string[] {
            var that = this
            that.num++
            return that.num
        }

        // method
        public changeMessage(): void {
            var that = this
            that.message = 'Good'
            console.log('输入框内容：', that.input)
        }

        public getName(): string {
            let name = '张三'
            let storeName = name
            this.message = name
            return storeName
        }

        // 商品分类
        public goodstypes(): void  {
            var that = this
            that.$post(Ports.getTypes, {}).then((getTypes) => {
                // console.log('获取分类', getTypes)
                if (getTypes.state === 1) {
                    that.goodsTypes = getTypes.data
                    var goodsTypesId = getTypes.data[that.typeIndex].id
                    that.goodslist(goodsTypesId) // 商品列表
                } else {
                    console.log('请求错误')
                }
            })
        }

        // 切换菜单
        public toggle(index, id): void {
            this.active = index
            console.log('toggle', index, id)
            this.typeIndex = index
            this.goodslist(id) // 商品列表
        }
        // 跳转详情页
        public goodsDetail(e): void {
            console.log('点击商品', e)
            this.$router.push({path: '/index_detail', query: {id: e}})
            // this.$router.push({name: 'index_detail', params: {id: e}})
        }
        // 商品列表
        public goodslist(id): void {
            var that = this
            that.$post(Ports.getProductList, {top_type: id, userid: 10118}).then((productList) => {
                // console.log('---id----获取商品列表------：', id, productList.data)
                if (productList.state === 1) {
                    that.goodsList = productList.data
                } else {
                    console.log('请求错误')
                }
            })
        }
        // 减购物车
        public minTapp(index, num, id, name, price, unitname, gou, shoppingcart): void {
            var that = this
            // console.log('减购物车',index, num, id, name, price, unitname, gou, shoppingcart)
            that.$post(Ports.changeCart, {userid: 10118, Productid: id, Productname: name, Productprice: price, Productcount: -1, Productunitname: unitname}).then((res) => {
                // console.log('减购物车', res)
                if (res.state === 1) {
                    that.goodsList[index].shoppingcart[0].productcount--
                    if(that.goodsList[index].shoppingcart[0].productcount === 0 ) {
                        that.goodsList[index].shoppingcart.length = 0
                    }
                } else {
                    Toast({message: '减少失败',duration: 1000})
                }
            })
        }
        // 添加购物车
        public addTap(index, num, id, name, price, unitname, gou, shoppingcart): void {
            // console.log('添加购物车',index, num, id, name, price, unitname, gou, shoppingcart)
            var that = this
            // if (gou === 'gou') {
            // }
            if (num === '0') {
                Toast({message: '已售罄',duration: 1000})
                return
            }
            if (that.goodsList[index].shoppingcart[0] !== undefined) {
                if (Number(that.goodsList[index].shoppingcart[0].productcount) >= 999) {
                    Toast({message: '商品添加数量已达到上限',duration: 1000});
                    return
                }
                if (Number(that.goodsList[index].num) <= Number(that.goodsList[index].shoppingcart[0].productcount)) {
                    Toast({message: '只有这么多了',duration: 1000})
                    return
                }
            }
            that.$post(Ports.changeCart, {userid: 10118, Productid: id, Productname: name, Productprice: price, Productcount: 1, Productunitname: unitname}).then((res) => {
                // console.log('添加购物车', res)
                if (res.state === 1) {
                    if (that.goodsList[index].shoppingcart[0] === undefined) {
                        that.goodsList[index].shoppingcart.push({unitname: '', productcount: '1', productid: id, status: '1'})
                        // 商品详情加
                        that.proDeNum = 1
                    } else {
                        that.goodsList[index].shoppingcart[0].productcount++
                    }
                } else {
                    Toast({message: '添加失败',duration: 1000});
                }
            })
        }
        // 生命周期
        private created(): void {
            console.log('index created', this.Num, this.reversedMessage, this.getName())
            // this.$post('https://api.smartstorechina.com/1.0/XcxProduct/getTypes').then((response) => {
            //     console.log(response.data)
            // })
        }

        private mounted(): void {
            console.log('index mounted')
        }

        private updated(): void {
            console.log('index updated1')
        }

        private destroyed(): void {
            console.log('index destroyed')

        }

        private beforeRouteEnter(to, from, next): void {
            // console.log('beforeRouteEnter', to, from, next)
            if (from.name === '') {
                to.meta.isBack = true;
            }
            next();
        }

        private activated(): void {
            var that = this
            // console.log('index activated ', that.$route.meta.isBack)
            // 如果isBack是false，表明需要获取新数据，否则就不再请求，直接使用缓存的数据
            if (!that.$route.meta.isBack) {
                console.log('index activated----', '表明需要获取新数据，否则就不再请求，直接使用缓存的数据')
                that.selected = "index"
                that.goodstypes() // 商品分类
            }
            // 恢复成默认的false，避免isBack一直是true，导致下次无法获取数据
            that.$route.meta.isBack = false
        }
    }
</script>

<style scoped>
    a {color: #2c3e50;}
    a.router-link-exact-active {color: #42b983;}
    #index {width: 100%;}
    .flex {display: flex}
    .typesHeader{display: -webkit-box;display: -ms-flexbox;display: flex;-webkit-box-align: middle;-ms-flex-align: middle;align-items: middle;overflow: auto;color: #000}
    .typesHeader .typesList{ text-align: center;font-size: 16px;-ms-flex-negative: 0;flex-shrink: 0;padding: 10px;}
    .typesHeader .active{color: red;}

    .main {padding: 5px 5px 60px 5px;flex-direction: column;}
    .main .goods_list{margin: 15px 0;box-sizing: border-box;border-bottom: 1px solid #eee;}
    .main .goods_img{width: 30%;}
    .main .goods_img img {width: 100%;}
    .main .goods_right{flex: 1;}
    .main .goods_name{font-size: 0.7rem;word-break: break-all;overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;padding: 10px 0;height: 2.1rem;text-align: left;}
    .main .goods_list .goods_bottom_left .goods_price {font-size: 1rem;}
    .main .goods_list .goods_bottom_left .goods_stock {font-size: 0.5rem;color: #999;}
    .goods_list .goods_bottom {justify-content: space-between;align-items: center;padding: 0 15px;}
    .goods_list .goods_bottom_right{align-items: center;}
    .goods_list .goods_bottom_right .iconfont{border-radius:50%;font-size:22px;}
    .goods_list .goods_bottom_right .icon-jian{color:#d8d7d7;background-color:#f2f2f2;}
    .goods_list .goods_bottom_right .add_num{min-width:30px;font-size: 10px;color:#F44D4D;text-align: center;}
    .goods_list .goods_bottom_right .icon-jia1{color:#ff811a;}

</style>