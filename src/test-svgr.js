const path = require('path');
const fs = require('fs');
const svgr = require('@svgr/core').default;
const testSVG = require('./test-svg');

const filePath = path.join(__dirname, 'test.svg');
const fileData = fs.readFileSync(filePath, 'utf8');

svgr(fileData, {
  svgProps: {
    'data-test': 123,
  },
  svgoConfig: {
    plugins: [
      { removeXMLNS: false },
      { removeViewBox: true },
      { mergePaths: true },
    ],
  },
}, { componentName: 'VisaSVG' }).then(testSVG);

