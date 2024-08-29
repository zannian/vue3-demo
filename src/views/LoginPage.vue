<template>
  <div class="login-wrapper">
    <el-card style="max-width: 700px" class="login-card">
      <template #header>
        <div class="card-header">
          <div class="login-title">账号登录</div>
        </div>
      </template>

      <el-form
        ref="ruleFormRef"
        style="max-width: 700px"
        :model="ruleForm"
        status-icon
        :rules="rules"
        label-width="auto"
        class="login-form"
      >
        <el-form-item class="form-item" required label="账号" prop="account">
          <el-input v-model="ruleForm.account" type="text" autocomplete="off" />
        </el-form-item>
        <el-form-item class="form-item" required label="密码" prop="pwd">
          <el-input v-model="ruleForm.pwd" type="password" autocomplete="off" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="login-button" @click="submitForm(ruleFormRef)">
            登录
          </el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { ElMessage, FormInstance, FormRules } from 'element-plus'
import { useRouter } from 'vue-router'

const router = useRouter()

const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive({
  account: '',
  pwd: ''
})

const rules = reactive<FormRules<typeof ruleForm>>({
  account: [{ type: 'email', trigger: 'blur' }],
  pwd: [{ type: 'string', trigger: 'blur' }]
})

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      if (ruleForm.account === '123321@123.com' && ruleForm.pwd === '123123123') {
        router.push('/home')
      } else {
        ElMessage.warning('账号格式不正确')
      }
    } else {
      console.log('error submit!')
      ElMessage.warning('账号格式不正确')
    }
  })
}
</script>
<style scoped>
.login-wrapper {
  background: url('../images/bd.jpg');
  display: flex;
  justify-content: center;
  padding-top: 40vh;
  padding-left: 50vw;
  align-items: start;
  width: 100%;
  background-size: cover;
}

.login-title {
  font-size: 22px;
  font-weight: 700;
  color: #333;
}

.login-card {
  text-align: center;
  border-radius: 20px;
  padding: 0 30px;
}

.login-button {
  width: 270px;
  height: 40px;
  margin: 0 auto;
}

.login-form {
  padding-top: 20px;
}

.login-form .form-item {
  margin-bottom: 30px;
}
</style>
