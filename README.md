<div align="center">

# React Code Editor

⚡ by [OPEN TECH FOUNDATION](https://open-tech-foundation.pages.dev/)

<!-- ![Screenshot](./Screenshot.png) -->

</div>

> A simple code editor for React JS, useful for form `code` input.

## Features

- Simple Editor

- Syntax Highlighting (Based on [highlight.js](https://highlightjs.org/))

- Multiple languages & themes are supported.

## Installation

Using npm

```sh
npm install @opentf/react-code-editor
```

Using Yarn

```sh
yarn add @opentf/react-code-editor
```

Using pnpm

```sh
pnpm add @opentf/react-code-editor
```

## Usage

```ts
import { Editor } from '@opentf/react-code-editor';

export default function App() {
  const code = `export default function App() {
      return <h1>Hello world</h1>
    }
  `;

  return <Editor value={code} onChange={handleChange} />;
}
```

## License

Copyright (c) [Thanga Ganapathy](https://github.com/Thanga-Ganapathy) ([MIT License](./LICENSE)).
