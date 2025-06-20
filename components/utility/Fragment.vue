<script lang="ts">
import { defineComponent, h } from 'vue';

export default defineComponent({
  name: 'Fragment',
  setup(_, { slots }) {
    return () => (slots.default ? slots.default() : []);
  },
});
</script> 