import React, { useState, useEffect } from 'react'
// import Header from './../header';
// import {Helmet} from "react-helmet";
 import Jq from './../js/Jq';
 import tvbs_black  from  './../images/tvbs_black.svg';
 import live  from  './../images/LIVE.svg';
 import fb_black  from  './../images/facebook_black.svg';
 import line_black  from  './../images/line_black.svg';
 import arrow_top  from  './../images/箭頭上-1.svg';
 import car  from  './../images/Icon awesome-car-alt.svg';
// import gotop from './../images/gotop.png';
// import ad_top from './../images/ad970x90.jpg';
// import ad_top_m from './../images/ad320x100.jpg';
// import kv_img from './../images/kv850x470.jpg';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import './../css/program_master.css';
// import './../css/program_article_share.css';
// import queryString from "query-string";
// import Footer from './../components/Footer.js';
//  import { Gpt } from 'react-gpt-ads';
// import { DFPSlotsProvider, AdSlot } from 'react-dfp';
import './../css/attractions.css';
const data = require('./../json/attractions.json'); 


function AttractionsIndex() {
    // const [loading, setLoading] = useState('')
    // const [video, setVideo] = useState('')

   
//     //多組api fetch
//   // const urls = ['https://news.tvbs.com.tw/events/freeway/json/attractions.json'];
//     const getDataFromServer = async () => {
//         setLoading(true);
//       const [result1] = await Promise.all(
//         urls.map((url) => fetch(url).then((res) => res.json()))
//      );
//      setLoading(false);
//       setVideo(result1);
//      console.log(result1);
//     };

//         // 模擬componentDidMount
//         useEffect(() => {
//             getDataFromServer()
//         }, [])

//console.log(data.freeway_title[0]);
  return (
<>
<Jq />
<div className="child_box"></div>
<div id="back"> 
<div id="back-img1"><img src={arrow_top} alt="top"/><img className="car" src={car} alt="top"/></div>
</div>
<div className="container">
<header>
    <div className="bg">
        <div className="logo_box">
            <div className="logo"><a href="https://news.tvbs.com.tw/" rel="noopener noreferrer" target="_blank"><img src={tvbs_black} alt="logo"/></a></div>
           <div className="community">
               <div className="attractions">
                   <a href="##" >
                       <div className="live_div">
                           <img src={live} alt="top"/>
                       </div>
                       <span>國道路況</span>
                   </a>
                </div>    
               <a className="community_icon" href="https://www.facebook.com/sharer/sharer.php?u=網址"><img src={fb_black} alt="top"/></a>
               <a className="community_icon"  href="https://social-plugins.line.me/lineit/share?text=標題&url=網址"><img src={line_black} alt="top"/></a>
            </div>  
        </div>     
        <div className="contxt scroll1">
            
            <div className="title">
                <h1>旅遊景點即時影像</h1>
            </div>
            
        </div>          
    </div>
</header>


<main>
<article>
    <div className="map_bg">
        <div className="video_fix"><div className="frame_box"></div></div>
            <div className="frame_box need_to_copy">  
                <div className="freeway_video">

                    <iframe src="https://www.youtube.com/embed/MnODaP-1JaE" frameborder="0"></iframe>
                        <div className="freeway_video_txt">
                            <div className="txt_left">
                                <h2>陽明山擎天崗</h2>
                            </div>
                            <div className="source">
                                <span>影像來源：陽明山國家公園</span>
                            </div>
                        </div>
                </div>
            </div>
    <div className="attractions_area">
        <div className="frame_box3">
            <div className="choose_area">
                <div className="triangle">
                    <div className="triangle_img">
                            <p>更多景點影像</p>
                            <img src="images/location_icon.svg" alt=""/>
                    </div>
                    <div className="location_img">
                    </div>
                </div>
                <div className="attractions_pc">
                <ul>
                    {Array.from(data.freeway_title).map((item, index) => (
                                        <li className="attractions_box">
                        <a href="##">
                            <div className="attractions_img">
                                <img src={`https://news.tvbs.com.tw/events/freeway/images/`+item+`.jpg?v=_prd`} alt="attractions"/>
                            </div>
                            
                        </a>
                        <div className="attractions_txt">
                            <h2 >{item}</h2>
                        </div>
                    </li>
                    ))}
                </ul>
                </div>

            </div>
        </div>
    </div>



        
    </div>
    <div className="issue_area">
        <div className="frame_box2">
        <div className="suggest_title"><p>推薦給您</p></div>
        <div className="issue_list">
            <div className="issue_title"><p>車壇報好康</p></div>

            <div className="issue_news">
            <div className="list">
                <ul>
                    <li>
                        <a href="#">				
                        <div className="box">
                        <div className="img">
                        <div className="list_play"></div>
                        <div className="overlay-color"></div><img src="images/20201106102127-3498d9ee.jpg"/>
                        </div>
                        <div className="txt_box">
                            <h3 className="txt">秋鬥反萊豬聲量大陳吉仲籲莫用毒豬一句話影響秋鬥反萊豬聲量大陳吉仲籲莫用毒豬一句話影響秋鬥反萊豬聲量大陳吉仲籲莫用毒豬一句話影響</h3>
                            <div className="time">1 分鐘前</div>
                        </div>
                        </div>
                        </a>
                    </li>
        
                    <li>
                        <a href="#">
                        <div className="box">
                        <div className="img">
                        <div className="overlay-color"></div><img src="images/20201106102127-3498d9ee.jpg"/>
                        </div>
                        <div className="txt_box">
                            <h3 className="txt">秋鬥反萊豬聲量大陳吉仲籲莫用毒豬一句話影響秋鬥反萊豬聲量大陳吉仲籲莫用毒豬一句話影響秋鬥反萊豬聲量大陳吉仲籲莫用毒豬一句話影響秋鬥反萊豬聲量大　陳吉仲籲莫用毒豬一句話影響</h3>
                            <div className="time">1 分鐘前</div>
                        </div>
                        </div>
                        </a>
                    </li>
        
                    <li>
                        <a href="#">
                        <div className="box">
                        <div className="img">
                        <div className="overlay-color"></div><img src="images/20201106102127-3498d9ee.jpg"/>
                        </div>
                        <div className="txt_box">
                            <h3 className="txt">秋鬥反萊豬聲量大陳吉仲籲莫用毒豬一句話影響</h3>                        
                            <div className="time">1 分鐘前</div>
                        </div>
                        </div>
                        </a>
                    </li>

                    <li>
                        <a href="#">				
                        <div className="box">
                        <div className="img">
                        <div className="list_play"></div>
                        <div className="overlay-color"></div><img src="images/20201106102127-3498d9ee.jpg"/>
                        </div>
                        <div className="txt_box">
                            <h3 className="txt">秋鬥反萊豬聲量大陳吉仲籲莫用毒豬一句話影響秋鬥反萊豬聲量大陳吉仲籲莫用毒豬一句話影響秋鬥反萊豬聲量大陳吉仲籲莫用毒豬一句話影響</h3>
                            <div className="time">1 分鐘前</div>
                        </div>
                        </div>
                        </a>
                    </li>
        
                    <li>
                        <a href="#">
                        <div className="box">
                        <div className="img">
                        <div className="overlay-color"></div><img src="images/20201106102127-3498d9ee.jpg"/>
                        </div>
                        <div className="txt_box">
                            <h3 className="txt">秋鬥反萊豬聲量大陳吉仲籲莫用毒豬一句話影響秋鬥反萊豬聲量大陳吉仲籲莫用毒豬一句話影響秋鬥反萊豬聲量大陳吉仲籲莫用毒豬一句話影響秋鬥反萊豬聲量大　陳吉仲籲莫用毒豬一句話影響</h3>
                            <div className="time">1 分鐘前</div>
                        </div>
                        </div>
                        </a>
                    </li>
        
                    <li>
                        <a href="#">
                        <div className="box">
                        <div className="img">
                        <div className="overlay-color"></div><img src="images/20201106102127-3498d9ee.jpg"/>
                        </div>
                        <div className="txt_box">
                            <h3 className="txt">秋鬥反萊豬聲量大陳吉仲籲莫用毒豬一句話影響</h3>                        
                            <div className="time">1 分鐘前</div>
                        </div>
                        </div>
                        </a>
                    </li>

                </ul>
            </div>	
            </div>
            
            <div className="more">
                <a href="##"><img src="images/Icon material-keyboard-arrow-down.svg"/><span>&nbsp;&nbsp;看更多</span></a>
            </div>
        </div> 
         <div className="issue_list">
            <div className="issue_title"><p>電動車新紀元</p></div>

            <div className="issue_news">
                <div className="list">
                    <ul>
                        <li>
                            <a href="#">				
                            <div className="box">
                            <div className="img">
                            <div className="list_play"></div>
                            <div className="overlay-color"></div><img src="images/20201106102127-3498d9ee.jpg"/>
                            </div>
                            <div className="txt_box">
                                <h3 className="txt">秋鬥反萊豬聲量大陳吉仲籲莫用毒豬一句話影響秋鬥反萊豬聲量大陳吉仲籲莫用毒豬一句話影響秋鬥反萊豬聲量大陳吉仲籲莫用毒豬一句話影響</h3>
                                <div className="time">1 分鐘前</div>
                            </div>
                            </div>
                            </a>
                        </li>
            
                        <li>
                            <a href="#">
                            <div className="box">
                            <div className="img">
                            <div className="overlay-color"></div><img src="images/20201106102127-3498d9ee.jpg"/>
                            </div>
                            <div className="txt_box">
                                <h3 className="txt">秋鬥反萊豬聲量大陳吉仲籲莫用毒豬一句話影響秋鬥反萊豬聲量大陳吉仲籲莫用毒豬一句話影響秋鬥反萊豬聲量大陳吉仲籲莫用毒豬一句話影響秋鬥反萊豬聲量大　陳吉仲籲莫用毒豬一句話影響</h3>
                                <div className="time">1 分鐘前</div>
                            </div>
                            </div>
                            </a>
                        </li>
            
                        <li>
                            <a href="#">
                            <div className="box">
                            <div className="img">
                            <div className="overlay-color"></div><img src="images/20201106102127-3498d9ee.jpg"/>
                            </div>
                            <div className="txt_box">
                                <h3 className="txt">秋鬥反萊豬聲量大陳吉仲籲莫用毒豬一句話影響</h3>                        
                                <div className="time">1 分鐘前</div>
                            </div>
                            </div>
                            </a>
                        </li>
    
                        <li>
                            <a href="#">				
                            <div className="box">
                            <div className="img">
                            <div className="list_play"></div>
                            <div className="overlay-color"></div><img src="images/20201106102127-3498d9ee.jpg"/>
                            </div>
                            <div className="txt_box">
                                <h3 className="txt">秋鬥反萊豬聲量大陳吉仲籲莫用毒豬一句話影響秋鬥反萊豬聲量大陳吉仲籲莫用毒豬一句話影響秋鬥反萊豬聲量大陳吉仲籲莫用毒豬一句話影響</h3>
                                <div className="time">1 分鐘前</div>
                            </div>
                            </div>
                            </a>
                        </li>
            
                        <li>
                            <a href="#">
                            <div className="box">
                            <div className="img">
                            <div className="overlay-color"></div><img src="images/20201106102127-3498d9ee.jpg"/>
                            </div>
                            <div className="txt_box">
                                <h3 className="txt">秋鬥反萊豬聲量大陳吉仲籲莫用毒豬一句話影響秋鬥反萊豬聲量大陳吉仲籲莫用毒豬一句話影響秋鬥反萊豬聲量大陳吉仲籲莫用毒豬一句話影響秋鬥反萊豬聲量大　陳吉仲籲莫用毒豬一句話影響</h3>
                                <div className="time">1 分鐘前</div>
                            </div>
                            </div>
                            </a>
                        </li>
            
                        <li>
                            <a href="#">
                            <div className="box">
                            <div className="img">
                            <div className="overlay-color"></div><img src="images/20201106102127-3498d9ee.jpg"/>
                            </div>
                            <div className="txt_box">
                                <h3 className="txt">秋鬥反萊豬聲量大陳吉仲籲莫用毒豬一句話影響</h3>                        
                                <div className="time">1 分鐘前</div>
                            </div>
                            </div>
                            </a>
                        </li>
    
                    </ul>
                </div>	
                </div>

            <div className="more">
                <a href="##"><img src="images/Icon material-keyboard-arrow-down.svg"/><span>&nbsp;&nbsp;看更多</span></a>
            </div>
        </div>
    </div>
    </div>
</article>
</main>
<footer>
    <div className="frame_box">
        <div className="community"> 
            <a className="community_icon" href="https://www.facebook.com/sharer/sharer.php?u=網址"><img src={fb_black} alt="top"/></a>
            <a className="community_icon"  href="https://social-plugins.line.me/lineit/share?text=標題&url=網址"><img src={line_black} alt="top"/></a>
         </div>  

        <h6> © TVBS Media Inc. All Rights Reserved.<br/>台北市內湖區瑞光路451號 | 聯利媒體股份有限公司 </h6>
    </div>    
</footer>

</div>
</>
  );
}

export default AttractionsIndex;