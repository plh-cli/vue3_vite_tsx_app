import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  setup(props, context) {
    const router = useRouter();
    return () => (
      <>
        <nav style={{
          width: '130px',
          height: '100vh',
          position: 'fixed',
          left: 0, top: 0,
          "border-right": '1px solid #ccc',
          textIndent:'20px'
        }}>
          <p class="currentBtn" onClick={() => router.push('/index')}><a>首页</a></p>
          <p class="currentBtn" onClick={() => router.push('/test')}><a>测试页</a></p>
        </nav >
        <div style={{marginLeft:'130px',padding:'20px'}}>
          <router-view></router-view>
        </div>
      </>
    );
  }
});