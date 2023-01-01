// Copyright 2023 Babel, Inc.

// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

const {
  TsVisitor,
  plugin,
} = require('@graphql-codegen/typescript');

const FieldDefinition = TsVisitor.prototype.FieldDefinition;

Object.assign(exports, {
  TsVisitor,
  plugin: (...args) => {
    TsVisitor.prototype.FieldDefinition = function (...args) {
      /** @type {import('graphql').FieldDefinitionNode} */
      const node = args[0];
      if (node.directives?.some(d => d.name === "customResolver")) {
        return "";
      }
      return FieldDefinition.apply(this, args);
    };
    const ret = plugin(...args);
    TsVisitor.prototype.FieldDefinition = FieldDefinition;
    return ret;
  },
});