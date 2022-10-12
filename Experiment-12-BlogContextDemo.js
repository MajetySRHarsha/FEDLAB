import React, {useContext} from "react";
import {BlogContext} from './App';

function BlogContextDemo() {
  const binfo = useContext(BlogContext);
  return (
      <div>
       <p>Topic: {binfo.React.post}</p>
       <p>Author: {binfo.React.author}</p>
      </div>
  );
}

export default BlogContextDemo;