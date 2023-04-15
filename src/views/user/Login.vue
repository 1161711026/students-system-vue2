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
                
                <el-form-item label="确认密码" prop="checkPass">
                    <el-input
                        type="password"
                        v-model="userDate.checkPass"
                        autocomplete="off"
                    ></el-input>
                </el-form-item>

                <el-form-item class="btns">
                    <el-button
                        type="primary"
                        class="loginIn"
                        @click="submitForm('userDate')"
                        >立即注册</el-button
                    >
                    <el-button type="info" @click="loginIn" class="reset">已有账号？去登录</el-button>
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
            console.log(value);
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
        var validatePass2 = (rule, value, callback) => {
           if(value == ''){
            callback("请填写密码");
           }
           else if(value != this.userDate.password){
            callback("密码不一致");
           }
           callback();
        };
        return {
            title: this.$route.meta.title,
            userDate: {
                username: "ad123456",
                password: "ad123456",
                checkPass: "ad123456",
            },
            rules: {
                pass: [{ validator: validatePass, trigger: "blur" }],
                checkPass: [{ validator: validatePass2, trigger: "blur" }],
                name: [{ validator: validateName, trigger: "blur" }],
            },
        };
    },
    methods: {
        open() {
            this.$message({
                message: "恭喜你，注册成功",
                type: "success",
            });
        },
        error(msg) {
            this.$message.error(msg);
        },
        submitForm(userDate) {
            this.$refs[userDate].validate((valid) => {
                if (valid) {
                    this.login();
                } else {
                    console.log("请检查账号或密码");
                    return false;
                }
            });
        },
        resetForm(userDate) {
            this.$refs[userDate].resetFields();
        },
        loginIn(){
            this.$router.push('/user/register');
        },
        async login(){
            const data = await this.$api.user.register(this.userDate);
            if(data.code){
                this.open();
                this.$router.push("/user/register");
            }else{
                this.error(data.message);
            }
        }
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