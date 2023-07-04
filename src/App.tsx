import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  setup(props, context) {
    const router = useRouter();
    return () => (
      <>
        <nav>
          <el-button type="primary" onClick={()=>router.push('/')}>首页</el-button>
          <el-button type="primary" onClick={()=>router.push('/test')}>测试页</el-button>
        </nav >
        <router-view></router-view>
      </>
    );
  }
});