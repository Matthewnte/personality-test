<template>
  <div>
    <div class="text-center mb-6">
      <h1 class="subtitle-1">Your Result</h1>
      <h2>{{ result.title }}</h2>
    </div>
    <p class="mb-8">{{ result.text }}</p>
    <app-button
      :block="$vuetify.breakpoint.smAndDown"
      to="/"
      text="Retake test"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import AppButton from '@/components/Button.vue';
import results from '../../result.json';

export default {
  name: 'Result',
  components: {
    AppButton,
  },
  data: () => ({
    result: '',
  }),
  computed: {
    ...mapState({
      personalityType: (state) => state.personalityType,
    }),
  },
  methods: {
    getResultData() {
      this.result = results[this.personalityType];
    },
  },
  mounted() {
    this.getResultData();
  },
};
</script>
