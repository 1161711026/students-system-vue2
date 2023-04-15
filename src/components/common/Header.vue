<template>
    <div id="header">
        <el-row :gutter="20">
            <el-col :span="6"
                ><div class="grid-content bg-purple"></div
            ></el-col>
            <el-col :span="6"
                ><div class="grid-content bg-purple"></div
            ></el-col>
            <el-col :span="6"
                ><div class="grid-content bg-purple"></div
            ></el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple">
                    <el-avatar
                        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                    >
                   
                </el-avatar>
                <span class="userName t3">{{ userDate.username }} <i class="el-icon-caret-bottom"></i> </span>
                </div></el-col
            >
        </el-row>
    </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapState, mapMutations } = createNamespacedHelpers("user");
export default {
    created() {},
    data() {
        return {
            userDate: {
                username: "用户名",
            },
        };
    },
    computed: {
        ...mapState(["details"]),
    },
    watch: {
        details() {
            this.userDate = { ...this.details };
       
        },
    },
};
</script>

<style lang="scss" scoped>
#header {
    width: 100%;
    height: 100%;
    .el-row {
        height: 100%;
        .el-col {
            height: 100%;
            border-radius: 4px;
            .bg-purple {
                position: relative;
               
                .el-avatar--circle {
                    height: 100%;
                    width: auto;
                    object-fit: contain;
                    
                }
                .userName {
                    position: absolute;
                    margin-left: 10px;
                    top: 50%;
                    transform: translateY(-50%);
                }
            }
            .grid-content {
                box-sizing: border-box;
                border-radius: 4px;
                min-height: 36px;
                padding: 10px 0;
                height: 100%;
            }
        }
        .el-col:nth-child(2),
        .el-col:nth-child(3) {
            .bg-purple {
                background-color: transparent;
            }
        }
    }
}
</style>