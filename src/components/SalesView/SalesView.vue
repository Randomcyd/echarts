<template>
    <div class="salesView">
        <el-card shadow="hover" :body-style="{padding:'0 0 20px 0'}">
            <template v-slot:header>
                <div class="menu-wrapper">
                    <el-menu
                        mode="horizontal"
                        :default-active="activeIndex"
                        @select="onMenuSelect"
                    >
                        <el-menu-item index="1">销售额</el-menu-item>
                        <el-menu-item index="2">访问量</el-menu-item>
                    </el-menu>
                    <div class="menu-right">
                        <el-radio-group v-model="radioSelect" size="small">
                            <el-radio-button label="今日"></el-radio-button>
                            <el-radio-button label="本周"></el-radio-button>
                            <el-radio-button label="本月"></el-radio-button>
                            <el-radio-button label="今年"></el-radio-button>
                        </el-radio-group>
                        <el-date-picker
                            type="daterange"
                            v-model="date"
                            range-separator="至"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期"
                            size="small"
                            unlink-panels
                            :picker-options="pickerOptions"
                            class="date-picker"
                        >

                        </el-date-picker>
                    </div>
                </div>
            </template>
            <template>
                <div class="sales-view-chart-wrapper">
                    <div id="sales-view-chart" :style="{width:'100%',height:'100%'}">
                    
                    </div>
                    <div class="sales-view-list">
                        <div class="sales-view-title">排行榜</div>
                        <div class="list-item" v-for="item in rankData" :key="item.no">
                            <div class="list-item-no" :class="item.no <= 3? 'top-no':''">{{item.no}}</div>
                            <div class="list-item-name">{{item.name}}</div>
                            <div class="list-item-money">{{item.money}}</div>
                        </div>
                    </div>
                </div>
            </template>
        </el-card>
    </div>
</template>

<script>
export default {
    data(){
        return {
            activeIndex:'1',
            radioSelect:'今日',
            date:'',
            rankData:[
                {
                    no:1,
                    name:'麦当劳',
                    money:'323,234'
                },
                {
                    no:2,
                    name:'麦当劳',
                    money:'323,234'
                },
                {
                    no:3,
                    name:'麦当劳',
                    money:'323,234'
                },
                {
                    no:4,
                    name:'麦当劳',
                    money:'323,234'
                },
                {
                    no:5,
                    name:'麦当劳',
                    money:'323,234'
                },
                {
                    no:6,
                    name:'麦当劳',
                    money:'323,234'
                },
                {
                    no:7,
                    name:'麦当劳',
                    money:'323,234'
                },
            ],
            pickerOptions:{
                shortcuts:[{
                    text:'最近一周',
                    onClick(picker){
                        const start = new Date();
                        const end = new Date();
                        start.setTime(start.getTime()-3600*24*1000*7);
                        picker.$emit('pick',[start,end])
                        
                    }
                },{
                    text:'最近一个月',
                    onClick(picker){
                        const start = new Date();
                        const end = new Date();
                        start.setTime(start.getTime()-3600*24*1000*30);
                        picker.$emit('pick',[start,end])
                    }
                },{
                    text:'最近三个月',
                    onClick(picker){
                        const start = new Date();
                        const end = new Date();
                        start.setTime(start.getTime()-3600*24*1000*90);
                        picker.$emit('pick',[start,end])
                    }
                }]
            }
        }
    },
    mounted(){
        const chartDom = document.getElementById('sales-view-chart');
        const chart = this.$echarts.init(chartDom);
        chart.setOption({
            title:{
                text:'年度销售额',
                textStyle:{
                    fontSize:12,
                    color:'#666'
                },
                left:32,
                top:18
            },
            xAxis:{
                type:'category',
                data:['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
                axisTick:{
                    alignWithLabel:true,
                    lineStyle:{
                        color:'#999'
                    }
                },
                axisLine:{
                    lineStype:{
                        color:'#999'
                    }
                }
            },
            yAxis:{
                axisLine:{
                    show:false
                },
                axisTick:{
                    show:false
                },
                splitLine:{
                    lineStyle:{
                        type:'dotted',
                        color:"#eee"
                    }
                }
            },
            series:[{
                type:'bar',
                barWidth:'35%',
                data:[200,350,300,350,300,250,200,250,300,350,300,250],
                areaStyle:{
                    color:'purple'
                },
                smooth:true,
                color:['#3398db']
            }],
            grid:{
                left:70,
                right:60,
                top:60,
                bottom:40
            }
        })
    },
    methods:{
        onMenuSelect(index){
            this.activeIndex = index;
        }
    }
}
</script>

<style lang="scss" scoped>
.salesView{
    margin-top: 20px;
}
.menu-wrapper{
    position: relative; display: flex;
    .menu-right{
        position: absolute;
        top: 0; right:20px;
        height: 50px; display: flex;
        align-items: center;
    }
    .el-menu{
        width: 100%; padding-left: 20px;
        .el-menu-item{
            height: 50px; line-height: 50px; margin: 0 20px;
        }
    }
    .el-radio-group{
        margin-right: 20px;
    }
}
.sales-view-chart-wrapper{
    width: 100%; height: 270px; display: flex;
    #sales-view-chart{
        width: 70% !important; height: 100% !important; 
    }
    .sales-view-list{
        flex: 1; width: 100%; height: 100%; overflow: hidden;
        .sales-view-title{
            margin-top: 20px; font-size: 12px; color: #666; font-weight: 500; margin-bottom: 10px;
        }
        .list-item{
            display: flex; margin-top: 0px;align-items: center; font-size: 12px;
            height: 20px; padding: 6px 20px 6px 0;
        }
        .list-item-no{
            display: flex; align-items: center; justify-content: center;
            width: 20px; height: 20px; color: #333;
            &.top-no{
                background: #000; border-radius: 50%;
                color: #fff; font-weight: 500;
            }
        }
        .list-item-name{
            margin-left: 10px; color: #333;
        }
        .list-item-money{
            flex: 1; text-align: right;
        }
    }
}

</style>