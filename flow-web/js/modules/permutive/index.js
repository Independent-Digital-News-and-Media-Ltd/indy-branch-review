/* globals permutive */
export { initPermutive, permutiveReady } from './initPermutive';

export const initPermutiveReadyWithTimeout = () => {
  permutive.readyWithTimeout = async (callback, type, timeout) => {
    await Promise.race([
      new Promise((resolve) => setTimeout(resolve, timeout)),
      new Promise((resolve) => permutive.ready(resolve, type)),
    ]);

    callback();
  };
};
