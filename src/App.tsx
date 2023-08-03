import { defineComponent } from 'vue';

export default defineComponent({
  setup(props, context) {
    return () => (
      <>
        <router-view></router-view>
      </>
    );
  }
});