import ContentEditable from 'react-contenteditable';
import React from 'react';

function Block(props) {

  const blockRef = React.useRef(props.html);

  const handleChange = (event) => {
    blockRef.current = event.target.value;
  }

  const handleBlur = () => {
    console.log(blockRef.current);
  };

  return (
    <ContentEditable
      html={blockRef.current}
      onChange={handleChange}
      onBlur={handleBlur}
      tagName={props.tagName}
    />
  );
}

function App() {

  // page is a state of blocks
  // can CRUD on this state (so this is needed by API too)
  // blocks have two things in state: tagName, html
  // can CRUD on this state too
  // order of blocks will matter too
  // but it will matter to the page, not to the block itself
  // order of block = rank
  // onBlur in block can indicate save
  // a page in storage would be (pageId, name)
  // a block in storage would be (blockId, pageId, tag, html, rank, href, src, href)

  return (
    <div className="App">
      <p contentEditable="true">some text</p>
      <Block html="hey" tagName="p"/>
    </div>
  );
}

export default App;
