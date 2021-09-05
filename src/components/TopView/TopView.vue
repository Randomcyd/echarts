<template>
    <div class="topView">
        <el-row :gutter="20">
            <el-col :span="6">
                <el-card shadow="hover">
                    <total-sales></total-sales>
                </el-card>
            </el-col>
            <el-col :span="6">
                <el-card shadow="hover">
                    <total-orders></total-orders>
                </el-card>
            </el-col>
            <el-col :span="6">
                <el-card shadow="hover">
                    <today-users></today-users>
                </el-card>
            </el-col>
            <el-col :span="6">
                <el-card shadow="hover">
                    <total-users></total-users>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import TotalSales from '../TotalSales.vue'
import TotalOrders from '../TotalOrders.vue'
import TotalUsers from '../TotalUsers.vue'
import TodayUsers from '../TodayUsers.vue'
export default {
    components:{
        TotalSales,TotalOrders,TotalUsers,TodayUsers
    }
}
</script>

<style lang="scss" scoped>

</style>