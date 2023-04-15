<template>
    <div id="studentsList">
        <el-table :data="studentsData.rows" style="width: 100%" :header-cell-style="{border: 'none'}">
            <el-table-column prop="_id" label="ID" width="180">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="180">
            </el-table-column>
            <el-table-column prop="age" label="年龄"> </el-table-column>
            <el-table-column prop="gender" label="性别"> </el-table-column>
            <el-table-column prop="age" label="年龄"> </el-table-column>
            <el-table-column label="专业">
                <template slot-scope="scope">
                    {{
                        scope.row.subjectsId
                            ? scope.row.subjectsId.name
                            : "未定义"
                    }}
                </template>
            </el-table-column>
            <el-table-column label="班级">
                <template slot-scope="scope">
                    {{
                        scope.row.classesId
                            ? scope.row.classesId.name
                            : "未定义"
                    }}
                </template>
            </el-table-column>
            <el-table-column label="头像">
                <template slot-scope="scope">
                    <div class="demo-basic--circle">
                        <div class="block">
                            <el-avatar
                                :size="50"
                                :src="scope.row.imagePath"
                            ></el-avatar>
                        </div>
                        <div
                            class="block"
                            v-for="size in undefined"
                            :key="size"
                        >
                            <el-avatar
                                :size="size"
                                :src="circleUrl"
                            ></el-avatar>
                        </div>
                    </div>
                </template>
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button
                        type="primary"
                        icon="el-icon-edit"
                        circle
                        @click="editStudent(scope.row._id)"
                    ></el-button>
                    <el-button
                        type="danger"
                        icon="el-icon-delete"
                        circle
                        @click="deleteStudent(scope.row._id)"
                    ></el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="pgaes"
            layout="total, sizes, prev, pager, next, jumper"
            :total="studentsData.total"
        >
        </el-pagination>
    </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapState, mapMutations } =
    createNamespacedHelpers("student");
export default {
    created() {
        if (JSON.stringify(this.students).length == 2) {
            this.getStudentsAsync();
        } else {
            this.studentsData = this.students;
        }
        this.pgaes = [this.pageDate.pageSize,this.pageDate.pageSize*2]
    },
    data() {
        return {
            studentsData: {},
            currentPage: 1,
            pgaes:[6,12],
        };
    },
    computed: {
        ...mapState(["students", "pageDate"]),
    },
    methods: {
        ...mapActions(["getStudentsAsync", "deleteStudentAsync"]),
        ...mapMutations(["SETPAGESIZE"]),
        handleSizeChange(val) {
            this.SETPAGESIZE(val);
            this.getStudentsAsync();
        },
        handleCurrentChange(val) {
            this.getStudentsAsync(val);
        },
        async deleteStudent(_id) {
            const data = await this.deleteStudentAsync(_id);
            if (data) {
                this.$message({
                    message: "删除成功",
                    type: "success",
                });
            } else {
                this.$message.error("删除失败，请重试");
            }
        },
        editStudent(_id) {
            this.$router.push(`/home/editStudent/${_id}`);
        },
    },
    watch: {
        students() {
            this.studentsData = this.students;
            
            // console.log(this.studentsData);
        },
       
    },
};
</script>

<style lang="scss" scoped>
#studentsList {
    box-sizing: border-box;
    width: 100%;
    min-height: 100%;
    background-color: #fff;
    border-radius: 40px;
    overflow-y: auto;
    padding: 30px;

    .el-pagination {
        margin-top: 20px;
    }
    ::v-deep .el-table__header-wrapper{
       
        background-color: #F2F7F8;
        border-radius: 30px;
        padding: 10px 0;
        overflow: hidden;
    }
    
    .el-table ::v-deep tr {
        background-color: transparent;
        border-radius: 10px;
        overflow: hidden;
      
    }
    .el-table ::v-deep th.el-table__cell {
        background-color: transparent;
        
    }
}
</style>