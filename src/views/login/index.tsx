import { defineComponent, ref } from 'vue';
import { useRouter } from "vue-router";
import s from "./index.module.scss";
import { onMounted, onUnmounted } from "vue";

export default defineComponent({
  setup(props, { slots }) {
    const router = useRouter();
    const form = ref({
      username: 'admin',
      password: 'admin'
    });
    const rules = ref({
      username: [
        { required: true, message: '请输入账号', trigger: 'blur' }
      ],
      password: [
        { required: true, message: '请输入密码', trigger: 'blur' }
      ]
    });
    const rulesRef = ref(null);
    const isLoading = ref(false);

    const onLogin = () => {
      if (isLoading.value) return;
      const r = rulesRef.value as any;
      r.validate((valid: boolean) => {
        if (valid) {
          isLoading.value = true;
          router.push('/index');
          // adminLogin(form.value).then((res: any) => {
          //   try {
          //     isLoading.value = false;
          //     setToken(res.data);
          //     getUserIsAdminFun()
          //   } catch (error) {
          //     console.log("error...", error);
          //     isLoading.value = false;
          //   }
          // }).catch(err => {
          //   isLoading.value = false;
          // });
        }
      });
    };

    //按回车键登录
    const keyDown = (e: any) => {
      if (e.keyCode == 13 || e.keyCode == 100) {
        onLogin();
      }
    };

    onMounted(() => {
      //绑定监听事件
      window.addEventListener('keydown', keyDown);
    });

    onUnmounted(() => {
      //销毁事件
      window.removeEventListener('keydown', keyDown, false);
    });

    return () => (
      <div class={s.login}>
        <el-col xs={22} sm={16} md={12} lg={8} xl={6}>
          <el-card>
            <h3>登录界面</h3>
            <el-form model={form} rules={rules} ref={rulesRef} label-width="80px">
              <el-form-item label="账号" prop="username">
                <el-input v-model={form.value.username} placeholder="请输入账号" />
              </el-form-item>
              <el-form-item label="密码" prop="password">
                <el-input type="password" v-model={form.value.password} placeholder="请输入密码" />
              </el-form-item>
              <el-form-item>
                <el-button type="primary" onClick={onLogin} keyDown={keyDown} loading={isLoading.value}>登录</el-button>
              </el-form-item>
            </el-form>
          </el-card>
        </el-col>
      </div>
    );
  }
});