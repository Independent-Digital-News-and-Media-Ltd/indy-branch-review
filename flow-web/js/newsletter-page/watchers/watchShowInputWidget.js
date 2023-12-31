import { INPUT_WIDGET_ID } from '../constants';
import { animateIn, animateOut } from '../utils/animation';

export const watchShowInputWidget = (state) => {
  state.watch(
    (data) => data.showInputWidget,
    (showInputWidget, previousValue) => {
      const inputWidgetEl = document.getElementById(INPUT_WIDGET_ID);

      if (showInputWidget) {
        animateIn(inputWidgetEl);
      } else {
        // don't run first time
        previousValue && animateOut(inputWidgetEl);
      }
    },
  );
};
