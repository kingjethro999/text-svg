const fs = require('fs');
const opentype = require('opentype.js');

opentype.load('fonts/Ubuntu-Bold.ttf', (err, font) => {
  if (err) {
    console.error('Font could not be loaded:', err);
    return;
  }
  
  const fontSize = 27;
  const lineHeight = 30;
  const paths = [];
  // Generate paths for each line
  ["King Jethro", " "].forEach((text, i) => {
    const path = font.getPath(text, 0, i * lineHeight, fontSize);
    paths.push(path.toSVG());
  });
  
  // Create a complete SVG document
  const svgContent = `
      ${paths.join('')}
  `;
  
  fs.writeFileSync('output.svg', svgContent);
  console.log('SVG saved to output.svg');
});