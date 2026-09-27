import fs from 'node:fs';

const orig = fs.readFileSync('src/assets/folhas/4.svg', 'utf8');
const inverted = orig.replace(
  '<svg width="100%" height="100%" viewBox="0 0 2481 1749" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:affinity="https://www.affinity.studio/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">',
  '<svg width="100%" height="100%" viewBox="0 0 2481 1749" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:affinity="https://www.affinity.studio/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">\n    <g transform="translate(2481, 0) scale(-1, 1)">'
).replace('</svg>', '    </g>\n</svg>');

fs.writeFileSync('C:/Users/lucas/.gemini/antigravity/brain/d9a66429-b1e8-4a50-a1dc-1962efe32b6b/scratch/test_4_inverted.svg', inverted);
console.log('test_4_inverted.svg written');
