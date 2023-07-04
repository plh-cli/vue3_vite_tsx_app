import { defineComponent } from 'vue';
import useIndexStore from "@/store/index";
import { storeToRefs } from "pinia";

export default defineComponent({
  setup(props, context) {
    const indexStore = useIndexStore();
    const { counter } = storeToRefs(indexStore);
    const add = () => {
      indexStore.increment();
    };
    return () => (
      <>
        <p>这是首页</p>
        <el-button onClick={add}>点击</el-button>
        <div>展示：{counter.value}</div>
      </>
    );
  }
});