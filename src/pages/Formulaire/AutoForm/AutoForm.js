import React from 'react'
import DropFileInput from './drop-file-input/DropFileInput';
import './AutoForm.css'
const AutoForm = () => {
    const onFileChange=(files) => {
        console.log(files);
    }
  return (
    <div className="box">
    <h2 className="header">
        Drop your users file here
    </h2>
    <DropFileInput
        onFileChange={(files) => onFileChange(files)}
    />
</div>
  )
}

export default AutoForm;