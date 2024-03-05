import { v4 as uuid } from 'uuid';

import {
  CLASS_COLLAPSED,
  CLASS_JS_COLLAPSE,
  CLASS_JS_INNER,
  CLASS_JS_BTN_CONTINUE,
} from '@app/constants/classNames';

/**
 * @todo add unit tests: https://app.clickup.com/t/4521779/ECOM-735
 */
class Collapse {
  constructor(el, config, collapseId) {
    this.el = el;
    this.initialLinesToShow = config.initialLinesToShow;
    this.collapseId = collapseId || uuid();

    this.domCache = {
      btn: this.el.querySelector(`.${CLASS_JS_BTN_CONTINUE}`),
      collapse: this.el.querySelector(`.${CLASS_JS_COLLAPSE}`),
      inner: this.el.querySelector(`.${CLASS_JS_INNER}`),
    };

    this.events = {
      collapse: this.handleCollapse.bind(this),
    };

    this.handleKeydownBound = this.handleKeydown.bind(this);
  }

  handleKeydown(event) {
    // Check if the key pressed is either Space or Enter
    if (event.key === ' ' || event.key === 'Enter') {
      // Prevent the default behavior to avoid unwanted scrolling on Space key
      event.preventDefault();

      // Toggle the collapse on Space or Enter key
      this.handleCollapse();
    }
  }

  setupListeners() {
    this.domCache.btn.addEventListener('click', this.events.collapse);
    this.domCache.btn.addEventListener('keydown', this.handleKeydownBound);
  }

  removeListeners() {
    this.domCache.btn.removeEventListener('click', this.events.collapse);
    this.domCache.btn.removeEventListener('keydown', this.handleKeydownBound);
  }

  handleCollapse() {
    const isCollapsed =
      this.domCache.collapse.classList.toggle(CLASS_COLLAPSED);
    this.domCache.collapse.setAttribute(
      'aria-expanded',
      isCollapsed ? 'false' : 'true',
    );
  }

  // Check if the content should be collapsed based on the number of lines
  get shouldCollapse() {
    const totalLines = this.countLines(this.domCache.inner);
    return totalLines > this.initialLinesToShow;
  }

  // Get the computed line height of an element
  getLineHeight(element) {
    if (!element) {
      return 0;
    }

    return parseInt(getComputedStyle(element).lineHeight);
  }

  // Count the number of lines in the content
  countLines(element) {
    if (!element) {
      return 0;
    }

    const paragraphs = element.querySelectorAll('p');

    const totalLines = [...paragraphs].reduce((acc, p) => {
      const lineHeight = this.getLineHeight(p);
      const height = p.clientHeight;
      const lines = Math.round(height / lineHeight);
      return acc + lines;
    }, 0);

    return totalLines;
  }

  // Calculate the number of lines in the first paragraph
  calculateFirstParagraphLines() {
    const firstParagraph = this.domCache.inner?.querySelector('p');
    return firstParagraph
      ? Math.round(
          firstParagraph.clientHeight / this.getLineHeight(firstParagraph),
        )
      : 0;
  }

  // Calculate the height when the content is collapsed
  get collapsedHeight() {
    const firstParagraph = this.domCache.inner?.querySelector('p');
    if (!firstParagraph) {
      return 0;
    }
    const lineHeight = this.getLineHeight(firstParagraph);
    const totalLines = this.countLines(this.domCache.inner);
    const linesToShow = Math.min(totalLines, this.initialLinesToShow);
    const firstParagraphTotalLines = this.calculateFirstParagraphLines();

    return firstParagraphTotalLines < this.initialLinesToShow
      ? linesToShow * lineHeight + 16 // 16 is the margin-bottom between paragraphs set in the ProductBody of product article
      : linesToShow * lineHeight;
  }

  // Get the total height of the uncollapsed content
  get uncollapsedHeight() {
    return this.domCache.inner.offsetHeight;
  }

  init() {
    if (!this.shouldCollapse) {
      return;
    }

    const vars = [
      `--uncollapsed-height: ${this.uncollapsedHeight}px`,
      `--collapsed-height: ${this.collapsedHeight}px`,
    ];

    this.domCache.collapse.id = this.collapseId;
    this.domCache.collapse.classList.add(CLASS_COLLAPSED);
    this.domCache.collapse.setAttribute('style', vars.join(';'));
    this.domCache.collapse.setAttribute('aria-expanded', 'false');
    this.domCache.btn.setAttribute('aria-controls', this.collapseId);

    this.setupListeners();

    return this;
  }

  cleanup() {
    this.removeListeners();
  }
}

export default Collapse;
