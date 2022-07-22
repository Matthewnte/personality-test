<template>
  <div class="test">
    <div v-if="loading" class="loading">Loading...</div>

    <div v-if="error" class="error">{{ error }}</div>

    <QuestionCard v-if="show" />
  </div>
</template>

<script>
import QuestionCard from '@/components/QuestionCard.vue';

export default {
  name: 'Test',
  components: {
    QuestionCard,
  },
  data() {
    return {
      loading: false,
      error: null,
      show: null,
    };
  },
  methods: {
    async fetchQuestions() {
      this.loading = true;
      this.error = null;
      try {
        const response = await fetch('http://localhost:3000/api/v1/questions');
        const data = await response.json();
        this.$store.commit('setQuestions', data.questions);
        this.show = true;
      } catch (error) {
        this.error = error;
      }
      this.loading = false;
    },
  },
  mounted() {
    this.fetchQuestions();
  },
};
</script>
