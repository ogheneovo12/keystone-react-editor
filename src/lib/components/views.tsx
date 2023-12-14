/** @jsxRuntime classic */
/** @jsx jsx */

import { Node } from 'slate'

const serialize = (nodes: Node[]) => {
  return nodes.map((n: Node) => Node.string(n)).join('\n')
}

export const allowedExportsOnCustomViews = ['componentBlocks']

export type DocumentFeatures = {
  formatting: {
    inlineMarks: {
      bold: boolean
      italic: boolean
      underline: boolean
      strikethrough: boolean
      code: boolean
      superscript: boolean
      subscript: boolean
      keyboard: boolean
    }
    listTypes: {
      ordered: boolean
      unordered: boolean
    }
    alignment: {
      center: boolean
      end: boolean
    }
    headingLevels: (1 | 2 | 3 | 4 | 5 | 6)[]
    blockTypes: {
      blockquote: boolean
      code: boolean
    }
    softBreaks: boolean
  }
  links: boolean
  dividers: boolean
  layouts: [number, ...number[]][]
}
