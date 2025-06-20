import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  type IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart, WebPartContext } from '@microsoft/sp-webpart-base';

import * as strings from 'BoscoHeroSectionWebPartStrings';
import { BuildResponseType, IBoscoHeroSectionEntryProps, IUserWelcomeProps } from './components/IBoscoHeroSectionProps';
import { PropertyFieldBgUpload } from './backgroundUpload/BgUploadPropertyPane';
import { DataHandler, GraphDataHandler } from './services/Helpers';
import { IBlobProps } from './backgroundUpload/IBgUploadPropertyPaneProps';
import { UtilFunctions } from './services/UtilFuncs';
import { Service } from './services/Service';
import { responseBuilder } from './services/BuildResponse';
import { MSGraphClientV3 } from '@microsoft/sp-http';
import BoscoHeroSectionEntryPoint from './components/BoscoHeroSectionEntryPoint';

export interface IBoscoHeroSectionWebPartProps {
  backgroundImage: IBlobProps;
  title:string;
  fullDateString:string;
  userInfo: IUserWelcomeProps;
  context:WebPartContext;
}

export default class BoscoHeroSectionWebPart extends BaseClientSideWebPart<IBoscoHeroSectionWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IBoscoHeroSectionEntryProps> = React.createElement(
      BoscoHeroSectionEntryPoint,
      {
        backgroundImage: this.properties.backgroundImage,
        title: this.properties.title,
        fullDateString: this.properties.fullDateString,
        userInfo: this.properties.userInfo,
        context: this.context
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected async onInit(): Promise<void> {

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

    const getUsersResponse = await svc.getNewsAuthorDetails('dcarter@boscocet.org.uk');
    console.log(getUsersResponse.data);

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
