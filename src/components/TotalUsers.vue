<template>
    <common-card
        title="累计用户数"
        value="1,087,503"
    >
        <template>
            <div id="total-users-chart" :style="{width:'100%',height:'100%'}"> 
                
            </div>
        </template>
        <template v-slot:footer>
            <div class="total-users-footer">
                <span>日同比</span>
                <span class="emphasis"> 8.73%</span>
                <div class="increase"></div>
                <span class="month">月同比</span>
                <span class="emphasis"> 35.91%</span>
                <div class="decrease"></div>
            </div>
        </template>
    </common-card>
</template>

<script>
import commonCardMixin from '../mixins/commonCardMixin'
export default {
    mixins:[commonCardMixin],
    mounted(){
        const chartDom = document.getElementById('total-users-chart');
        const chart = this.$echarts.init(chartDom);
        chart.setOption({
            xAxis:{
                type:'value',
                
                boundaryGap:false
            },
            yAxis:{
                show:false,
                type:'category',
            },
            series:[{
                type:'bar',
                data:['200'],
                stack:'量',
                barWidth:10,
                itemStyle:{
                    color:'#45c946'
                }
            },{
                type:'bar',
                data:['50'],
                stack:'量',
                itemStyle:{
                    color:'#eee'
                }
            },{
                type:'custom',
                stack:'量',
                data:['200'],
                renderItem:(params,api)=>{
                    const value = api.value(0);
                    const endPoint = api.coord([value,0]);
                    return {
                        type:'group',
                        position:endPoint,
                        children:[{
                            type:'path',
                            shape:{
                            d:'M511.999488 819.413462 72.8374 204.586538 951.1626 204.586538Z',
                            x:-6,
                            y:-20,
                            width:12,
                            height:10,
                            layout:'cover'
                          },
                        style:{
                            fill:"#45c946"
                          }
                        },{
                            type:'path',
                            shape:{
                            d:'M951.1626 819.412438 72.8374 819.412438 511.999488 204.586538Z',
                            x:-6,
                            y:10,
                            width:12,
                            height:10,
                            layout:'cover'
                          },
                        style:{
                            fill:"#45c946"
                          }
                        }]     
                    }
                }
            }],
            grid:{
                left:0,
                right:0,
                top:0,
                bottom:0
            }
        })
    }
}
</script>

<style lang="scss" scoped>
    .total-users-footer{
        display: flex; align-items: center;
        .month{
            margin-left: 10px;
        }
    }
</style>

