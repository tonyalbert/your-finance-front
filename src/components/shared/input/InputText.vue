<template>
    <!-- <input 
        type="text" 
        :placeholder="placeholder"
        v-model="modelValue"
        class="
        w-full 
        border
        border-light-primary 
        py-2 
        px-6 
        rounded-lg 
        focus:border-2
        focus:outline-none 
        focus:border-primary
        "> -->

        <div>
            <label>{{ label }}</label>
            <input 
            class="w-full border border-light-primary py-2 px-6 rounded-lg focus:border-2 focus:outline-none focus:border-primary
            "
            v-model="inputValue"
            :placeholder="placeholder" 
            @input="updateInput" />
        </div>

</template>

<script>
export default {
  props: {
    label: String,
    initialValue: String,
    placeholder: String,
  },
  data() {
    return {
      inputValue: this.initialValue,
    };
  },
  methods: {
    updateInput() {
      this.$emit("input", this.inputValue);
    },
  },
};
</script>

