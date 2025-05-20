export interface IBgUploadPropertyPanePropsHost {
    key: string;
    value?: any;
    context?:any;
    fileName?: string;
    acceptsType?: string;
    overwrite?: boolean;
    libraryName: string;
    urlLocation: string;
    label: string;
    onChanged?: (value: any) => void; // eslint-disable-line @typescript-eslint/no-explicit-any
  }
  
  export interface IBgUploadPropertyPanePropsHostState {
    value?: any;
    isVisible: boolean;
    isUploading: boolean;
    modalVisible: boolean;
    context?:any;
  }