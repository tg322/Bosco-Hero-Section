import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  type IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'BoscoHeroSectionWebPartStrings';
import BoscoHeroSection from './components/BoscoHeroSection';
import { BuildResponseType, dayStrings, IBoscoHeroSectionProps, monthStrings } from './components/IBoscoHeroSectionProps';
import { PropertyFieldBgUpload } from './backgroundUpload/BgUploadPropertyPane';
import { DataHandler } from './utils/Helpers';
import { IBlobProps } from './backgroundUpload/IBgUploadPropertyPaneProps';
import { UtilFunctions } from './utils/UtilFuncs';
import { IButtonGridCellProps } from '@fluentui/react';

export interface IBoscoHeroSectionWebPartProps {
  backgroundImage: IBlobProps;
  title:string;
  fullDateString:string;
}

export default class BoscoHeroSectionWebPart extends BaseClientSideWebPart<IBoscoHeroSectionWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IBoscoHeroSectionProps> = React.createElement(
      BoscoHeroSection,
      {
        backgroundImage: this.properties.backgroundImage,
        title: this.properties.title,
        fullDateString: this.properties.fullDateString
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected async onInit() {
    // try{
    //   await this.checkAndCreateFolders();
    // }catch(error){
    //   console.log(error);
    // }

    // this.buildDateString();

    const utils = new UtilFunctions();
    try{
      const response:BuildResponseType = await utils.checkMainFolder(this.context);
      if(!response.success){
        console.log(response);
      }
    }catch(error){
      console.log(error);
    }

    try{
      const response:BuildResponseType = await utils.checkSiteFolder(this.context);
      if(!response.success){
        console.log(response);
      }
    }catch(error){
      console.log(error);
    }
    
    const fullDate = utils.buildDateString();
    this.properties.fullDateString = fullDate.data;
    
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('title', {
                  label: 'Title'
                }),
                PropertyFieldBgUpload("backgroundImage", {
                key: "backgroundImage",
                label: "Background Image",
                value: this.properties.backgroundImage,
                context: this.context,
                fileName: 'backgroundImage',
                libraryName: 'Shared Documents/'+this.context.manifest.alias+'/'+this.context.pageContext.site.id.toString(),
                urlLocation: window.location.origin
              }),
              ]
            }
          ]
        }
      ]
    };
  }
}
