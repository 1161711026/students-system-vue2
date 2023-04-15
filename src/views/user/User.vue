<template>
    <div id="user">
        <el-row>
            <el-col :span="13">
                <el-image
                    :src="src"
                    fit="cover"
                ></el-image>
                <div class="grid-content bg-purple"></div
            ></el-col>
            <el-col class="register" :span="11">
                <router-view></router-view>
                <div class="grid-content bg-purple-light"></div
            ></el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    data() {
        return {
            src: require("../../assets/images/user-colLeft.jpg"),
        };
    },
};
</script>

<style lang="scss" scoped>
#user {
    width: 100%;
    height: 100%;
    background: url(@/assets/images/userBg.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    .el-row {
        position: fixed;
        width: 70%;
        min-width: 768px;
        height: 70%;
        min-height: 492px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        overflow: hidden;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
        border-radius: 10px;
        .register {
            background-color: #fff;
        }
        .el-col {
            height: 100%;
           
            .el-image {
                width: 100%;
              height: 100%;
            }
        }
    }
}
</style>