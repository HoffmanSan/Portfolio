// styles
import './about.css'

// components
import Hexagon from "../hexagon/Hexagon"
import Bar from '../bar/Bar';
import AnimationWrapper from '../animationWrapper/AnimationWrapper';

// others
import Profilowe from '../../assets/profilowe.png';
import { useContext } from 'react';
import { TemplateContext } from '../../contexts/TemplateContext';
import { TemplateContextType } from '../../types/types';

export default function About() {
  const { template: { about } } = useContext(TemplateContext) as TemplateContextType
  const isOnMobile = window.screen.width < 370
  const hidden = { opacity: 0, scale: 0.5 }
  const visible = { opacity: 1, scale: 1 }
  const transition = { type: 'spring', stifness: 100, duration: 0.75, delay: isOnMobile ? 0.2 : 0.5 }

  return (
    <section id="about" className='flex-column-center'>
      <div className="about-content" >
        <AnimationWrapper hidden={hidden} visible={visible} transition={transition}>
          <h3>{about.headingOne}</h3>
        </AnimationWrapper>
        

        <div className="personal-info">
          <AnimationWrapper hidden={hidden} visible={visible} transition={transition}>
            <Hexagon className='flex-column-center'>
              <img src={Profilowe} alt="author's face" />
            </Hexagon>
            <p>{about.bio}</p>
          </AnimationWrapper>

          <AnimationWrapper hidden={hidden} visible={visible} transition={transition} style={{ width: '100%', height: '100%' }}>
            <div className="bar-container">
              <Bar tag='HTML' progress={90} delay={isOnMobile ? 300 : 800}/>
              <Bar tag='CSS' progress={90} delay={isOnMobile ? 400 : 900}/>
              <Bar tag='JavaScript' progress={90} delay={isOnMobile ? 500 : 1000}/>
              <Bar tag='React' progress={90} delay={isOnMobile ? 600 : 1100}/>
              <Bar tag='Node' progress={70} delay={isOnMobile ? 700 : 1200}/>
              <Bar tag='MongoDB' progress={55} delay={isOnMobile ? 800 : 1300}/>
              <Bar tag='PostgreSQL' progress={55} delay={isOnMobile ? 900 : 1400}/>
              <Bar tag='Firebase' progress={55} delay={isOnMobile ? 1000 : 1500}/>
            </div>
          </AnimationWrapper>
        </div>  

        <div className="hexagon-row">

          <AnimationWrapper hidden={hidden} visible={visible} transition={transition}>
            <div className="hexagon-column">
              <Hexagon className='hexagon-priorities'>
                <div className="responsive-carousel">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="#ffffff" d="M16 64C16 28.7 44.7 0 80 0H304c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64V64zM144 448c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16H160c-8.8 0-16 7.2-16 16zM304 64H80V384H304V64z"/></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ffffff" d="M0 64C0 28.7 28.7 0 64 0H384c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zM256 448a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM384 64H64V384H384V64z"/></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#ffffff" d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64H240l-10.7 32H160c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H346.7L336 416H512c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zM512 64V288H64V64H512z"/></svg>
                </div>
              </Hexagon>
              <h4>{about.priorities[0].title}</h4>
              <p>{about.priorities[0].description}</p>
            </div>
          </AnimationWrapper>
          

          <AnimationWrapper hidden={hidden} visible={visible} transition={transition}>
            <div className="hexagon-column">
              <Hexagon className='hexagon-priorities'>
                <svg className='gear-logo' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#ffffff" d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"/></svg>
              </Hexagon>
              <h4>{about.priorities[1].title}</h4>
              <p>{about.priorities[1].description}</p>
            </div>
          </AnimationWrapper>

          <AnimationWrapper hidden={hidden} visible={visible} transition={transition}>
            <div className="hexagon-column">
              <Hexagon className='hexagon-priorities'>
                <svg className='seo-logo' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460 512"><path fill="#ffffff" d="M220.6 130.3l-67.2 28.2V43.2L98.7 233.5l54.7-24.2v130.3l67.2-209.3zm-83.2-96.7l-1.3 4.7-15.2 52.9C80.6 106.7 52 145.8 52 191.5c0 52.3 34.3 95.9 83.4 105.5v53.6C57.5 340.1 0 272.4 0 191.6c0-80.5 59.8-147.2 137.4-158zm311.4 447.2c-11.2 11.2-23.1 12.3-28.6 10.5-5.4-1.8-27.1-19.9-60.4-44.4-33.3-24.6-33.6-35.7-43-56.7-9.4-20.9-30.4-42.6-57.5-52.4l-9.7-14.7c-24.7 16.9-53 26.9-81.3 28.7l2.1-6.6 15.9-49.5c46.5-11.9 80.9-54 80.9-104.2 0-54.5-38.4-102.1-96-107.1V32.3C254.4 37.4 320 106.8 320 191.6c0 33.6-11.2 64.7-29 90.4l14.6 9.6c9.8 27.1 31.5 48 52.4 57.4s32.2 9.7 56.8 43c24.6 33.2 42.7 54.9 44.5 60.3s.7 17.3-10.5 28.5zm-9.9-17.9c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8 8-3.6 8-8z"/></svg>
              </Hexagon>
              <h4>{about.priorities[2].title}</h4>
              <p>{about.priorities[2].description}</p>
            </div>
          </AnimationWrapper>

        </div>
        
      </div>
    </section>
  )
}