import * as React from 'react';
import styles from './BoscoHeroSection.module.scss';
import { type IBoscoHeroSectionProps } from './IBoscoHeroSectionProps';
import UserWelcome from './UserWelcome';

export default class BoscoHeroSection extends React.Component<IBoscoHeroSectionProps> {
  public render(): React.ReactElement<IBoscoHeroSectionProps> {
    const {
      backgroundImage,
      title,
      fullDateString
    } = this.props;

    return (
      <section className={`${styles.boscoHeroSection}`} style={{backgroundImage:`url(${backgroundImage ? backgroundImage.blob : ''})`}}>
        <div className={`${styles.boscoHeroSectionOverlay}`}></div>

        <div id='contentContainer' className={`${styles.boscoHeroSectionContentContainer}`}>

          <div id='titleAndUserRow' className={`${styles.boscoHeroSectionTitleAndUserRow}`}>

            <div id='titlecontainer' className={`${styles.boscoHeroSectionTitleContainer}`}>
              <h1 className={`${styles.boscoHeroSectionTitle}`}>{title}</h1>
              <div className={`${styles.boscoHeroSectionTitleUnderline}`}></div>
            </div>

            <div id='userAndDateContainer' style={{display:'flex', flexDirection:'column', boxSizing:'border-box', padding:'15px', backgroundColor:'#d9d9d975', gap:'10px'}}>
              <UserWelcome/>
              <div id='dateContainer' style={{display:'flex', flexDirection:'row'}}>
                <span style={{fontSize:'16px'}}>{fullDateString}</span>
              </div>
            </div>
          </div>

        </div>

      </section>
    );
  }
}
