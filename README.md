# html-reusable

[![npm version](https://badge.fury.io/js/html-reusable.svg)](https://www.npmjs.com/package/html-reusable)
[![GitHub issues](https://img.shields.io/github/issues/dcoder-x/htmlReusable)](https://github.com/dcoder-x/htmlReusable/issues)
[![GitHub license](https://img.shields.io/github/license/dcoder-x/htmlReusable)](https://github.com/dcoder-x/htmlReusable/blob/main/LICENSE)

A simple library to create reusable components in HTML.

## Installation

Install the library using npm:

```bash
npm install html-reusable
```
Make sure to install the required dependencies as well:

```bash
npm install node-html-transformers puppeteer
```

## Usage

```javascript
const reuse = require('html-reusable');

// Example usage
const MyComponent = reuse('my-component', {
    htmlFilePath: 'path/to/my-component.html',
    encoding: 'utf-8',
    content: 'Hello, this is my component!',
    // Optional parameters: isShadow, isBody
});
```

## API
```javascript
reuse(componentName, options, isShadow, isBody)
```

Create and register a reusable web component.

- componentName: String, the name for the custom element.
- options: Object, containing HTML file details {htmlFilePath, encoding, content}.
- htmlFilePath: String, the path to the HTML file.
- encoding: String, the encoding of the HTML file.
- content: String, the content of the HTML file.
- isShadow (optional): Boolean, indicates whether to use shadow DOM (default: false).
- isBody (optional): Boolean, indicates whether to append to the document body (default: true).
- Returns the created reusable class.

## License
- This project is licensed under the ISC License.

## Contributing
- Feel free to open issues or submit pull requests for improvements.

## Bugs/Issues
- If you encounter any issues or have suggestions, please create an issue.

## Author
- Ayomikun Faluyi

## Changelog
- See the CHANGELOG.md file for details.

## Acknowledgments
- Special thanks to contributors and open-source projects used in this library.
