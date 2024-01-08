const waitForSpLoad = (interval = 50) => {
  return new Promise((resolve) => {
    const hasSpLoaded = () => {
      if (typeof window._sp_.executeMessaging === 'function') {
        resolve();
      } else {
        setTimeout(hasSpLoaded, interval);
      }
    };

    hasSpLoaded();
  });
}

waitForSpLoad().then(() => {
  window._sp_.executeMessaging();
});
