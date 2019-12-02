import React from 'react';

import './App.css';

import Text from './components/atoms/Text/Text'

function App() {
  return (
    <div>
      <Text element='h1'>This is an &lt;H1&gt;</Text>
      <Text element='h2'>This is an &lt;H2&gt;</Text>
      <Text element='h3'>This is an &lt;H3&gt;</Text>
      <Text element='h4'>This is an &lt;H4&gt;</Text>
      <Text>This is a &lt;p&gt;</Text>
      <Text size={3}>This is a paragraph element styled to look like an &lt;H3&gt;.</Text>
      <Text className='red' size={4}>This is a paragraph element styled to look like an &lt;H4&gt; with a class of "red".</Text>
      <Text><small>This is small text, like you might use for legalese.</small></Text>
      <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus sint quas, hic voluptatem accusantium corrupti nobis eaque repellat facilis rerum quasi, doloribus neque ea, ipsum facere aut culpa nam. Provident?</Text>
    </div>
  );
}

export default App;
