<template>
  <div>
    <h1 class="mt-12">Simple Personality Test</h1>
    <p class="mt-4">
      This is a simple personality test that will help you determine your
      personality type. Please answer the questions below.
    </p>
    <p>
      <strong>
        <em>
          <small>
            <a
              class="text-decoration-none"
              href="https://en.wikipedia.org/wiki/Personality_type"
              target="_blank"
            >
              What is a personality type?
            </a>
          </small>
        </em>
      </strong>
    </p>
    <v-btn class="mt-4" color="primary" to="/test"
      >Start personality test</v-btn
    >
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>
