import { loadJS } from '../modules/util';

export default async () => {
  const { manifest } = window.JSGlobals;
  const reactArchipelagoScript = manifest['react-archipelago.js'];

  const hasReact = !!document.querySelector(
    `script[src="${reactArchipelagoScript}"]`,
  );

  // load react-archipelago script if it has not already been included on the page
  if (!hasReact) {
    // these have to be loaded sequentially otherwise they get their knickers in a twist
    await loadJS(reactArchipelagoScript);
  }
};
