import { ButtonHTMLAttributes } from 'react'
import { DocumentEditor } from '../../DocumentEditor'

import { Descendant } from 'slate'
import { defaultDocumentFeatures } from '../../DocumentEditor/defaultComponentFeatures'

export const AT_BUTTON_VARIANT = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  TERTIARY: 'tertiary',
} as const
export type AtButtonVariant = keyof typeof AT_BUTTON_VARIANT

export const variantClasses: Record<AtButtonVariant, string> = {
  PRIMARY: 'bg-green-200 hover:bg-green-400 active:bg-green-500',
  SECONDARY: 'bg-blue-200 hover:bg-blue-400 active:bg-blue-500',
  TERTIARY: 'bg-red-200 hover:bg-red-400 active:bg-red-500',
}

export interface AtButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  variant?: AtButtonVariant
  isDisabled?: boolean
}

const initialValue: Descendant[] = [
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

export const AtButton = ({ label, variant = 'PRIMARY', isDisabled = false, onClick }: AtButtonProps) => {
  return (
    <DocumentEditor
      value={initialValue}
      onChange={(val) => {}}
      documentFeatures={defaultDocumentFeatures}
      componentBlocks={{}}
    />
  )
}
