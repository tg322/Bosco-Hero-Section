import * as React from 'react';
import { IBoscoHeroSectionEntryProps} from './IBoscoHeroSectionProps';
// import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import BoscoHeroSection from './BoscoHeroSection';
import { ServiceProvider } from './ServiceContext';
import { CalendarProvider } from './Calendar/CalendarContext';


export default class BoscoHeroSectionEntryPoint extends React.Component<IBoscoHeroSectionEntryProps> {
  public render(): React.ReactElement<IBoscoHeroSectionEntryProps> {
    const {
      backgroundImage,
      title,
      fullDateString,
      userInfo,
      context
    } = this.props;

    return (
      <ServiceProvider context={context}>
        <CalendarProvider>
          <BoscoHeroSection backgroundImage={backgroundImage} title={title} fullDateString={fullDateString} userInfo={userInfo}/>
        </CalendarProvider>
      </ServiceProvider>
        
    );
  }
}
