import React, { useState, useEffect } from 'react'
// import Header from './../header';
// import {Helmet} from "react-helmet";
 import Jq from './../js/Jq';
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


function AttractionsIndex() {




  return (
<>
<Jq />
<div class="child_box"></div>
<div id="back"> 
<div id="back-img1"><img src="images/箭頭上-1.svg" alt="top"/><img class="car" src="images/Icon awesome-car-alt.svg" alt="top"/></div>
</div>
<div class="container">
<header>
    <div class="bg">
        <div class="logo_box">
            <div class="logo"><a href="https://news.tvbs.com.tw/" rel="noopener noreferrer" target="_blank"><img src="images/tvbs_black.svg" alt="logo"/></a></div>
           <div class="community">
               <div class="attractions">
                   <a href="##" >
                       <div class="live_div">
                           <img src="images/LIVE.svg" alt="top"/>
                       </div>
                       <span>國道路況</span>
                   </a>
                </div>    
               <a class="community_icon" href="https://www.facebook.com/sharer/sharer.php?u=網址"><img src="images/facebook_black.svg" alt="top"/></a>
               <a class="community_icon"  href="https://social-plugins.line.me/lineit/share?text=標題&url=網址"><img src="images/line_black.svg" alt="top"/></a>
            </div>  
        </div>     
        <div class="contxt scroll1">
            
            <div class="title">
                <h1>旅遊景點即時影像</h1>
            </div>
            
        </div>          
    </div>
</header>


<main>
<article>
    <div class="map_bg">
        <div class="video_fix"><div class="frame_box"></div></div>
            <div class="frame_box">  
                <div class="freeway_video">

                    <iframe src="https://www.youtube.com/embed/MnODaP-1JaE" frameborder="0"></iframe>
                        <div class="freeway_video_txt">
                            <div class="txt_left">
                                <h2>陽明山擎天崗</h2>
                            </div>
                            <div class="source">
                                <span>影像來源：陽明山國家公園</span>
                            </div>
                        </div>
                </div>
            </div>
    <div class="attractions_area">
        <div class="frame_box3">
            <div class="choose_area">
                <div class="triangle">
                    <div class="triangle_img">
                            <p>更多景點影像</p>
                            <img src="images/location_icon.svg" alt=""/>
                    </div>
                    <div class="location_img">
                    </div>
                </div>
                <div class="attractions_pc">
                <ul>
                    <li class="attractions_box">
                        <a href="##">
                            <div class="attractions_img">
                                <img src="./../images/武陵－京華吊橋櫻花林.jpg" alt="attractions"/>
                            </div>
                            
                        </a>
                        <div class="attractions_txt">
                            <h2 >武陵 - 京華吊橋櫻花林</h2>
                        </div>
                    </li>
                    <li class="attractions_box active">
                        <a href="##">
                            <div class="attractions_img">
                                <img src="./../images/陽明山－擎天崗草原.jpg" alt="attractions"/>
                            </div>
                            
                        </a>
                        <div class="attractions_txt">
                            <h2 >陽明山 - 擎天崗草原</h2>
                        </div>
                    </li>
                    <li class="attractions_box">
                        <a href="##">
                            <div class="attractions_img">
                                <img src="images/陽明山－遠眺七星山.jpg"/>
                            </div>
                            
                        </a>
                        <div class="attractions_txt">
                            <h2 >陽明山 - 遠眺七星山</h2>
                        </div>
                    </li>
                    <li class="attractions_box">
                        <a href="##">
                            <div class="attractions_img">
                                <img src="images/阿里山－二延平步道.jpg"/>
                            </div>
                            
                        </a>
                        <div class="attractions_txt">
                            <h2 >阿里山 - 二延平步道</h2>
                        </div>
                    </li>
                    <li class="attractions_box">
                        <a href="##">
                            <div class="attractions_img">
                                <img src="images/阿里山－太平雲梯.jpg"/>
                            </div>
                            
                        </a>
                        <div class="attractions_txt">
                            <h2 >阿里山 - 太平雲梯</h2>
                        </div>
                    </li>
                    <li class="attractions_box">
                        <a href="##">
                            <div class="attractions_img">
                                <img src="images/阿里山－牛埔仔大草原.jpg"/>
                            </div>
                            
                        </a>
                        <div class="attractions_txt">
                            <h2 >阿里山 - 牛埔仔大草原</h2>
                        </div>
                    </li>
                    <li class="attractions_box">
                        <a href="##">
                            <div class="attractions_img">
                                <img src="images/雪霸國家公園－雪見遊憩區.jpg"/>
                            </div>
                            
                        </a>
                        <div class="attractions_txt">
                            <h2 >雪霸國家公園 - 雪見遊憩區</h2>
                        </div>
                    </li>
                    <li class="attractions_box">
                        <a href="##">
                            <div class="attractions_img">
                                <img src="images/雪霸國家公園－觀霧遊憩區.jpg"/>
                            </div>
                            
                        </a>
                        <div class="attractions_txt">
                            <h2 >雪霸國家公園 - 觀霧遊憩區</h2>
                        </div>
                    </li>
                    <li class="attractions_box">
                        <a href="##">
                            <div class="attractions_img">
                                <img src="images/福壽山農場－天池景觀步道.jpg"/>
                            </div>
                            
                        </a>
                        <div class="attractions_txt">
                            <h2 >福壽山農場 - 天池景觀步道</h2>
                        </div>
                    </li>
                    <li class="attractions_box">
                        <a href="##">
                            <div class="attractions_img">
                                <img src="images/福壽山農場－鴛鴦湖步道.jpg"/>
                            </div>
                            
                        </a>
                        <div class="attractions_txt">
                            <h2 >福壽山農場 - 鴛鴦湖步道</h2>
                        </div>
                    </li>
                </ul>
                </div>

            </div>
        </div>
    </div>



        
    </div>
    <div class="issue_area">
        <div class="frame_box2">
        <div class="suggest_title"><p>推薦給您</p></div>
        <div class="issue_list">
            <div class="issue_title"><p>車壇報好康</p></div>

            <div class="issue_news">
            <div class="list">
                <ul>
                    <li>
                        <a href="#">				
                        <div class="box">
                        <div class="img">
                        <div class="list_play"></div>
                        <div class="overlay-color"></div><img src="images/20201106102127-3498d9ee.jpg"/>
                        </div>
                        <div class="txt_box">
                            <h3 class="txt">秋鬥反萊豬聲量大陳吉仲籲莫用毒豬一句話影響秋鬥反萊豬聲量大陳吉仲籲莫用毒豬一句話影響秋鬥反萊豬聲量大陳吉仲籲莫用毒豬一句話影響</h3>
                            <div class="time">1 分鐘前</div>
                        </div>
                        </div>
                        </a>
                    </li>
        
                    <li>
                        <a href="#">
                        <div class="box">
                        <div class="img">
                        <div class="overlay-color"></div><img src="images/20201106102127-3498d9ee.jpg"/>
                        </div>
                        <div class="txt_box">
                            <h3 class="txt">秋鬥反萊豬聲量大陳吉仲籲莫用毒豬一句話影響秋鬥反萊豬聲量大陳吉仲籲莫用毒豬一句話影響秋鬥反萊豬聲量大陳吉仲籲莫用毒豬一句話影響秋鬥反萊豬聲量大　陳吉仲籲莫用毒豬一句話影響</h3>
                            <div class="time">1 分鐘前</div>
                        </div>
                        </div>
                        </a>
                    </li>
        
                    <li>
                        <a href="#">
                        <div class="box">
                        <div class="img">
                        <div class="overlay-color"></div><img src="images/20201106102127-3498d9ee.jpg"/>
                        </div>
                        <div class="txt_box">
                            <h3 class="txt">秋鬥反萊豬聲量大陳吉仲籲莫用毒豬一句話影響</h3>                        
                            <div class="time">1 分鐘前</div>
                        </div>
                        </div>
                        </a>
                    </li>

                    <li>
                        <a href="#">				
                        <div class="box">
                        <div class="img">
                        <div class="list_play"></div>
                        <div class="overlay-color"></div><img src="images/20201106102127-3498d9ee.jpg"/>
                        </div>
                        <div class="txt_box">
                            <h3 class="txt">秋鬥反萊豬聲量大陳吉仲籲莫用毒豬一句話影響秋鬥反萊豬聲量大陳吉仲籲莫用毒豬一句話影響秋鬥反萊豬聲量大陳吉仲籲莫用毒豬一句話影響</h3>
                            <div class="time">1 分鐘前</div>
                        </div>
                        </div>
                        </a>
                    </li>
        
                    <li>
                        <a href="#">
                        <div class="box">
                        <div class="img">
                        <div class="overlay-color"></div><img src="images/20201106102127-3498d9ee.jpg"/>
                        </div>
                        <div class="txt_box">
                            <h3 class="txt">秋鬥反萊豬聲量大陳吉仲籲莫用毒豬一句話影響秋鬥反萊豬聲量大陳吉仲籲莫用毒豬一句話影響秋鬥反萊豬聲量大陳吉仲籲莫用毒豬一句話影響秋鬥反萊豬聲量大　陳吉仲籲莫用毒豬一句話影響</h3>
                            <div class="time">1 分鐘前</div>
                        </div>
                        </div>
                        </a>
                    </li>
        
                    <li>
                        <a href="#">
                        <div class="box">
                        <div class="img">
                        <div class="overlay-color"></div><img src="images/20201106102127-3498d9ee.jpg"/>
                        </div>
                        <div class="txt_box">
                            <h3 class="txt">秋鬥反萊豬聲量大陳吉仲籲莫用毒豬一句話影響</h3>                        
                            <div class="time">1 分鐘前</div>
                        </div>
                        </div>
                        </a>
                    </li>

                </ul>
            </div>	
            </div>
            
            <div class="more">
                <a href="##"><img src="images/Icon material-keyboard-arrow-down.svg"/><span>&nbsp;&nbsp;看更多</span></a>
            </div>
        </div> 
         <div class="issue_list">
            <div class="issue_title"><p>電動車新紀元</p></div>

            <div class="issue_news">
                <div class="list">
                    <ul>
                        <li>
                            <a href="#">				
                            <div class="box">
                            <div class="img">
                            <div class="list_play"></div>
                            <div class="overlay-color"></div><img src="images/20201106102127-3498d9ee.jpg"/>
                            </div>
                            <div class="txt_box">
                                <h3 class="txt">秋鬥反萊豬聲量大陳吉仲籲莫用毒豬一句話影響秋鬥反萊豬聲量大陳吉仲籲莫用毒豬一句話影響秋鬥反萊豬聲量大陳吉仲籲莫用毒豬一句話影響</h3>
                                <div class="time">1 分鐘前</div>
                            </div>
                            </div>
                            </a>
                        </li>
            
                        <li>
                            <a href="#">
                            <div class="box">
                            <div class="img">
                            <div class="overlay-color"></div><img src="images/20201106102127-3498d9ee.jpg"/>
                            </div>
                            <div class="txt_box">
                                <h3 class="txt">秋鬥反萊豬聲量大陳吉仲籲莫用毒豬一句話影響秋鬥反萊豬聲量大陳吉仲籲莫用毒豬一句話影響秋鬥反萊豬聲量大陳吉仲籲莫用毒豬一句話影響秋鬥反萊豬聲量大　陳吉仲籲莫用毒豬一句話影響</h3>
                                <div class="time">1 分鐘前</div>
                            </div>
                            </div>
                            </a>
                        </li>
            
                        <li>
                            <a href="#">
                            <div class="box">
                            <div class="img">
                            <div class="overlay-color"></div><img src="images/20201106102127-3498d9ee.jpg"/>
                            </div>
                            <div class="txt_box">
                                <h3 class="txt">秋鬥反萊豬聲量大陳吉仲籲莫用毒豬一句話影響</h3>                        
                                <div class="time">1 分鐘前</div>
                            </div>
                            </div>
                            </a>
                        </li>
    
                        <li>
                            <a href="#">				
                            <div class="box">
                            <div class="img">
                            <div class="list_play"></div>
                            <div class="overlay-color"></div><img src="images/20201106102127-3498d9ee.jpg"/>
                            </div>
                            <div class="txt_box">
                                <h3 class="txt">秋鬥反萊豬聲量大陳吉仲籲莫用毒豬一句話影響秋鬥反萊豬聲量大陳吉仲籲莫用毒豬一句話影響秋鬥反萊豬聲量大陳吉仲籲莫用毒豬一句話影響</h3>
                                <div class="time">1 分鐘前</div>
                            </div>
                            </div>
                            </a>
                        </li>
            
                        <li>
                            <a href="#">
                            <div class="box">
                            <div class="img">
                            <div class="overlay-color"></div><img src="images/20201106102127-3498d9ee.jpg"/>
                            </div>
                            <div class="txt_box">
                                <h3 class="txt">秋鬥反萊豬聲量大陳吉仲籲莫用毒豬一句話影響秋鬥反萊豬聲量大陳吉仲籲莫用毒豬一句話影響秋鬥反萊豬聲量大陳吉仲籲莫用毒豬一句話影響秋鬥反萊豬聲量大　陳吉仲籲莫用毒豬一句話影響</h3>
                                <div class="time">1 分鐘前</div>
                            </div>
                            </div>
                            </a>
                        </li>
            
                        <li>
                            <a href="#">
                            <div class="box">
                            <div class="img">
                            <div class="overlay-color"></div><img src="images/20201106102127-3498d9ee.jpg"/>
                            </div>
                            <div class="txt_box">
                                <h3 class="txt">秋鬥反萊豬聲量大陳吉仲籲莫用毒豬一句話影響</h3>                        
                                <div class="time">1 分鐘前</div>
                            </div>
                            </div>
                            </a>
                        </li>
    
                    </ul>
                </div>	
                </div>

            <div class="more">
                <a href="##"><img src="images/Icon material-keyboard-arrow-down.svg"/><span>&nbsp;&nbsp;看更多</span></a>
            </div>
        </div>
    </div>
    </div>
</article>
</main>
<footer>
    <div class="frame_box">
        <div class="community"> 
            <a class="community_icon" href="https://www.facebook.com/sharer/sharer.php?u=網址"><img src="images/facebook_black.svg" alt="top"/></a>
            <a class="community_icon"  href="https://social-plugins.line.me/lineit/share?text=標題&url=網址"><img src="images/line_black.svg" alt="top"/></a>
         </div>  

        <h6> © TVBS Media Inc. All Rights Reserved.<br/>台北市內湖區瑞光路451號 | 聯利媒體股份有限公司 </h6>
    </div>    
</footer>

</div>
</>
  );
}

export default AttractionsIndex;