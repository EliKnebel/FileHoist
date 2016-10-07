## FileHoist

FileHoist is a simple React component for uploading files to a remote server using XMLHttpRequest. When the `upload()` function is called on the FileHoist component, a XMLHttpRequest will be made to upload the file to the address specified at uploadUrl.

### Install
```
npm install --save filehoist
```

### Usage
The following example is written in ES6 syntax, but this library should work with ES5 just the same. Simply import the component into your file and render it into the DOM.
```language-javascript
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
  );
}

onUploadFiles() {
  // call FileHoist upload function
  this.refs.fileHoist.upload();
}

onUploadProgress(loaded, total) {
  // handle a progress event
}

onUploadComplete() {
  // handle upload complete event
}
```

### Notes
Currently does not support multiple file selection.

### Roadmap
- ~~Ability to send an authentication token~~
- Mulitple File selection
- Ability to automatically render an input field