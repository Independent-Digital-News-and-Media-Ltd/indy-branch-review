export const iasFormatter = (adSlot) => {
  const sizes = adSlot.getSizes().map((size) => {
    if (size.getWidth && size.getHeight) {
      return [size.getWidth(), size.getHeight()];
    } else {
      return [1, 1];
    }
  });

  return {
    adSlotId: adSlot.getSlotElementId(),
    // size: can either be a single size (for example, [728, 90])
    // or an array of sizes (for example, [[728, 90], [970, 90]])
    size: sizes,
    adUnitPath: adSlot.getAdUnitPath(),
  };
};

export const formatIASSizes = (sizes) =>
  sizes
    ?.split(',')
    .map((size) => size.replace(/x/, '.'))
    .join();
