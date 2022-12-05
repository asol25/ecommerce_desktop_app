import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function HtmlEditor(props) {
  return <ReactQuill theme="snow" value={props.value} onChange={props.setValue} />;
}
