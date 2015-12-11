# FileHoist
A simple JavaScript library for uploading files to a remote server using XMLHttpRequest

### Install
```
npm install filehoist --save 
```

### Usage
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

## Notes
Currently does not support multiple file selection.

## Future work
- Mulitple File selection
