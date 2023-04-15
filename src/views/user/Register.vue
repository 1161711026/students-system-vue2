<template>
    <div id="register">
        <header>
            <h1>
                {{ title }}
            </h1>
        </header>

        <main>
            <el-form
                :model="userDate"
                status-icon
                :rules="rules"
                ref="userDate"
                label-width="100px"
                class="demo-ruleForm"
            >
                <el-form-item label="账号" prop="username">
                    <el-input
                        type="text"
                        v-model="userDate.username"
                        autocomplete="off"
                    ></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input
                        type="password"
                        v-model="userDate.password"
                        autocomplete="off"
                    ></el-input>
                </el-form-item>

                <el-form-item class="btns">
                    <el-button
                        type="primary"
                        class="loginIn"
                        @click="submitForm('userDate')"
                        >登录</el-button
                    >
                    <el-button type="info" @click="loginUp" class="reset"
                        >没有账号？去注册</el-button
                    >
                    <el-button class="reset" @click="resetForm('userDate')"
                        >重置</el-button
                    >
                </el-form-item>
            </el-form>
        </main>
    </div>
</template>

<script>
export default {
    data() {
        var validateName = (rule, value, callback) => {
            if (value != "") {
                callback();
            } else {
                callback("请填写账号");
            }
        };
        var validatePass = (rule, value, callback) => {
            if (value == "") {
                callback("请填写密码");
            }
            callback();
        };
        return {
            title: this.$route.meta.title,
            userDate: {
                username: "ad123456",
                password: "ad123456",
            },
            rules: {
                pass: [{ validator: validatePass, trigger: "blur" }],
                // checkPass: [{ validator: validatePass2, trigger: "blur" }],
                name: [{ validator: validateName, trigger: "blur" }],
            },
        };
    },
    methods: {
        open() {
            this.$message({
                message: "恭喜你，登录成功",
                type: "success",
            });
        },
        error(msg) {
            this.$message.error(msg);
        },
        async register(userDate) {
            const data = await this.$api.user.login(userDate);
          
            if (data.code) {
                localStorage.token = data.token;
                this.open();

                this.$router.push("/home");
            } else {
                this.error(data.message);
            }
        },
        submitForm(userDate) {
            this.$refs[userDate].validate((valid) => {
                if (valid) {
                    // 当点击提交按钮 且所有的验证都通过了执行方法
                    this.register(this.userDate);
                } else {
                    console.log("请检查账号或密码");
                    return false;
                }
            });
        },
        resetForm(userDate) {
            this.$refs[userDate].resetFields();
        },
        loginUp() {
            this.$router.push("/user/login");
        },
        //提交登录
    },
};
</script>

<style lang="scss" scoped>
#register {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    header {
        margin: 40px 0;
        h1 {
            text-align: center;
            color: #333;
        }
    }
    main {
        position: relative;
        width: 90%;
        height: 70%;
        .el-form {
            width: 100%;
            position: absolute;
            top: 40%;
            left: 50%;
            transform: translate(-50%, -50%);
            .btns {
                margin-top: 40px;
            }
        }
        .loginIn,
        .reset {
            display: block;
            width: 98%;
            margin: 15px auto;
        }
    }
}
</style>