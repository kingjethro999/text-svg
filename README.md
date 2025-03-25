# Text to SVG Path Generator

Created by King Jethro

This project converts text into SVG path data using OpenType.js. It generates the path data that can be used within an SVG element to render text as vector graphics.

## Features

- Converts text to SVG path data
- Supports custom fonts (currently using Ubuntu Bold)
- Configurable font size and line height
- Generates clean path data without unnecessary SVG wrapper

## Prerequisites

- Node.js (v12 or higher)
- npm (Node Package Manager)

## Installation

1. Clone this repository
2. Install dependencies:
```bash
npm install
```

## Usage

1. Place your font file in the `fonts` directory
2. Modify the text content in `generate-svg.js`:
```javascript
["Your Text Here", "Second Line"].forEach((text, i) => {
  const path = font.getPath(text, 0, i * lineHeight, fontSize);
  paths.push(path.toSVG());
});
```

3. Run the script:
```bash
node generate-svg.js
```

4. The script will generate `output.svg` containing the path data

## Using the Generated Path Data

The script generates only the path data. To use it in a production environment, wrap the path data in an SVG element:

```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 [width] [height]">
  <!-- Paste the generated path data here -->
  <path d="..." />
</svg>
```

### Example Usage:

```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 100">
  <!-- The path data from output.svg goes here -->
  <path d="M10 20 L20 30..." />
</svg>
```

## Customization

You can customize the following parameters in `generate-svg.js`:

- `fontSize`: Size of the text (default: 27)
- `lineHeight`: Space between lines (default: 30)
- Font file: Change the font by modifying the path in `opentype.load()`

## Notes

- This tool generates only the path data, not a complete SVG file
- The viewBox dimensions in the final SVG should be adjusted based on your text content
- Make sure to include the appropriate font license when using custom fonts

## License

MIT License - feel free to use this project as you wish. 