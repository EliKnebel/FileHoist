## FileHoist

FileHoist is a simple React component for uploading files to a remote server using XMLHttpRequest. When the `upload()` function is called on the FileHoist component, a XMLHttpRequest will be made to upload the file to the address specified at uploadUrl.

### Install
```language-bash
npm install --save filehoist
```

### Usage
The following example is written in ES6 syntax, but ES5 should be very similar. Simply import filehoist into your component and render it. To open the file dialog, call the `showDialog()` function on the FileHoist component. To upload the chosen file, call the `upload()` function on the FileHoist component. The onUploadProgress callback will be called with the current progress and onUploadComplete callback will be called when the upload is complete.
```language-javascript
import FileHoist from 'filehoist';

...

render() {
  return (
    ...

      <FileHoist ref='fileHoist'
                 uploadUrl='/api/file/upload'
                 onFileSelection={this.onFileSelection}
                 onUploadProgress={this.onUploadProgress}
                 onUploadComplete={this.onUploadComplete} />

    ...

      <button onClick={this.onUploadBtnClick}>Upload File</button>
    
    ...
  );
}

/**
 * Handle file selection
 */
onFileSelection() {
  // call FileHoist upload function
  this.refs.fileHoist.upload();
}

/**
 * Handle upload progress
 * @param {number} loaded - amount uploaded out of total
 * @param {number} total - total amount that will be uploaded
 */
onUploadProgress(loaded, total) {
  // handle a progress event
}

/**
 * Handle upload complete
 */
onUploadComplete() {
  // handle upload complete event
}

/**
 * Handle upload button click
 */
onUploadBtnClick() {
  // call FileHoist showDialog function
  this.refs.filehoist.showDialog();
}
```

### Development
Install node modules and webpack globally
```
npm install
npm install -g webpack
```

Run webpack to build
```language-bash
webpack
```

### Notes
Currently does not support multiple file selection.

### Roadmap
- ~~Ability to send an authentication token~~
- Mulitple File selection
- Ability to automatically render an input field


https://github.com/bitbldr/FileHoist