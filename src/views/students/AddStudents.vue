<template>
  <div id="editStudent">
      <el-row :gutter="20">
          <el-col :span="12"
              ><div class="grid-content bg-purple">
                  <el-form ref="form" :model="form" label-width="80px">
                      <el-form-item label="姓名">
                          <el-input v-model="form.name"></el-input>
                      </el-form-item>
                      <el-form-item label="年龄">
                          <el-input v-model="form.age"></el-input>
                      </el-form-item>
                      <el-form-item label="性别" class="radio">
                          <el-radio-group v-model="form.gender">
                              <el-radio label="男"></el-radio>
                              <el-radio label="女"></el-radio>
                          </el-radio-group>
                      </el-form-item>
                      <el-form-item label="专业">
                          <el-select
                              v-model="form.subjectsId"
                              placeholder="请选择活动区域"
                          >
                              <el-option
                                  label="请选择专业"
                                  :value="undefined"
                                  disabled
                              ></el-option>

                              <el-option
                                  v-for="item in subjectsDate.rows"
                                  :key="item._id"
                                  :label="item.name"
                                  :value="item._id"
                              ></el-option>
                          </el-select>
                      </el-form-item>
                      <el-form-item label="班级">
                          <el-select
                              v-model="form.classesId"
                              placeholder="请选择活动区域"
                          >
                              <el-option
                                  label="请选择班级"
                                  :value="undefined"
                              ></el-option>
                              <el-option
                                  v-for="item in classesDate.rows"
                                  :key="item._id"
                                  :label="item.name"
                                  :value="item._id"
                              ></el-option>
                          </el-select>
                      </el-form-item>
                      <el-form-item>
                          <el-button type="primary" @click="onSubmit"
                              >修改学生</el-button
                          >
                          <el-button>重置</el-button>
                      </el-form-item>
                  </el-form>
              </div></el-col
          >
          <el-col :span="12">
              <div class="grid-content bg-purple">
                  <el-upload
                      class="avatar-uploader"
                      action="http://47.98.128.191:3000/images/uploadImages"
                      :show-file-list="false"
                      :on-success="handleAvatarSuccess"
                  >
                      <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                  </el-upload></div
          ></el-col>
      </el-row>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("student");
const { mapActions: subjectActions, mapState: subjectState } =
  createNamespacedHelpers("subject");
const { mapActions: classesActions, mapState: classesState } =
  createNamespacedHelpers("classes");
export default {
  async created() {
      this.getSubjectsAsync();
  },
  data() {
      return {   
          imageUrl: "",
          form: {},
          viceForm: {},
          subjectsDate: {},
          classesDate: {},
      };
  },
  methods: {
      ...mapActions(['addSudentAsync']),
      ...subjectActions(["getSubjectsAsync"]),
      ...classesActions(["getClassBySubjectIdAsync"]),
      handleAvatarSuccess(res,file) {
        this.imageUrl = res.data[0];
      },
      async onSubmit() {
          const data = await this.addSudentAsync({...this.form,imagePath:this.imageUrl});
          if(data){
              this.$message({
                  message: "增新成功",
                  type: "success",
              });
              this.$router.push('/home/studentsList');
          }
          else{
              this.$message.error('增加失败,请重试');
          }
      },
  },
  computed: {
      ...subjectState(["subjects"]),
      ...classesState(["classes"]),
  },
  watch: {
      subjects() {
          this.subjectsDate = this.subjects;
         
      },
      "form.subjectsId"(val) {
          this.getClassBySubjectIdAsync(val);
      },
      classes() {
          this.classesDate = this.classes;
      },
      form(){
          if(this.form.imagePath){
              this.imageUrl = this.form.imagePath; 
          }
      }
  },
};
</script>

<style lang="scss" scoped>
#editStudent {
  box-sizing: border-box;
  width: 100%;
  min-width: 768px;
  min-height: 100%;
  background-color: #fff;
  border-radius: 40px;
  overflow-y: auto;
  padding: 30px;
  .avatar-uploader ::v-deep .el-upload {
      border: 2px dashed #d9d9d9;
      border-radius: 6px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
  }
  .avatar-uploader ::v-deep .el-upload:hover {
      border-color: #409eff;
  }
  .avatar-uploader-icon {
      font-size: 28px;
      color: #8c939d;
      width: 300px;
      height: 300px;
      line-height: 300px;
      text-align: center;
 
  }
  .avatar{
      width: 300px;
      height: 300px;
      display: block;
  }
}
.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.el-select {
  width: 100%;
}
.radio {
  text-align: left;
}
</style>