# ⚛️⚡ Keystone React Editor

## Brief Background
👋 I recently embarked on a journey to integrate the document editor from [Keystone](https://github.com/keystonejs/keystone)  into a client-only project. However, I hit a roadblock as the editor was tightly coupled with the Keystone context and carried significant server-side dependencies.

After a thorough investigation into the [source code](https://github.com/keystonejs/keystone/blob/main/packages/fields-document/src/DocumentEditor/index.tsx), I identified that the culprit was the relationship feature (tags and mentions), which heavily relied on server-side functionality. Determined to make the document editor more versatile, I decided to take matters into my own hands.

To make the document editor more adaptable to client-only projects, I meticulously extracted its source code from the Keystone repository. I stripped off every trace and dependencies of the relationship feature (with hope to add a client compactible alternative implementation later).

## GETTING STARTED
You can view a live storybook demo [here](https://keystone-react-editor.netlify.app/?path=/story/documenteditor--main-editor)

### Installation
yarn

`yarn add keystone-react-editor`

npm

`npm install keystone-react-editor`

```
import {
  DocumentEditor,
  defaultDocumentFeatures,
  initialEditorValue,
} from "keystone-react-editor";

function App(){

return (
           <DocumentEditor
                values={initialEditorValue}
                componentBlocks={{}}
                documentFeatures={defaultDocumentFeatures}
              />

)

}

```
`documentFeatures` is basically the layout specification, should match what was specified in the cms document field config

## Contribution

1. Clone your repo
2. Install dependencies with `pnpm i` (first run `corepack enable` to enable pnpm)
3. Run `pnpm prepare` command to setup [Husky](https://typicode.github.io/husky) pre-commit hooks.

## Main Scripts

Always prepending pnpm:

- `dev`: Bootstrap the Storybook preview with Hot Reload.
- `build`: Builds the static storybook project.
- `build:lib`: Builds the component library into the **dist** folder.
- `lint:fix`: Applies linting based on the rules defined in **.eslintrc.js**.
- `format:prettier`: Formats files using the prettier rules defined in **.prettierrc**.
- `test`: Runs testing using watch mode.
- `test:cov`: Runs testing displaying a coverage report.

## NOTE
ALL TEST ARE CURRENTLY EXCLUDED FROM TYPESCRIPT, STILL TRYING TO GET THEM WORKING

## License

[MIT](LICENSE)
