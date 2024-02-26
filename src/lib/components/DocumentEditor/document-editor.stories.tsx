import { Meta, StoryFn } from '@storybook/react'
import React from 'react'
import { Descendant } from 'slate'
import { DocumentEditor, DocumentEditorProps } from '.'
import { defaultDocumentFeatures, initialEditorValue } from '../DocumentEditor/defaultComponentFeatures'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof DocumentEditor> = {
  title: 'DocumentEditor',
  component: DocumentEditor,
  args: {
    initialValue: initialEditorValue,
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
  initialValue: initialEditorValue,
  onChange: (val: Descendant[]) => console.log(val),
  componentBlocks: {},
  documentFeatures: defaultDocumentFeatures,
}
