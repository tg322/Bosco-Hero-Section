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
import { BuildResponseType, IBoscoHeroSectionProps, IUserProps } from './components/IBoscoHeroSectionProps';
import { PropertyFieldBgUpload } from './backgroundUpload/BgUploadPropertyPane';
import { DataHandler, GraphDataHandler } from './utils/Helpers';
import { IBlobProps } from './backgroundUpload/IBgUploadPropertyPaneProps';
import { UtilFunctions } from './utils/UtilFuncs';
import { Service } from './utils/Service';
import { responseBuilder } from './utils/BuildResponse';
import { MSGraphClientV3 } from '@microsoft/sp-http';

export interface IBoscoHeroSectionWebPartProps {
  backgroundImage: IBlobProps;
  title:string;
  fullDateString:string;
  userInfo: IUserProps;
  svc:Service;
}

export default class BoscoHeroSectionWebPart extends BaseClientSideWebPart<IBoscoHeroSectionWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IBoscoHeroSectionProps> = React.createElement(
      BoscoHeroSection,
      {
        backgroundImage: this.properties.backgroundImage,
        title: this.properties.title,
        fullDateString: this.properties.fullDateString,
        userInfo: this.properties.userInfo,
        svc: this.properties.svc
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected async onInit() {

    const client: MSGraphClientV3 = await this.context.msGraphClientFactory.getClient('3');
    const svc = new Service(new DataHandler(), new GraphDataHandler(client), new UtilFunctions(), new responseBuilder(), this.context);
    
    const checkMainFolderResponse:BuildResponseType = await svc.checkMainFolder();
    if(!checkMainFolderResponse.success){
      console.log(checkMainFolderResponse);
    }

    const checkSiteFolderResponse:BuildResponseType = await svc.checkSiteFolder();
    if(!checkSiteFolderResponse.success){
      console.log(checkSiteFolderResponse);
    }
    
    const fullDate = svc.getDate();
    this.properties.fullDateString = fullDate.data;

    const getMeInformationResponse:BuildResponseType = await svc.getMeInformation('$select=displayName,photo,givenName,id');
    this.properties.userInfo = getMeInformationResponse.data;

    //const getNewsResponse:BuildResponseType = await svc.getNews(this.context);

    this.properties.svc = svc;
    
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
