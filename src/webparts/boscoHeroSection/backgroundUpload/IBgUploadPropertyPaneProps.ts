import {
  IPropertyPaneCustomFieldProps,
} from '@microsoft/sp-property-pane';

export interface IBgUploadPropertyPaneProps {
  key: string;
  context?: any;
  fileName?: string;
  acceptsType?: string;
  overwrite?: boolean;
  libraryName: string;
  urlLocation: string;
  value?: IBlobProps;
  label: string;
  onChanged?: (value: any) => void; // eslint-disable-line @typescript-eslint/no-explicit-any
}

export interface IBlobProps{
  blob:string;
  fileName:string;
  label:string;
}

export interface IBgUploadPropertyPanePropsInternal extends IBgUploadPropertyPaneProps, IPropertyPaneCustomFieldProps { }