## FileHoist

FileHoist is a simple React component for uploading files to a remote server using XMLHttpRequest. When the `upload()` function is called on the FileHoist component, a XMLHttpRequest will be made to upload the file to the address specified at uploadUrl.

### Install
```
npm install --save filehoist
```

### Usage
The following example is written in ES6 syntax, but ES5 should be very similar.
Simply import filehoist into your component and render it.
To open the file dialog, call the `showDialog()` function on the FileHoist component.
To upload the chosen file, call the `upload()` function on the FileHoist component.
The onUploadProgress callback will be called with the current progress and onUploadComplete callback will be called when the upload is complete.
```
import FileHoist from 'filehoist';

...

render() {
  return (
    ...

      <FileHoist ref='fileHoist'
                 uploadUrl='/api/file/upload'
                 onFileSelection={this.onUploadFiles}
                 onUploadProgress={this.onUploadProgress}
                 onUploadComplete={this.onUploadComplete} />

    ...

      <button onClick={this.onUploadBtnClick}>Upload File</button>
    
    ...
  );
}

onUploadFiles() {
  // call FileHoist upload function
  this.refs.fileHoist.upload();
}

onUploadProgress(loaded, total) {
  // handle a progress event
  // loaded: amount uploaded out of total
  // total: total amount that will be uploaded
}

onUploadComplete() {
  // handle upload complete event
}

onUploadBtnClick() {
  // call FileHoist showDialog function
  this.refs.filehoist.showDialog();
}
```

### Notes
Currently does not support multiple file selection.

### Roadmap
- ~~Ability to send an authentication token~~
- Mulitple File selection
- Ability to automatically render an input field
