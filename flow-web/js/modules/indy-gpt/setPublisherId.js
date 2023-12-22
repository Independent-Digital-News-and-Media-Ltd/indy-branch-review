export default (permutiveId) => {
  if (permutiveId) {
    // parsing value as ppid only accepts alphanumeric characters
    window.googletag
      .pubads()
      .setPublisherProvidedId(permutiveId.replace(/-/g, ''));
  }
};
