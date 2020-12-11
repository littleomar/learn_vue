import {
  defineComponent,
  reactive,
  watch,
  markRaw,
  toRaw,
  watchEffect
} from "vue";
import { effect, ref } from "@vue/reactivity";

export default defineComponent({
  name: "App",

  setup() {
    const rawState = {
      count: 0
    }

    const reactiveState = reactive(rawState);

    const refState = ref(rawState)


    return () => {
      debugger
      console.log(reactiveState.count)

      return <div>{refState.value.count}</div>;
    };
  }
});
