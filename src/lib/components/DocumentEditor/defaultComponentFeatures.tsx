import { type DocumentFeatures } from '../views'

export const defaultDocumentFeatures: DocumentFeatures = {
  formatting: {
    alignment: { center: true, end: true },
    blockTypes: { blockquote: true, code: true },
    headingLevels: [1, 2, 3, 4, 5, 6],
    inlineMarks: {
      bold: true,
      code: true,
      italic: true,
      keyboard: true,
      strikethrough: true,
      subscript: true,
      superscript: true,
      underline: true,
    },
    listTypes: { ordered: true, unordered: true },
    softBreaks: true,
  },
  dividers: true,
  links: true,
  layouts: [[1], [1, 1], [1, 1, 1], [1, 2, 1]],
}
