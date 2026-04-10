import assert from "node:assert/strict";

export function validateSVG(svgString) {
  assert(svgString.match(/\xmlns\=/g), 'should contains "xmlns" attribute');

  assert(
    svgString.match(/\<path/g).length === 2,
    "should contains 2 <path/> (not 6)",
  );

  assert(!svgString.match(/viewBox\=/g), 'should remove "viewBox" attribute');
}
