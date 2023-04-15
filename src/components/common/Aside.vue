<template>
    <div id="aside">
        <div class="titleBox">
            <i :class="icon" class="iconfont"></i>
            <h1 class="title t1">
                {{ title }}
            </h1>
            <span class="viceTitle t3">
                {{ viceTitle }}
            </span>
        </div>
        <el-menu
            default-active="1"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
        >
            <el-menu-item index="1">
                <i class="el-icon-menu"></i>
                <span slot="title">主页</span>
            </el-menu-item>

            <el-submenu index="3">
                <template slot="title">
                    <i class="el-icon-s-custom"></i>
                    <span>学生管理</span>
                </template>

                <el-menu-item index="1-1" @click="toStudentsList">
                    学生列表
                </el-menu-item>
                <el-menu-item index="1-2" @click="toAddStudents">
                    新增学生
                </el-menu-item>
            </el-submenu>
           
        </el-menu>
    </div>
</template>

<script>
export default {
    data() {
        return {
            icon: "el-icon-brush",
            title: "Plan A设计",
            viceTitle: "后台管理",
        };
    },
    methods: {
        handleOpen(key, keyPath) {
            // console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            // console.log(key, keyPath);
        },
        toStudentsList() {
            this.$router.push("/home/studentsList");
        },
        toAddStudents() {
            this.$router.push("/home/addstudents");
        },
    
    },
};
</script>

<style lang="scss" scoped>
#aside {
    .titleBox {
        width: 100%;
        height: 160px;
        display: flex;
        justify-content: center;
        align-items: center;
        .iconfont {
            font-size: 35px;
            background-color: #ecfafb;
            color: #49c8d7;
            padding: 5px;
            border-radius: 10px;
        }
        .title::v-deep {
            margin-left: 10px;
        }
        .viceTitle {
            margin-left: 10px;
            border-left: 1.5px solid;
            padding-left: 10px;
            font-size: 16px;
        }
    }
    .el-menu {
        text-align: center;
        li {
            text-align: left;
            a {
                color: inherit;
                text-decoration: none;
            }
            i:nth-child(1) {
                font-size: 26px;
            }
            span {
                margin-left: 8px;
                font-size: 16px;
            }
        }
    }
}
</style>