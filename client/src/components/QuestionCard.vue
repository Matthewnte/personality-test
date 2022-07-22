<template>
  <v-card flat class="mx-auto my-12" max-width="374">
    <template slot="progress">
      <v-progress-linear
        color="primary"
        height="4"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-card-title
      >Question {{ currentQuestion + 1 }}/{{ questions.length }}</v-card-title
    >

    <v-card-text>
      {{ selection.question }}
      <v-radio-group v-model="answer">
        <v-radio
          v-for="(option, i) in selection.options"
          :key="i"
          class="mt-2"
          :label="option.text"
          :value="option.value"
        ></v-radio>
      </v-radio-group>
    </v-card-text>

    <v-card-actions>
      <app-button
        v-if="!isFirstQustion"
        @click="prevQuestion"
        text="Previous Question"
      />
      <app-button
        :disabled="!hasSelected"
        @click="nextQuestion"
        :text="isLastQuestion ? 'Submit Questions' : 'Next Question'"
      />
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapState } from 'vuex';
import AppButton from '@/components/Button.vue';

export default {
  name: 'Test',
  components: {
    AppButton,
  },
  data: () => ({
    loading: false,
    currentQuestion: 0,
    selection: {},
    answer: '',
    selectedAnswers: [],
  }),
  computed: {
    isFirstQustion() {
      return this.currentQuestion === 0;
    },
    isLastQuestion() {
      return this.currentQuestion === this.questions.length - 1;
    },
    hasSelected() {
      return this.answer;
    },
    ...mapState({
      questions: (state) => state.questions,
    }),
  },
  methods: {
    addAnswerToList() {
      if (this.hasSelected) {
        this.selection.options.forEach((option) => {
          if (option.value === this.answer) this.selectedAnswers.push(option);
        });
      }
    },
    nextQuestion() {
      this.loading = true;
      if (this.currentQuestion < this.questions.length - 1) {
        this.addAnswerToList();
        this.selection = this.questions[this.currentQuestion];
        this.currentQuestion += 1;
      } else {
        this.submitQuestions();
      }

      this.answer = '';
      this.loading = false;
    },
    prevQuestion() {
      this.loading = true;
      this.currentQuestion -= 1;
      this.selection = this.questions[this.currentQuestion - 1];
      this.selectedAnswers.pop();
      this.loading = false;
    },
    submitQuestions() {
      this.addAnswerToList();

      let introvert = 0;
      let extrovert = 0;

      this.selectedAnswers.forEach((option) => {
        if (option.personalityType.toLowerCase() === 'introvert') {
          introvert += 1;
        }
        if (option.personalityType.toLowerCase() === 'extrovert') {
          extrovert += 1;
        }
      });

      if (introvert > extrovert) {
        this.$store.commit('setPersonality', 'introvert');
      } else {
        this.$store.commit('setPersonality', 'extrovert');
      }
      this.$router.push('/result');
    },
  },
  mounted() {
    [this.selection] = this.questions;
  },
};
</script>
