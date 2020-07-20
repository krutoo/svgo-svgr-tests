const fs = require('fs');
const path = require('path');
const SVGO = require('svgo');
const testSVG = require('./test-svg');

const svgo = new SVGO({
  plugins: [
    { removeXMLNS: false },
    { removeViewBox: true },
    { mergePaths: true },
  ],
});

const filePath = path.resolve(__dirname, 'test.svg');
const fileData = fs.readFileSync(filePath, 'utf8');

svgo.optimize(fileData, { path: filePath }).then(({ data }) => {
  testSVG(data);
});
