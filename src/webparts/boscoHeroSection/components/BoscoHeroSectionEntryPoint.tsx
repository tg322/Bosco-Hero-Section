import * as React from 'react';
import { IBoscoHeroSectionEntryProps} from './IBoscoHeroSectionProps';
import BoscoHeroSection from './BoscoHeroSection';
import { ServiceProvider } from './ServiceContext';
import { CalendarProvider } from './calendar/CalendarContext';
import { FluentProvider, webLightTheme } from '@fluentui/react-components';

//This component is the entry point for the webpart, this allows the encapsulating of contexts and passing WebPartContext to the ServiceProvider

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
      <FluentProvider theme={webLightTheme}>
        <ServiceProvider context={context}>
          <CalendarProvider>
            <BoscoHeroSection backgroundImage={backgroundImage} title={title} fullDateString={fullDateString} userInfo={userInfo}/>
          </CalendarProvider>
        </ServiceProvider>
      </FluentProvider>
    );
  }
}
