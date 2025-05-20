import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  IPropertyPaneField,
  PropertyPaneFieldType,
} from '@microsoft/sp-property-pane';

import { IBgUploadPropertyPaneProps, IBgUploadPropertyPanePropsInternal } from './IBgUploadPropertyPaneProps';
import PropertyFieldBgUploadHost from './BgUploadHost';

//Constructs the property pane, including all the properties and the react that is to be rendered.

class PropertyFieldBgUploadBuilder implements IPropertyPaneField<IBgUploadPropertyPanePropsInternal> {
  public targetProperty: string;
  public type: PropertyPaneFieldType = PropertyPaneFieldType.Custom;
  public properties: IBgUploadPropertyPanePropsInternal;


  private _onChangeCallback: (targetProperty?: string, newValue?: any) => void; // eslint-disable-line @typescript-eslint/no-explicit-any
  
  //Property constructor

  public constructor(_targetProperty: string, _properties: IBgUploadPropertyPanePropsInternal) {
    this.targetProperty = _targetProperty;
    this.properties = _properties;
    this.properties.onChanged = this._onChanged.bind(this);
    this.properties.onRender = this._render.bind(this);
    this.properties.onDispose = this._dispose.bind(this);
  }

  private _render(elem: HTMLElement, context?: any, changeCallback?: (targetProperty?: string, newValue?: any) => void): void { // eslint-disable-line @typescript-eslint/no-explicit-any

    const props: IBgUploadPropertyPaneProps = <IBgUploadPropertyPaneProps>this.properties;

    const element = React.createElement(PropertyFieldBgUploadHost, {
      ...props
    });

    ReactDOM.render(element, elem);

    if (changeCallback) {
      this._onChangeCallback = changeCallback;
    }
  }

  private _dispose(elem: HTMLElement): void {
    ReactDOM.unmountComponentAtNode(elem);
  }

  private _onChanged(value: any): void {
    if (this._onChangeCallback) {
      this._onChangeCallback(this.targetProperty, value);
    }

  }

}

//Function that is used within the group fields to create this custom field, this takes the arguments constructed above and uses return new PropertyFieldBgUploadBuilder to create an entirely new instance of the file upload property pane.
//this way the same custom property pane can be reused simply by calling the function in the group fields and assigning a separate variable for the value, key value and label

export function PropertyFieldBgUpload(targetProperty: string, properties: IBgUploadPropertyPaneProps): IPropertyPaneField<IBgUploadPropertyPanePropsInternal> {
  
  return new PropertyFieldBgUploadBuilder(targetProperty, {
    ...properties,
    onChanged: properties.onChanged,
    onRender: (domElement: HTMLElement, context?: any, changeCallback?: (targetProperty?: string, newValue?: any) => void) => {
      // No operation (no-op) function
    },
    onDispose: (domElement: HTMLElement) => {
      // No operation (no-op) function, or appropriate disposal logic
    }
  
  });
}