<template>
    <div id="home">
        <el-container class="container">
            <el-aside>
                <Aside></Aside>
            </el-aside>
            <el-container>
                <!-- :userData="userData" -->
                <el-header height="80px">
                    <Header></Header>
                </el-header>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import Aside from "@/components/common/Aside.vue";
import Header from "@/components/common/Header.vue";
//获取状态机中 user 的辅助函数
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapState, mapMutations } = createNamespacedHelpers("user");
export default {
    mounted() {
        if (JSON.stringify(this.userDetails).length == 2) {
            this.getUserInfoAsync();
        }
    },
    components: {
        Aside,
        Header,
    },
    computed: {
      ...mapState({
        userDetails:"details"
      })
    },
    methods: {
        ...mapActions(["getUserInfoAsync"]),
    },
};
</script>

<style lang="scss" scoped>
#home {
    width: 100vw;
    height: 100vh;
    .container {
        width: 100%;
        height: 100%;

        .el-header {
            background-color: #F2F7F8;
            text-align: center;
        }
        .el-aside {
            background-color: #FFFFFF;
            text-align: center;
            box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
        }

        .el-main {
            background-color: #F2F7F8;
            text-align: center;
        }
    }
}
</style>
