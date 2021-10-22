import React from 'react'
import  './landing.css'
import me from '../me.jpeg'
import svgs from '../svg.png';
import styled from 'styled-components'
import logo from '../../src/logo.svg'


const MainBox = styled.div`
  background-color: #ffff;
   color: white;
   height: 820px;
   background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1151%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='rgba(0%2c 0%2c 0%2c 1)'%3e%3c/rect%3e%3cpath d='M659.8851497573197 303.3963644802347L783.6909887026868 206.85851202860232 657.3624151071798 153.23521396962798z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M215.768%2c36.762C235.48%2c35.357%2c246.136%2c15.751%2c255.647%2c-1.572C264.65%2c-17.969%2c273.039%2c-36.139%2c265.089%2c-53.072C256.041%2c-72.343%2c237.01%2c-87.929%2c215.768%2c-86.51C195.997%2c-85.189%2c186.345%2c-64.462%2c176.676%2c-47.166C167.358%2c-30.499%2c156.593%2c-12.395%2c164.655%2c4.914C173.739%2c24.417%2c194.307%2c38.292%2c215.768%2c36.762' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M639.6149513321706 408.72097725225194L746.32592829987 458.4811230214919 796.0860740691099 351.7701460537925 689.3750971014106 302.01000028455246z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M1475.7509257988302 158.02213861466726L1331.4472878538152 90.7322471412806 1264.1573963804285 235.0358850862955 1408.4610343254435 302.32577655968214z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M1026.0807017159877 464.9109864632966L938.3265032187826 393.8490376744346 955.0187529271258 552.6651849605017z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M497.4978831005026 31.151660092132655L503.3040162749385 97.51606595273259 599.9475584786204 55.62466326077878z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M237.009%2c268.048C290.692%2c270.193%2c341.957%2c240.645%2c367.562%2c193.413C392.121%2c148.112%2c383.355%2c92.972%2c355.384%2c49.694C329.797%2c10.104%2c284.127%2c-9.986%2c237.009%2c-8.588C192.368%2c-7.263%2c152.935%2c17.93%2c130.207%2c56.375C107.032%2c95.575%2c102.844%2c142.999%2c123.357%2c183.655C146.139%2c228.807%2c186.475%2c266.029%2c237.009%2c268.048' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M983.1300398679729 297.1213192386747L1095.0097355261046 232.52754683359885 1030.4159631210287 120.64785117546711 918.5362674628971 185.24162358054295z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M1378.283%2c511.538C1425.951%2c510.946%2c1475.853%2c494.995%2c1498.113%2c452.839C1519.351%2c412.619%2c1499.171%2c366.362%2c1475.428%2c327.568C1453.04%2c290.987%2c1421.133%2c258.847%2c1378.283%2c257.045C1332.51%2c255.12%2c1290.272%2c279.98%2c1265.876%2c318.757C1239.676%2c360.4%2c1228.405%2c413.377%2c1253.187%2c455.879C1277.827%2c498.137%2c1329.37%2c512.145%2c1378.283%2c511.538' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M879.7227982045961 380.9671823552584L970.5427009888608 510.6714454891186 1100.246964122721 419.85154270485384 1009.4270613384563 290.14727957099365z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M397.6526362877861 293.9316702602604L367.09318593343056 437.7025805264734 510.8640961996436 468.2620308808289 541.4235465539991 324.4911206146159z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M1096.441%2c571.675C1119.322%2c572.222%2c1144.431%2c566.794%2c1155.452%2c546.734C1166.214%2c527.147%2c1155.414%2c504.419%2c1143.924%2c485.25C1132.871%2c466.811%2c1117.914%2c449.329%2c1096.441%2c448.287C1073.376%2c447.168%2c1051.637%2c460.133%2c1040.242%2c480.218C1028.989%2c500.053%2c1030.187%2c524.593%2c1042.126%2c544.023C1053.526%2c562.575%2c1074.672%2c571.154%2c1096.441%2c571.675' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M886.598%2c638.164C920.484%2c638.578%2c951.373%2c617.289%2c966.424%2c586.926C980.067%2c559.403%2c970.179%2c528.044%2c954.184%2c501.818C938.999%2c476.919%2c915.715%2c457.69%2c886.598%2c456.039C854.37%2c454.212%2c820.764%2c465.558%2c804.294%2c493.32C787.546%2c521.551%2c793.862%2c556.477%2c810.079%2c585.016C826.523%2c613.955%2c853.315%2c637.758%2c886.598%2c638.164' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1151'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cstyle%3e %40keyframes float1 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-10px%2c 0)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float1 %7b animation: float1 5s infinite%3b %7d %40keyframes float2 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-5px%2c -5px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float2 %7b animation: float2 4s infinite%3b %7d %40keyframes float3 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(0%2c -10px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float3 %7b animation: float3 6s infinite%3b %7d %3c/style%3e%3c/defs%3e%3c/svg%3e");
   background-repeat: no-repeat;
   background-size:cover;
   `;
 const  Landingpage = () => {
      return(
        <MainBox  >
        <div className="fluid-container py-5 px-5 ">
            <div className="container">
               <div className="row">
                  <div className='col-lg-6 col-md-6 cl-12' style={{}} >
                      <div className="my-5">
                         <h1><span style={{color:"#89715b"}}>Hello!</span> I am Sumit Sahni,<br/>Interactive Developer based <br/> in India.</h1>
                      </div>
                      <div  style={{}}>
                        <p>See bits and pieces of his design work and prototyping on</p>
                         <ul>
                            <li  style={{color:"#f06"}}>Instagram</li>
                            <li className="mx-4"  style={{color:"#067"}}>Facebook</li>
                            <li style={{color:"#0cf"}}>Twitter</li>
                          </ul>
                  
                      </div>
                      <div className="my-3">
                            <h5>SERVICE</h5>
                           <h2>UI/UX Interactive, Mobile App & <br/>Video Animator</h2>
                      </div>
                  </div>
                  <div className=' cl-0 col-lg-6 col-md-6 img-container ' style={{  }}>
                  <img className="image-box" src={logo} alt="me" />
                  
                
                  </div>
                </div>
         
            </div>
            
        </div>
        </MainBox>
         
      )
  }

export default Landingpage;
