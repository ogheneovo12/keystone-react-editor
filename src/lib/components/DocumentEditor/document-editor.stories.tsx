import React from 'react'
import { DocumentEditor, DocumentEditorProps } from '.'
import { Meta } from '@storybook/react'
import { StoryFn } from '@storybook/react'
import { defaultDocumentFeatures, initialEditorValue } from '../DocumentEditor/defaultComponentFeatures'
import { Descendant } from 'slate'
import { component } from '../component-blocks'
import { useState, useEffect } from 'react'

function ImageUploadPreview({ defaultValue }: { defaultValue: any }) {
  const [image, setImage] = useState(null) // To store the uploaded image
  const [preview, setPreview] = useState<string | null>(defaultValue?.image?.url ?? '') // To store the URL of the preview image

  // Update the preview when image state changes
  useEffect(() => {
    if (image) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreview(reader.result as string)
      }
      reader.readAsDataURL(image)
    } else {
      setPreview(null)
    }
  }, [image])

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file && file.type.substr(0, 5) === 'image') {
      setImage(file)
    } else {
      setImage(null)
    }
  }

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {preview ? (
        <img src={preview} alt="Image preview" style={{ width: '100%', height: 'auto' }} />
      ) : (
        <p>No image selected</p>
      )}
    </div>
  )
}

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
