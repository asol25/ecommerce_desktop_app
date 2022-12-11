import { Box } from '@mui/material';
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function HtmlEditor(props: any) {
	return (
		<>
			<ReactQuill theme="snow" value={props.value} onChange={props.setValue} />
		</>
	);
}
