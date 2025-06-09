import * as React from 'react';
import styles from './BoscoHeroSection.module.scss';
import { type IBoscoHeroSectionProps } from './IBoscoHeroSectionProps';
import UserWelcome from './userCard/UserWelcome';
import News from './news/News';
import BoscoLogo from '../assets/logo-no-cross.png'
import Calendar from './calendar/Calendar';

export default class BoscoHeroSection extends React.Component<IBoscoHeroSectionProps> {
  public render(): React.ReactElement<IBoscoHeroSectionProps> {
    const {
      backgroundImage,
      title,
      fullDateString,
      userInfo
    } = this.props;

    return (
        <section className={`${styles.boscoHeroSection}`} style={{backgroundImage:`url(${backgroundImage ? backgroundImage.blob : ''})`}}>
          <div className={`${styles.boscoHeroSectionOverlay}`}></div>
          <div id='Bosco-Hero-Section' className={`${styles.boscoHeroSectionContentContainer}`}>
            <div className={`${styles.boscoHeroSectionTitleAndUserRow}`}>
              <div className={`${styles.boscoHeroSectionTitleContainer}`}>
                <div style={{display:'flex', flexDirection:'row', gap:'10px'}}>
                  <h1 className={`${styles.boscoHeroSectionTitle}`}>{title}</h1>
                  <img style={{height:'56px'}} src={`${BoscoLogo}`}/>
                </div>
                <div className={`${styles.boscoHeroSectionTitleUnderline}`}></div>
              </div>
              <div className={`${styles.boscoHeroSectionUserAndDateContainer}`}>
                <UserWelcome userInfo={userInfo}/>
                <div className={`${styles.boscoHeroSectionDateContainer}`}>
                  <span className={`${styles.boscoHeroSectionDate}`}>{fullDateString}</span>
                </div>
              </div>
            </div>
            <div id='bottomRowContainer' style={{display:'flex', flexDirection:'row', width:'100%', gap:'20px', alignItems:'end'}}>
              <Calendar/>
              <News/>
            </div>
          </div>
        </section>
    );
  }
}
