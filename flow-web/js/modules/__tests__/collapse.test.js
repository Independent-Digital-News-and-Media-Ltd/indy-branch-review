/**
 * @jest-environment jsdom
 */

import { CLASS_COLLAPSED } from '@app/constants/classNames';

import Collapse from '@app/public/js/modules/collapse';

jest.mock('uuid', () => ({
  v4: jest.fn(() => 'mocked-uuid'),
}));

describe('Collapse', () => {
  let collapse;
  let el;

  beforeAll(() => {
    el = document.createElement('div');
    document.body.appendChild(el);
  });

  afterAll(() => {
    document.body.removeChild(el);
  });

  const mockLineHeight = 27;

  const createInnerElement = () => {
    const innerElement = document.createElement('div');
    el.appendChild(innerElement);
    collapse.domCache.inner = innerElement;
    return innerElement;
  };

  beforeEach(() => {
    const config = { initialLinesToShow: 4 };
    collapse = new Collapse(el, config);
  });

  it('should set collapse ID with a default UUID if not provided', () => {
    expect(collapse.collapseId).toBe('mocked-uuid');
  });

  it('should set collapse ID with the provided ID', () => {
    const customId = 'custom-id';
    const collapseWithId = new Collapse(
      el,
      { initialLinesToShow: 2 },
      customId,
    );
    expect(collapseWithId.collapseId).toBe(customId);
  });

  it('handleCollapse()', () => {
    const collapseElement = document.createElement('div');
    el.appendChild(collapseElement);
    collapse.domCache.collapse = collapseElement;

    // Initially, the element should not have CLASS_COLLAPSED
    expect(collapseElement.classList.contains(CLASS_COLLAPSED)).toBe(false);

    collapse.handleCollapse();

    // After calling handleCollapse, the element should have CLASS_COLLAPSED and aria-expanded false
    expect(collapseElement.classList.contains(CLASS_COLLAPSED)).toBe(true);
    expect(collapseElement.getAttribute('aria-expanded')).toBe('false');

    // Calling handleCollapse again should remove CLASS_COLLAPSED and set aria-expanded to true
    collapse.handleCollapse();
    expect(collapseElement.classList.contains(CLASS_COLLAPSED)).toBe(false);
    expect(collapseElement.getAttribute('aria-expanded')).toBe('true');
  });

  describe('shouldCollapse()', () => {
    it('when totalLines is greater than initialLinesToShow', () => {
      const countLinesMock = jest.spyOn(collapse, 'countLines');
      const totalLinesGreaterThanInitial = 5;
      countLinesMock.mockReturnValue(totalLinesGreaterThanInitial);

      expect(collapse.shouldCollapse).toBe(true);

      countLinesMock.mockRestore();
    });

    it('when totalLines is equal to initialLinesToShow', () => {
      const countLinesMock = jest.spyOn(collapse, 'countLines');
      const totalLinesEqualToInitial = 4;
      countLinesMock.mockReturnValue(totalLinesEqualToInitial);

      expect(collapse.shouldCollapse).toBe(false);

      countLinesMock.mockRestore();
    });

    it('when totalLines is less than initialLinesToShow', () => {
      const countLinesMock = jest.spyOn(collapse, 'countLines');
      const totalLinesLessThanInitial = 3;
      countLinesMock.mockReturnValue(totalLinesLessThanInitial);

      expect(collapse.shouldCollapse).toBe(false);

      countLinesMock.mockRestore();
    });
  });

  it('countLines()', () => {
    const mockClientHeight = 550;
    const innerElement = createInnerElement();

    const getLineHeightMock = jest.spyOn(collapse, 'getLineHeight');
    getLineHeightMock.mockReturnValue(mockLineHeight);

    // Initially, the content should not be collapsed
    expect(collapse.countLines(innerElement)).toBe(0);

    // Adds 5 paragraphs to the inner element
    for (let i = 1; i <= 5; i++) {
      const paragraph = document.createElement('p');
      Object.defineProperty(paragraph, 'clientHeight', {
        value: mockClientHeight,
      });
      innerElement.appendChild(paragraph);
    }

    // 5 paragraphs * ~(550 / 27) = 100 lines
    expect(collapse.countLines(innerElement)).toBe(100);
  });

  it('calculateFirstParagraphLines()', () => {
    const mockClientHeight = 109;
    const innerElement = createInnerElement();

    const getLineHeightMock = jest.spyOn(collapse, 'getLineHeight');
    getLineHeightMock.mockReturnValue(mockLineHeight);

    const paragraph = document.createElement('p');
    innerElement.appendChild(paragraph);

    Object.defineProperty(paragraph, 'clientHeight', {
      value: mockClientHeight,
    });

    expect(collapse.calculateFirstParagraphLines()).toBe(4);
  });

  it('collapsedHeight()', () => {
    const expectedInitialLines = 4;
    const innerElement = createInnerElement();

    const getLineHeightMock = jest.spyOn(collapse, 'getLineHeight');
    getLineHeightMock.mockReturnValue(mockLineHeight);

    // Initially, the content should not be collapsed
    expect(collapse.collapsedHeight).toBe(0);

    // Add more paragraphs
    for (let i = 1; i < 15; i++) {
      const paragraph = document.createElement('p');
      const mockHeight = 100 + i * 10; // Varying heights
      innerElement.appendChild(paragraph);
      Object.defineProperty(paragraph, 'clientHeight', { value: mockHeight });
    }

    expect(collapse.collapsedHeight).toBe(
      expectedInitialLines * mockLineHeight,
    );
  });
});
