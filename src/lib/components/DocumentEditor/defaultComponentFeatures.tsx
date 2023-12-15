import { Descendant } from 'slate'
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

export const initialEditorValue: Descendant[] = [
  {
    type: 'heading',
    children: [
      {
        text: 'This is the document editor.',
      },
    ],
    level: 1,
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'Here’s just a few things you can do with it:',
      },
    ],
  },
  {
    type: 'layout',
    layout: [1, 1],
    children: [
      {
        type: 'layout-area',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                text: 'Add layout blocks',
              },
            ],
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'and all the usual ',
              },
              {
                text: 'formatting',
                code: true,
              },
              {
                text: ' options',
              },
            ],
          },
        ],
      },
    ],
  },
]
