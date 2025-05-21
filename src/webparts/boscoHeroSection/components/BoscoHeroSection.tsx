import * as React from 'react';
import styles from './BoscoHeroSection.module.scss';
import { type IBoscoHeroSectionProps } from './IBoscoHeroSectionProps';
import UserWelcome from './UserWelcome';


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

        <div className={`${styles.boscoHeroSectionContentContainer}`}>

          <div className={`${styles.boscoHeroSectionTitleAndUserRow}`}>

            <div className={`${styles.boscoHeroSectionTitleContainer}`}>
              <h1 className={`${styles.boscoHeroSectionTitle}`}>{title}</h1>
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
            <div id='calendarContainer' style={{display:'grid', gridTemplateColumns:'200px 200px 200px', gridTemplateRows:'200px 200px', gap:'26px'}}>
              <div style={{display:'flex', flexDirection:'column', boxSizing:'border-box', padding:'15px', width:'200px', height:'200px', backgroundColor:'#d9d9d975', justifyContent:'space-between'}}>
                <div id='date' style={{display:'flex', flexDirection:'column', alignItems:'center', width:'100%'}}>
                  <h1 style={{margin:'0px'}}>22nd</h1>
                  <h1 style={{margin:'0px'}}>Jul</h1>
                </div>
                
                <p style={{margin:'0px', fontSize:'16px', fontWeight:'500'}}>DSL: Network Meeting</p>
                <p style={{margin:'0px', fontSize:'12px'}}>Thurs 8:30 am to 9:30 am</p>
              </div>
              <div style={{display:'flex', flexDirection:'column', boxSizing:'border-box', padding:'15px', width:'200px', height:'200px', backgroundColor:'#d9d9d975'}}></div>
              <div style={{display:'flex', flexDirection:'column', boxSizing:'border-box', padding:'15px', width:'200px', height:'200px', backgroundColor:'#d9d9d975'}}></div>
              <div style={{display:'flex', flexDirection:'column', boxSizing:'border-box', padding:'15px', width:'200px', height:'200px', backgroundColor:'#d9d9d975'}}></div>
              <div style={{display:'flex', flexDirection:'column', boxSizing:'border-box', padding:'15px', width:'200px', height:'200px', backgroundColor:'#d9d9d975'}}></div>
              <div style={{display:'flex', flexDirection:'column', boxSizing:'border-box', padding:'15px', width:'200px', height:'200px', backgroundColor:'#d9d9d975'}}></div>
            </div>

            <div id='newsContainer' style={{display:'grid', gridTemplateColumns:'100%', gridTemplateRows:'auto', gap:'26px', width:'100%'}}>
              <div style={{display:'flex', flexDirection:'column', boxSizing:'border-box', padding:'15px', width:'100%', height:'100px', backgroundColor:'#d9d9d975'}}></div>
              <div style={{display:'flex', flexDirection:'column', boxSizing:'border-box', padding:'15px', width:'100%', height:'100px', backgroundColor:'#d9d9d975'}}></div>
              <div style={{display:'flex', flexDirection:'column', boxSizing:'border-box', padding:'15px', width:'100%', height:'100px', backgroundColor:'#d9d9d975'}}></div>
              <div style={{display:'flex', flexDirection:'column', boxSizing:'border-box', padding:'15px', width:'100%', height:'100px', backgroundColor:'#d9d9d975'}}></div>
            </div>

          </div>

        </div>

      </section>
    );
  }
}
