const testSVG = svgString => {
  console.log(svgString);

  console.assert(svgString.match(/\xmlns\=/g), 'should contains "xmlns" attribute');
  console.assert(svgString.match(/\<path/g).length === 2, 'should contains 2 <path/> (not 6)');
  console.assert(!svgString.match(/viewBox\=/g), 'should remove "viewBox" attribute');
};

module.exports = testSVG;
