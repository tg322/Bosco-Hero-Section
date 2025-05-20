import * as React from "react";
import {
  IBgUploadPropertyPanePropsHost,
  IBgUploadPropertyPanePropsHostState
} from "./IBgUploadPropertyPanePropsHost";
import { Icon, Spinner } from "office-ui-fabric-react";
import styles from './BgUpload.module.scss';
import Modal from './Modal';
import { DataHandler } from "./Helpers";



export default class PropertyFieldBgUploadHost extends React.Component<
  IBgUploadPropertyPanePropsHost,
  IBgUploadPropertyPanePropsHostState
> {

  // private rootWeb: any;

  private dataHandler = new DataHandler();

  constructor(props: IBgUploadPropertyPanePropsHost) {
    super(props);

    //if a custom state is needed, such as the isVisible, add to IBgUploadPropertyPanePropsHostState to avoid getting errors in groupFields

    const value = this.props.value;

    this.state = {
      value: value,
      //If value contains an image, set isVisible to true, else, false. Allows persistence over refresh
      isVisible: value && value.blob !== '',
      isUploading: false,
      modalVisible: false
    };

  }
  

  // class set to async to allow use of await function to hold code while functions run. Prevents bugs with uploading and removing images not being completed when setting states and showing previews.
  private handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>): Promise<void> => {
    //If <input> event target contains a file and the length is longer than 0 *when using for the first time 'files' does not exist, however when the image is removed the 'files' array persists but it is empty hence the two checks*
    if (event.target.files && event.target.files.length > 0) {
      //set file as the result of the uploaded image
      const file = event.target.files[0];
      
      //If value already contains an image *uploading an image then clicking upload again instead of clicking remove then uploading* run handleFileRemove (remove file from sharepoint)
      if( this.state.value && this.state.value.length !== 0){
        try{
          await this.dataHandler.deleteFileFromSP(this.props.context, this.props.urlLocation, this.props.libraryName, this.state.value.fileName);
        }catch(error){
          console.log(error);
        }
      }
      //Run upload file function, wait for this function to finish
      await this.handleFileUpload(file);
      //Tell sharepoint the value property has changed with that of the value state. (state is the react side, property is the main webpart, set property to state to sync the two)
      if (this.props.onChanged) {
      this.props.onChanged(this.state.value);
      }

    }
  }

handleFileUpload = async (file: File) => {

  this.setState({ isUploading: true, isVisible: false });

  let result:any;
  const fileType = file.name.slice(file.name.lastIndexOf('.'));

  
  try{

    result = await this.dataHandler.uploadFileToSP(this.props.context, this.props.urlLocation, file,  this.props.libraryName, true, this.props.fileName+fileType);

    let fileObject: { [keys: string]: any; } = {};

    fileObject.fileName = this.props.fileName+fileType;

    fileObject.blob = window.location.origin + encodeURI(result.data.ServerRelativeUrl) + `?UUID=${new Date().getTime() + Math.floor(Math.random() * 1000000000)}`;

    // console.log('End file Object ' + window.location.origin + encodeURI(result.data.ServerRelativeUrl) + `?UUID=${new Date().getTime() + Math.floor(Math.random() * 1000000000)}`);
  
    fileObject.label = this.props.label;

    this.setState({value: fileObject});

    if (this.props.onChanged) {

    this.props.onChanged(this.state.value);
    }
  }
  catch (error){
    console.error('Error uploading file:', error);
  }
  
  this.setState({ isUploading: false, isVisible: true });

  if (this.props.onChanged) {
  this.props.onChanged(this.state.value);
  }
  
}

handleModalToggle = () => {
  this.setState(prevState => ({ modalVisible: !prevState.modalVisible }));
}

//Handle click is the function added to the remove button, this is run as an async function so that it is completed when called using await which means the code will wait for this function to fully complete before continuing
handleClick = async () => {
    //Run the handleFileRemove function as await, insert the fileName from the value prop
    this.handleModalToggle();
    await this.handleFileRemove(this.props.value.fileName);
    //Once the file has been removed, set the value state to null (remove the image that is to be removed from the webpart) and hide the preview by setting isVisible to false
    this.setState({value: null, isVisible: false});
    //Tell sharepoint theres nothing in the props
    if (this.props.onChanged) {
    this.props.onChanged(this.state.value);
    }
    //Clear the <input> tag, this will keep the file if not cleared and can cause many many bugs
    if (this.uploadInputRef.current) {
      this.uploadInputRef.current.value = "";
    }
    
};

//The async handleFileRemove function that removes the file from sharepoint
handleFileRemove = async (fileName:any) => {
    try{
      await this.dataHandler.deleteFileFromSP(this.props.context, this.props.urlLocation, this.props.libraryName, fileName);
    }catch(error){
      console.log(error);
    }
}

  //Create reference to the input field, this can now be used in code elsewhere such as when we clear the contents of the <input> tag in handleClick
  private uploadInputRef = React.createRef<HTMLInputElement>();
  
  public render(): React.ReactElement<IBgUploadPropertyPanePropsHost> {

    
    
    return (
    <>
      <div className={`${styles.imageUploadContainer}`}>
        <p style={{fontWeight:'600', margin:'10px 0px 5px'}}>{this.props.label}</p>
        { !this.state.isUploading && 
        <div className={`${styles.imageUploadButtonContainer}`}>
          <label style={{paddingTop:'5px 0px'}}>
          <input ref={this.uploadInputRef} type="file" id={`${this.props.label}`} name="message" accept={`${this.props.acceptsType && this.props.acceptsType ? this.props.acceptsType : 'image/*'}`} onChange={this.handleFileChange}></input>
            <div style={{gap:'5px'}}>
              <Icon iconName="FileImage"></Icon>
              <p style={{margin:'0px'}}>Upload</p>
            </div>
          </label>
          { this.state.isVisible && <div style={{padding:'5px 0px', gap:'5px'}} onClick={this.handleModalToggle}>
              <Icon iconName="Delete"></Icon>
            <p style={{margin:'0px'}}>Remove</p>
          </div>}
        </div>}
      { this.state.isVisible && <div className={`${styles.imagePreviewContainer}`}>
        <img className={`${styles.imagePreview}`} src={this.state.value.blob} alt="Preview" />
      </div> }
      

      { this.state.isUploading && <div style={{display: `flex`, flexDirection: `column`, height: `100px`, justifyContent:`center`}}>
        
        <Spinner style={{flexDirection: `column`}} label="Uploading Image to SharePoint..." />
      </div> }
      
      </div>
      { this.state.modalVisible && <Modal titleAction="Delete image from SharePoint" prompt="Are you sure you wish to delete this image?" image={this.state.value.blob && this.state.value.blob ? this.state.value.blob : ''} action={this.handleClick} closeModal={this.handleModalToggle}/> }
    </>
    );
  }
}



