<template>
    <div class="bottomView">
        <div class="view">
            <el-card shadow="hover">
                <template v-slot:header>
                    <div class="title-wrapper">
                        <div class="title">关键词搜索</div>
                    </div>
                </template>
                <template>
                    <div class="chart-wrapper">
                        <div class="chart-inner">
                            <div class="chart">
                                <div class="chart-title">搜索用户数</div>
                                <div class="chart-data">93,634</div>
                                <div id="user-chart"></div>
                            </div>
                            <div class="chart">
                                <div class="chart-title">搜索量</div>
                                <div class="chart-data">198,782</div>
                                <div id="total-chart"></div>
                            </div>
                        </div>
                        <div class="table-wrapper">
                            <el-table :data="tableData">
                                <el-table-column prop="rank" label="排名" width="180"></el-table-column>
                                <el-table-column prop="keyword" label="关键词" width="180"></el-table-column>
                                <el-table-column prop="count" label="总搜索量" ></el-table-column>
                                <el-table-column prop="user" label="搜索用户数" ></el-table-column>
                            </el-table>
                            <el-pagination
                                layout="prev, pager, next"
                                :total="100"
                                :page-size="4"
                                background
                                @current-change="onPageChange"
                            ></el-pagination>
                        </div>
                    </div>
                </template>
            </el-card>
        </div>
        <div class="view">
            <el-card shadow="hover">
                <template v-slot:header>
                    <div class="title-wrapper">
                        <div class="title">分类销售排行</div>
                        <div class="radio-wrapper">
                            <el-radio-group v-model="radioSelect" size="small">
                                <el-radio-button label="品类"></el-radio-button>
                                <el-radio-button label="商品"></el-radio-button>
                            </el-radio-group>
                        </div>
                    </div>
                </template>
                <template>
                    <div class="chart-wrapper">
                        <div id="rank-chart"></div>
                    </div>
                </template>
            </el-card>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            tableData:[
                { id:1, rank:1, keyword:'北京', count:100, user:90, range:'90%'},
                { id:2, rank:2, keyword:'北京', count:100, user:90, range:'90%'},
                { id:3, rank:3, keyword:'北京', count:100, user:90, range:'90%'},
                { id:4, rank:4, keyword:'北京', count:100, user:90, range:'90%'},
            ],
            radioSelect:'品类',
        }
    },
    mounted(){
        const chartDom = document.getElementById('user-chart');
        const chart = this.$echarts.init(chartDom);
        const chartDom1 = document.getElementById('total-chart');
        const chart1 = this.$echarts.init(chartDom1);
        const chartDom2 = document.getElementById('rank-chart');
        const chart2 = this.$echarts.init(chartDom2);
        chart.setOption({
            xAxis:{
                type:'category',
                boundaryGap:false,
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
                show:false,
                splitLine:{
                    lineStyle:{
                        type:'dotted',
                        color:"#eee"
                    }
                }
            },
            series:[{
                type:'line',
                barWidth:'35%',
                data:[200,350,300,350,300,250,200,250,300,350],
                areaStyle:{
                    color:'rgba(95,187,255,.5)'
                },
                smooth:true,
                color:['rgb(95,187,255)'],
                itemStyle:{
                    opacity:0
                }
            }],
            grid:{
                left:0,
                right:0,
                top:0,
                bottom:0
            }
        })
        chart1.setOption({
            xAxis:{
                type:'category',
                boundaryGap:false,
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
                show:false,
                splitLine:{
                    lineStyle:{
                        type:'dotted',
                        color:"#eee"
                    }
                }
            },
            series:[{
                type:'line',
                barWidth:'35%',
                data:[200,350,300,350,300,250,200,250,300,350],
                areaStyle:{
                    color:'rgba(95,187,255,.5)'
                },
                smooth:true,
                color:['rgb(95,187,255)'],
                itemStyle:{
                    opacity:0
                }
            }],
            grid:{
                left:0,
                right:0,
                top:0,
                bottom:0
            }
        })
        chart2.setOption({
            title:[{
                text:'品类分布',
                textStyle:{
                    fontSize:14,
                    color:"#666"
                },
                left:20,
                top:20
            },{
                text:'累计订单量',
                subtext:'320',
                textStyle:{
                    fontSize:14,
                    color:"#999"
                },
                subtextStyle:{
                    fontSize:28,
                    color:'#333'
                },
                x:'34.5%',
                y:'42.5%',
                textAlign:'center'
            }],
            series:[{
                type:'pie',
                name:'品类分布',
                data:[
                    {
                        legendname:'粉面粥店',
                        value:67,
                        percent:'15.40%',
                        itemStyle:{
                            color:'#8d7fec'
                        },
                        name:'粉面粥店 | 15.40%'
                    },{
                        legendname:'简餐便当',
                        value:97,
                        percent:'22.30%',
                        itemStyle:{
                            color:'#5085f2'
                        },
                        name:'简餐便当 | 22.30%'
                    },{
                        legendname:'汉堡披萨',
                        value:92,
                        percent:'21.15%',
                        itemStyle:{
                            color:'#e7e702'
                        },
                        name:'汉堡披萨 | 21.15%'
                    },
                ],
                label:{
                    normal:{
                        show:true,
                        formatter:function(params){
                            return params.data.legendname 
                        }
                    }
                },
                center:['35%','50%'],
                radius:['45%','60%'],
                labelLine:{
                    normal:{
                        length:5,
                        length2:3,
                        smooth:true
                    }
                },
                clockwise:true,
                itemStyle:{
                    borderWidth:4,
                    borderColor:'#fff'
                }
            }],
            legend:{
                type:'scroll',
                orient:'vertical',
                height:250,
                left:'66%',
                top:'middle',
                textStyle:{
                    color:'#999'
                }
            },
            tooltip:{
                trigger:'item',
                formatter:function(params){
                    const str = params.seriesName + '<br />'
                    + params.marker + params.data.legendname + '<br />'
                    + '数量 ' + params.data.value + '<br />'
                    + '占比 ' + params.data.percent
                    return str
                },
                textStyle:{
                    fontSize:12
                }
            }
        })
    },
    methods:{
        onPageChange(page){
            console.log(page);
        },
    }
}
</script>

<style lang="scss" scoped>
    .bottomView{
         width: 100%; display: flex; margin-top: 20px;
         .view{
             flex: 1; box-sizing: border-box; width: 50%;
             &:first-child{
                 padding-right: 10px;
             }
         }
    }
    .title-wrapper{
        display: flex; align-items: center;
        height: 60px; box-sizing: border-box;
        border-bottom: 1px solid #eee; font-size: 14px;
        padding-left: 20px; font-weight: 500;
        .radio-wrapper{
            flex: 1; display: flex; justify-content: flex-end; padding-right: 20px;
        }
    }
    .chart-wrapper{
        display: flex; flex-direction: column; height: 452px;
        .chart-inner{
            display: flex; padding: 0 10px; margin-top: 20px;
            .chart{
                flex: 1; padding: 0 10px;
                .chart-title{
                    color: #999; font-size: 14px; margin-bottom: 6px;
                }
                .chart-data{
                    font-size: 22px; color: #333; font-weight: 500; letter-spacing: 2px;
                }
                #user-chart{
                    height: 50px;
                }
                #total-chart{
                    height: 50px;
                }
            }
        }
    }
    .table-wrapper{
        flex:1;
        margin-top: 20px;
        padding: 0 20px 0 20px;
        .el-pagination{
            float: right; margin-top: 15px;
        }
    }
    #rank-chart{
        height: 100%; width: 100%;
    }
</style>