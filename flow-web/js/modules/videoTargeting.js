const setVideoCookieDeprecationLabel = async () => {
  if ('cookieDeprecationLabel' in navigator) {
    const label = await navigator.cookieDeprecationLabel.getValue();

    return label ? label : '';
  }

  return '';
};

export default setVideoCookieDeprecationLabel;
