export default {
  description: {
    Badge: 'Badges are used to contain and reinforce contextual messaging through the UI to a user.'
  },
  propTypes: {
    Badge: {
      withHeading: 'Whether we should show some additional messaging within the Badge.',
      heading: 'If withHeading is true, this is the content of the additional messaging that will be shown.',
      children: 'The main content of the Badge.'
    }
  }
}
