import * as React from 'react';
import { type IBoscoHeroSectionProps } from './IBoscoHeroSectionProps';
// import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import BoscoHeroSection from './BoscoHeroSection';


export default class BoscoHeroSectionEntryPoint extends React.Component<IBoscoHeroSectionProps> {
  public render(): React.ReactElement<IBoscoHeroSectionProps> {
    const {
      backgroundImage,
      title,
      fullDateString,
      userInfo,
      svc
    } = this.props;

    return (
        <BoscoHeroSection backgroundImage={backgroundImage} title={title} fullDateString={fullDateString} userInfo={userInfo} svc={svc}/>
    );
  }
}
