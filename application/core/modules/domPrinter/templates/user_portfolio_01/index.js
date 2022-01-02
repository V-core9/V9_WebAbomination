const V_Logo = require("../../../V_Logo");

const user_portfolio_01 = {
    name: "user_portfolio_01",
    view: (data) => {
        return `    
                <div class="resume">
                <div class="top">
                    <div class="container_top">
                        <div class="img">
                            <img width="150" height="150" src="${data.img}">
                        </div>
                        <info>
                            <h3 class="title">${data.name}</h3>
                            <h6 class="sub_title">${data.sub_title}</h6>
                        </info>
                    </div>
                </div>
                <div class="bottom">
                    <div class="container_bottom">
                    <div class="left">
                        <h3>PROFILE</h3>
                        <div class="left_content">
                        <div class="mark">
                            <div class="line"></div>
                            <div class="line"></div>
                            <div class="line"></div>
                        </div>
                        <div class="text">Improve your ability to find and apply for the right jobs, develop your interview skills and learn how to perform in the workplace with confidence. <br><br>At each level, tutor videos and workplace scenarios guide you through the materials, explain key language and grammar points and give you vocabulary that you can use in everyday business life.</div>
                        </div>
                        <div class="left_content contact">
                        <div class="inform">
                            <h6 class="info_title">📞 PHONE</h6>
                            <div class="info_text">0123-456-789</div>
                            <h6 class="info_title">📩 EMAIL</h6>
                            <div class="info_text">slavko.vuletic92@gmail.com</div>
                            <h6 class="info_title">🌍 WEBSITE</h6>
                            <div class="info_text">https://v-core9.com/</div>
                            <h6 class="info_title">📂 GITHUB</h6>
                            <div class="info_text">https://github.com/</div>
                            <h6 class="info_title">📢 FACEBOOK</h6>
                            <div class="info_text">https://www.facebook.com/</div>
                            <h6 class="info_title">🦜 TWITTER</h6>
                            <div class="info_text">https://www.twitter.com/</div>
                            <h6 class="info_title">🏢 LINKEDIN</h6>
                            <div class="info_text">https://www.linkedin.com/</div>
                        </div>
                        </div>
                        <h3>EXPERTISE</h3>
                        <div class="left_content">
                        <div class="mark">
                            <div class="line"></div>
                            <div class="line"></div>
                            <div class="line"></div>
                        </div>
                        <div class="ex_texts">
                            <div class="ex_text">PROJECT DESIGN</div>
                            <div class="ex_text">PRODUCT PLACEMENT</div>
                            <div class="ex_text">LAYOUT DESIGN</div>
                            <div class="ex_text">PUBLIC RELATIONS</div>
                            <div class="ex_text">PHOTOGRAPHY</div>
                            <div class="ex_text">USER INTERFACE</div>
                            <div class="ex_text">USER EXPERIENCE</div>
                        </div>
                        </div>
                    </div>
                    <div class="right">
                        <div class="main_title">
                        <div class="mark">
                            <div class="line"></div>
                            <div class="line"></div>
                            <div class="line"></div>
                        </div>
                        <h3>WORK EXPERIENCE</h3>
                        </div>
                        <div class="right_content">
                        <div class="ex_block">
                            <h6 class="dot">+</h6>
                            <div class="inform">
                            <div class="inform_top">
                                <div class="title">Blust Corporation</div>
                                <div class="date">2015 - 2016</div>
                            </div>
                            <div class="inform_bottom">
                                <h6 class="sub_title">WEB DEVELOPEMENT</h6>
                                <div class="text">A modern job calls for a modern resume. Show employers that you’re up to date and make a great first impression by selecting the right template.</div>
                            </div>
                            </div>
                        </div>
                        <div class="ex_block">
                            <h6 class="dot">+</h6>
                            <div class="inform">
                            <div class="inform_top">
                                <div class="title">Pixel Media Ind.</div>
                                <div class="date">2016 - 2018</div>
                            </div>
                            <div class="inform_bottom">
                                <h6 class="sub_title">GRAPHIC</h6>
                                <div class="text">When applying for a serious position or at a serious company, you’ll leave the best impression with a classic, professional resume. </div>
                            </div>
                            </div>
                        </div>
                        <div class="ex_block">
                            <h6 class="dot">+</h6>
                            <div class="inform">
                            <div class="inform_top">
                                <div class="title">Crown Agency</div>
                                <div class="date">2018 - 2019</div>
                            </div>
                            <div class="inform_bottom">
                                <h6 class="sub_title">ART DIRECTOR</h6>
                                <div class="text">A basic or simple resume template is often best. A modest layout can be a major strength of a good resume and will definitely not be inappropriate.</div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div class="main_title">
                        <div class="mark">
                            <div class="line"></div>
                            <div class="line"></div>
                            <div class="line"></div>
                        </div>
                        <h3>EDUCATION</h3>
                        </div>
                        <div class="right_content edu">
                        <div class="edu_block">
                            <h6 class="dot">+</h6>
                            <div class="inform">
                            <div class="title">Bachelor in Web Design</div>
                            <h6 class="sub_title">BOSTON UNIVERSITY</h6>
                            <div class="text">BU has been educating students of all kinds for more than 150 years: undergraduates, international scholars, master's and doctoral degree candidates.</div>
                            <div class="date">2010 - 2014</div>
                            </div>
                        </div>
                        <div class="edu_block">
                            <h6 class="dot">+</h6>
                            <div class="inform">
                            <div class="title">Master in Communication</div>
                            <h6 class="sub_title">HARVARD UNIVERSITY</h6>
                            <div class="text">Harvard greets people from all over the world, providing historical and general information about campus to visitors, neighbors, and the public.</div>
                            <div class="date">2014 - 2016</div>
                            </div>
                        </div>
                        <div class="edu_block">
                            <h6 class="dot">+</h6>
                            <div class="inform">
                            <div class="title">Bachelor in Web Design</div>
                            <h6 class="sub_title">BOSTON UNIVERSITY</h6>
                            <div class="text">BU has been educating students of all kinds for more than 150 years: undergraduates, international scholars, master's and doctoral degree candidates.</div>
                            <div class="date">2010 - 2014</div>
                            </div>
                        </div>
                        <div class="edu_block">
                            <h6 class="dot">+</h6>
                            <div class="inform">
                            <div class="title">Master in Communication</div>
                            <h6 class="sub_title">HARVARD UNIVERSITY</h6>
                            <div class="text">Harvard greets people from all over the world, providing historical and general information about campus to visitors, neighbors, and the public.</div>
                            <div class="date">2014 - 2016</div>
                            </div>
                        </div>
                        <div class="edu_block">
                            <h6 class="dot">+</h6>
                            <div class="inform">
                            <div class="title">Master in Communication</div>
                            <h6 class="sub_title">HARVARD UNIVERSITY</h6>
                            <div class="text">Harvard greets people from all over the world, providing historical and general information about campus to visitors, neighbors, and the public.</div>
                            <div class="date">2014 - 2016</div>
                            </div>
                        </div>
                        </div>
                        <!-- 技能-->
                        <div class="main_title">
                        <div class="mark">
                            <div class="line"></div>
                            <div class="line"></div>
                            <div class="line"></div>
                        </div>
                        <h3>SKILLS</h3>
                        </div>
                        <div class="right_content skills">
                        <div class="skill">
                            <h6 class="dot">+</h6>
                            <div class="skill_content">
                            <h6 class="title">Photoshop</h6>
                            <div class="skill_bar">
                                <div class="value_bar ps"></div>
                            </div>
                            </div>
                        </div>
                        <div class="skill">
                            <h6 class="dot">+</h6>
                            <div class="skill_content">
                            <h6 class="title">Illustrator</h6>
                            <div class="skill_bar">
                                <div class="value_bar ai"></div>
                            </div>
                            </div>
                        </div>
                        <div class="skill">
                            <h6 class="dot">+</h6>
                            <div class="skill_content">
                            <h6 class="title">Sketch</h6>
                            <div class="skill_bar">
                                <div class="value_bar sk"></div>
                            </div>
                            </div>
                        </div>
                        <div class="skill">
                            <h6 class="dot">+</h6>
                            <div class="skill_content">
                            <h6 class="title">HTML &amp; CSS</h6>
                            <div class="skill_bar">
                                <div class="value_bar hc"></div>
                            </div>
                            </div>
                        </div>
                        <div class="skill">
                            <div class="dot">+</div>
                            <div class="skill_content">
                            <h6 class="title">InDesign</h6>
                            <div class="skill_bar">
                                <div class="value_bar id"></div>
                            </div>
                            </div>
                        </div>
                        <div class="skill">
                            <h6 class="dot">+</h6>
                            <div class="skill_content">
                            <h6 class="title">After Effects</h6>
                            <div class="skill_bar">
                                <div class="value_bar ae"></div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <!-- 興趣-->
                        <div class="main_title">
                        <div class="mark">
                            <div class="line"></div>
                            <div class="line"></div>
                            <div class="line"></div>
                        </div>
                        <h3>INTERESTS &amp; HOBBY</h3>
                        </div>
                        <div class="right_content hobby">
                            <icon>🐛</icon>
                            <icon>🔐</icon>
                            <icon>🚀</icon>
                            <icon>⛲</icon>
                            <icon>🤼</icon>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                
                    
                    
                `;
    },
    css: () => {
        return `
                * {
                    position: relative;
                    vertical-align: middle;
                    letter-spacing: 0.5px;
                }
                
                h3, h6 {
                    margin: 0;
                    display: inline-block;
                    letter-spacing: 3px;
                }
                
                .mark {
                    margin: 0 15px 0 0;
                    display: inline-block;
                    transform: translateY(3px);
                }
                
                .mark .line {
                    width: 30px;
                    height: 3px;
                    background-color: #2196f3;
                    border-radius: 3px;
                    margin: 0 0 4px 0;
                    border: none;
                }
                
                .resume {
                    margin: 2em 0;
                    overflow: hidden;
                    box-shadow: 0 30px 60px 10px #000000c7;
                    background: #263b50;
                }
                
                .top {
                    background: #1b2737;
                    border: .5em solid #263b50;
                    border-radius: 4em 0 0 4em;
                }
                
                .top .container_top {
                    display: flex;
                    flex-direction: row;
                }
                
                .top .title {
                    font-size: 35px;
                    letter-spacing: 4px;
                    margin: 0 0 5px 0;
                }
                
                .top .sub_title {
                    font-size: 15px;
                    color: #e3e3e3;
                }
                
                .bottom {
                }
                
                .bottom .container_bottom {
                    display: flex;
                }
                
                .bottom .container_bottom .left {
                    display: inline-block;
                    box-sizing: border-box;
                    vertical-align: top;
                    width: 35%;
                }
                
                .bottom .container_bottom .left h3 {
                    padding: 1em;
                    font-size: 10px;
                    display: flex;
                    border: .5em solid #1b2737;
                    border-bottom: none;
                    background: #1b2737;
                    margin: 1em;
                    margin-bottom: 0;
                }
                
                .bottom .container_bottom .left .left_content.contact {
                    border: .5em solid #1b2737;
                    margin: 1em;
                }
                
                .bottom .container_bottom .left .left_content {
                    padding: 1em;
                    display: flex;
                    font-size: 10px;
                    border: .5em solid #1b2737;
                    background: #1f2e3e;
                    border-top: 0;
                    margin: 1em;
                    margin-top: 0;
                }
                
                .bottom .container_bottom .left .left_content .text {
                    font-size: 12px;
                    line-height: 15px;
                    text-decoration: none;
                    color: #fff;
                }
                
                .bottom .container_bottom .left .left_content .icons {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                }
                
                .bottom .container_bottom .left .left_content .icons i {
                    display: inline-block;
                    text-align: center;
                    font-size: 30px;
                    margin: 0 13px 0 0;
                    color: #2196f3;
                }
                
                .bottom .container_bottom .left .left_content .icons i ~ i {
                    margin-top: 4px;
                }
                
                .bottom .container_bottom .left .left_content .inform .info_title {
                    font-size: 14px;
                }
                
                .bottom .container_bottom .left .left_content .inform .info_text {
                    font-size: 12px;
                }
                
                .bottom .container_bottom .left .left_content .inform .info_title ~ .info_title {
                    margin: 15px 0 0 0;
                }
                
                .bottom .container_bottom .left .left_content .ex_texts .ex_text {
                    font-size: 12px;
                }
                
                .bottom .container_bottom .left .left_content .ex_texts .ex_text ~ .ex_text {
                    margin: 5px 0 0 0;
                }
                
                .bottom .container_bottom .right {
                    display: inline-block;
                    box-sizing: border-box;
                    width: 65%;
                    padding: .5em;
                }
                
                .bottom .container_bottom .right .main_title {
                    padding: .75em 1em;
                    background: #1b2737;
                }
                
                .bottom .container_bottom .right .dot {
                    font-size: 20px;
                    margin: 0 10px 0 0;
                }
                
                .bottom .container_bottom .right .right_content {
                    padding: .25em;
                    background: #1f2e3e;
                    border: .25em solid #1b2737;
                    border-top: none;
                    margin-bottom: 1em;
                    gap: .5em;
                }
                
                
                .bottom .container_bottom .right .right_content .ex_block {
                    display: flex;
                    padding: .5em;
                    background: #263b50;
                    border-left: 5px solid #2196f3;
                    margin: .5em;
                }
                
                .bottom .container_bottom .right .right_content .ex_block .inform .inform_top {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }
                
                .bottom .container_bottom .right .right_content .ex_block .inform .inform_top .title {
                    font-size: 14px;
                }
                
                .bottom .container_bottom .right .right_content .ex_block .inform .inform_top .date {
                    font-size: 12px;
                    background-color: rgba(33, 150, 243, 0.6);
                    padding: 0 3px;
                    color: #eee;
                }
                
                .bottom .container_bottom .right .right_content .ex_block .inform .inform_bottom .sub_title {
                    font-size: 14px;
                    margin: 3px 0;
                    color: #2196f3;
                }
                
                .bottom .container_bottom .right .right_content .ex_block .inform .inform_bottom .text {
                    font-size: 12px;
                    line-height: 15px;
                }
                
                .bottom .container_bottom .right .right_content.edu {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-evenly;
                }
                
                
                .bottom .container_bottom .right .right_content.edu .edu_block {
                    display: flex;
                    background: #263b50;
                    padding: .5em;
                    flex: 1;
                    min-width: 45%;
                }
                
                .bottom .container_bottom .right .right_content.edu .edu_block .inform .title {
                    font-size: 12px;
                }
                
                .bottom .container_bottom .right .right_content.edu .edu_block .inform h6.sub_title {
                    font-size: 12px;
                    margin: 3px 0;
                    color: #2196f3;
                }
                
                .bottom .container_bottom .right .right_content.edu .edu_block .inform .text {
                    font-size: 12px;
                    line-height: 15px;
                }
                
                .bottom .container_bottom .right .right_content.edu .edu_block .inform .date {
                    display: inline-block;
                    font-size: 12px;
                    background-color: rgba(33, 150, 243, 0.4);
                    padding: 0 3px;
                    color: #eee;
                }
                
                .bottom .container_bottom .right .right_content.skills {
                    display: flex;
                    flex-wrap: wrap;
                    background: #263b50;
                }
                
                .bottom .container_bottom .right .right_content.skills .skill {
                    display: flex;
                    padding: .5em;
                    flex: 1;
                    border: 1px solid #070a14;
                    background: #1b2737;
                }
                
                .bottom .container_bottom .right .right_content.skills .skill .dot {
                    transform: translateY(-2px);
                }
                
                .bottom .container_bottom .right .right_content.skills .skill .skill_content h6.title {
                    letter-spacing: 1px;
                }
                
                .bottom .container_bottom .right .right_content.skills .skill .skill_content .skill_bar {
                    margin-top: 5px;
                    margin-bottom: 10px;
                    width: 90px;
                    height: 8px;
                    background-color: rgba(33, 150, 243, 0.3);
                }
                
                .bottom .container_bottom .right .right_content.skills .skill .skill_content .skill_bar .value_bar {
                    height: 8px;
                    background-color: rgba(33, 150, 243, 0.6);
                }
                
                .bottom .container_bottom .right .right_content.skills .skill .skill_content .skill_bar .value_bar.ps {
                    width: 70px;
                }
                
                .bottom .container_bottom .right .right_content.skills .skill .skill_content .skill_bar .value_bar.ai {
                    width: 80px;
                }
                
                .bottom .container_bottom .right .right_content.skills .skill .skill_content .skill_bar .value_bar.sk {
                    width: 60px;
                }
                
                .bottom .container_bottom .right .right_content.skills .skill .skill_content .skill_bar .value_bar.hc {
                    width: 60px;
                }
                
                .bottom .container_bottom .right .right_content.skills .skill .skill_content .skill_bar .value_bar.id {
                    width: 60px;
                }
                
                .bottom .container_bottom .right .right_content.skills .skill .skill_content .skill_bar .value_bar.ae {
                    width: 50px;
                }
                
                .bottom .container_bottom .right .right_content.hobby {
                    margin: 0;
                    display: flex;
                    justify-content: space-between;
                    padding: 1em;
                }
                
                .bottom .container_bottom .right .right_content.hobby icon {
                    font-size: 40px;
                    padding: 0.25em;
                    background: #2077be;
                    border: 1px solid #0f1620;
                }

                .inform {
                    display: flex;
                    flex-direction: column;
                    gap: .5em;
                }

                .date {
                    background: #070a14!important;
                    padding: .5em 1em!important;
                    width: fit-content;
                }

                .img img {
                    border-radius: 50%;
                    background: #263b50;
                    border: .25em solid #1f2e3e;
                }
                
                .top .container_top info {
                    display: flex;
                    padding-left: 2em;
                    flex-direction: column;
                    justify-content: center;
                }
                
                div.img {
                    border: 5px solid #1b2737;
                    overflow: hidden;
                    border-radius: 50%;
                    outline: .75em solid #263b50;
                    background: #263b50;
                }
            `;
    },
    disabled: false,
    author: "-v-",
    onload: () => {
        console.log('[user_portfolio_01 :: onload]');
        setTimeout(() => {
            V_Logo.printLogo('v_logo');
        }, 300);
    }
};

module.exports = user_portfolio_01;
