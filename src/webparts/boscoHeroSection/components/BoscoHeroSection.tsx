import * as React from 'react';
import styles from './BoscoHeroSection.module.scss';
import { type IBoscoHeroSectionProps } from './IBoscoHeroSectionProps';
import UserWelcome from './User Card/UserWelcome';
import News from './News/News';
import BoscoLogo from '../assets/logo-no-cross.png'


export default class BoscoHeroSection extends React.Component<IBoscoHeroSectionProps> {
  public render(): React.ReactElement<IBoscoHeroSectionProps> {
    const {
      backgroundImage,
      title,
      fullDateString,
      userInfo,
      svc
    } = this.props;

    return (
        <section className={`${styles.boscoHeroSection}`} style={{backgroundImage:`url(${backgroundImage ? backgroundImage.blob : ''})`}}>

          <div className={`${styles.boscoHeroSectionOverlay}`}></div>

          <div className={`${styles.boscoHeroSectionContentContainer}`}>

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
              <div style={{display:'flex', flexDirection:'column', width:'100%', gap:'15px'}}>
                <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'end', width:'fit-content'}}>
                    <h2 style={{margin:'0px', fontWeight:'600'}}>Upcoming Events</h2>
                </div>
                <div id='calendarContainer' style={{display:'grid', gridTemplateColumns:'160px 160px 160px', gridTemplateRows:'160px 160px', gap:'10px'}}>
                  <div style={{display:'flex', flexDirection:'column', boxSizing:'border-box', padding:'15px', width:'160px', height:'160px', backgroundColor:'#5a5a5a75', justifyContent:'space-between', borderRadius:'6px'}}>
                    <div id='date' style={{display:'flex', flexDirection:'row', alignItems:'center', width:'100%', justifyContent:'center'}}>
                      <h3 style={{margin:'0px'}}>22 Jul</h3>
                    </div>
                    
                    <p style={{margin:'0px', fontSize:'14px', fontWeight:'500'}}>DSL: Network Meeting</p>
                    <p style={{margin:'0px', fontSize:'12px'}}>8:30 am to 9:30 am</p>
                  </div>
                  <div style={{display:'flex', flexDirection:'column', boxSizing:'border-box', padding:'15px', width:'160px', height:'160px', backgroundColor:'#5a5a5a75', borderRadius:'6px'}}></div>
                  <div style={{display:'flex', flexDirection:'column', boxSizing:'border-box', padding:'15px', width:'160px', height:'160px', backgroundColor:'#5a5a5a75', borderRadius:'6px'}}></div>
                  <div style={{display:'flex', flexDirection:'column', boxSizing:'border-box', padding:'15px', width:'160px', height:'160px', backgroundColor:'#5a5a5a75', borderRadius:'6px'}}></div>
                  <div style={{display:'flex', flexDirection:'column', boxSizing:'border-box', padding:'15px', width:'160px', height:'160px', backgroundColor:'#5a5a5a75', borderRadius:'6px'}}></div>
                  <div style={{display:'flex', flexDirection:'column', boxSizing:'border-box', padding:'15px', width:'160px', height:'160px', backgroundColor:'#5a5a5a75', borderRadius:'6px'}}></div>
                </div>
              </div>

              <News svc={svc}/>

            </div>

          </div>

        </section>
    );
  }
}
