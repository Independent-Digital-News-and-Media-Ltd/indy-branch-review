export default () => {
  const pageURL = new URL(document.location.href);
  return ['callback', 'code', 'state'].every((paramName) =>
    pageURL.searchParams.has(paramName),
  );
};
