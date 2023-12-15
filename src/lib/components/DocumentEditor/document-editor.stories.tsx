import React from 'react'
import { DocumentEditor, DocumentEditorProps } from '.'
import { Meta } from '@storybook/react'
import { StoryFn } from '@storybook/react'
import { defaultDocumentFeatures, initialEditorValue } from '../DocumentEditor/defaultComponentFeatures'
import { Descendant } from 'slate'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof DocumentEditor> = {
  title: 'DocumentEditor',
  component: DocumentEditor,
  args: {
    value: initialEditorValue,
    onChange: (val: Descendant[]) => console.log(val),
    componentBlocks: {},
    documentFeatures: defaultDocumentFeatures,
  },
}

export default meta

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof DocumentEditor> = (args: DocumentEditorProps) => <DocumentEditor {...args} />

export const MainEditor = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
MainEditor.args = {
  value: initialEditorValue,
  onChange: (val: Descendant[]) => console.log(val),
  componentBlocks: {},
  documentFeatures: defaultDocumentFeatures,
}
