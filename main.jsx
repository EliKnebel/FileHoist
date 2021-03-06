import React from 'react';
import ReactDOM from 'react-dom';

export default class FileHoist extends React.Component {
	constructor(props) {
		super(props);
	}
	
	/** React Component Render */
	render() {
		/* render input as hidden unless specified */
		return (
				<input
					type="file"
					ref="uploadfile"
					name="uploadfile"
					style={( this.props.visible ? {} : {display: 'none'} )}
					multiple={this.props.multiple}
					onChange={this.fileSelected.bind(this)} />
		);
	}
	
	/** show browser upload dialog */
	showDialog() {
		ReactDOM.findDOMNode(this.refs.uploadfile).click();
	}
	
	/** upload selected file to server */
	upload(params) {
		var fileInput = ReactDOM.findDOMNode(this.refs.uploadfile);
		
		if(fileInput.files.length === 0){
			return;
		}
		
		// get only one file from selected files (for now)
		// TODO: implement logic to support multiple files
		var file = fileInput.files[0];
		
		// create FormData object
		var formData = new FormData();
    
    // append params to formData
		for (var key in params) {
      if (params.hasOwnProperty(key)) {
        formData.append(key, params[key]);
      }
    }
    
    // append file to FormData
		formData.append('file', file);
    
		// create a new request object
		var request = new XMLHttpRequest();
		
		// add upload progress listener
		request.upload.addEventListener('progress', (e) => {
				var loaded = e.loaded;
				var total = e.total;
				
				// call onUploadProgress prop function
				if (this.props.onUploadProgress) this.props.onUploadProgress(loaded, total);
		}, false);
		
		// add upload complete listener
		request.addEventListener("load", (event) => {
			// clear file input
			ReactDOM.findDOMNode(this.refs.uploadfile).value = "";
			
			try {
				var resp = JSON.parse(request.response);
			} catch (e){
				var resp = {
						status: 'error',
						formData: 'Unknown error occurred: [' + request.responseText + ']'
				};
			}
			
			// call onUploadComplete prop function
			if (this.props.onUploadComplete) this.props.onUploadComplete(resp);
		});
		
		// open the request and upload the formData
		request.open(this.props.uploadMethod || 'POST', this.props.uploadUrl, true);
		
		// if authToken is set, set it to the header
		if (this.props.authToken) {
			request.setRequestHeader('Authorization', 'Bearer ' + this.props.authToken);
		}
		
		// send the request
		request.send(formData);
	}
	
	fileSelected() {
		if (this.props.onFileSelection) {
			setTimeout(this.props.onFileSelection(ReactDOM.findDOMNode(this.refs.uploadfile).files), 1);
		}
	}
}

FileHoist.propTypes = {
	multiple: React.PropTypes.bool,
	visible: React.PropTypes.bool,
	uploadMethod: React.PropTypes.string,
	uploadUrl: React.PropTypes.string.isRequired,
	authToken: React.PropTypes.string,
	onFileSelection: React.PropTypes.func,
	onProgress: React.PropTypes.func,
	onUploadComplete: React.PropTypes.func,
};