const submissionComponent = {
  template:
  `<div style="display: flex, width: 100%">
    <figure class="media-left">
      <img
        class="image is-128x128"
        :scr="submission.submissionImage"
        :alt="submission.alt"
      />
    </figure>
    <div class="media-content">

      <div class="content">
        <p>
          <strong>
            <span class="has-text-info">{{ submission.title }}</span>
            <span class="tag is-small">#{{ submission.id }}</span>
          </strong>
          <br />
          {{ submission.description }}
          <br />
        </p>
      </div>
    </div>
    <div class="media-right">
      <span class="icon is-small" @click="upvote(submission.id)">
        <i class="fa fa-chevron-up"></i>
        <strong class="has-text-info">{{ submission.votes }}</strong>
      </span>
    </div>
  </div>`,
  props: ['submission', 'submissions'],
  method: {
    upvote(submissionId) {
      const submission = this.submissions.find(
        submission => submission.id === submissionId
      );
      submission.votes++;
    }
  },
};

var app = new Vue({
  el: '#app',
  data: {
    submissions: Seed.submissions
  },
  computed: {
    sortedSubmissions () {
      return this.submissions.sort((a, b) => {
        return b.votes - a.votes
      });
    }
  },
  components: {
    'submission-component': submissionComponent
  }
});