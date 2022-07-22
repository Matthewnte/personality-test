<template>
  <v-btn
    :color="color"
    v-on="$listeners"
    :block="block"
    :to="to"
    :disabled="disabled"
    depressed
  >
    {{ text }}
  </v-btn>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: {
      type: String,
    },
    block: {
      type: Boolean,
      default: () => false,
    },
    disabled: {
      type: Boolean,
      default: () => false,
    },
    color: {
      type: String,
      default: () => 'primary',
    },
    to: {
      type: String,
      default: () => '',
    },
  },
  data: () => ({}),
};
</script>
