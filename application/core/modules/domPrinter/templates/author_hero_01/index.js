const V_Logo = require("../../../V_Logo");

const author_hero_01 = {
    name: "author_hero_01",
    view: (data) => {
        return `    
                <div class="card-container">
                    <span class="pro">PRO</span>
                    <img class="round" src="${data.img}" alt="user"/>
                    <h3>${data.name}</h3>
                    <h6>${data.location}</h6>
                    <p>${data.description}</p>
                    <div class="buttons">
                    <button class="primary">Message</button>
                    <button class="primary ghost">Following</button>
                    </div>
                    <div class="skills">
                    <h6>Skills</h6>
                    <ul>
                        <li>UI / UX</li>
                        <li>Frontend Development</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>React</li>
                        <li>Node</li>
                    </ul>
                    </div>
                </div>
                `;
    },
    css: () => {
        return `
                * {
                box-sizing: border-box;
                }
                
                body {
                    background-color: #28223f;
                    font-family: Montserrat, sans- serif;
                    
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    
                    min-height: 100vh;
                    margin: 0;
                } 
                    
                h3 {
                    margin: 10px 0;
                }
                    
                h6 {
                    margin: 5px 0;
                    text-transform: uppercase;
                }
                    
                p {
                    font-size: 14px;
                    line-height: 21px;
                }
                
                .card-container {
                    background-color: #231e39;
                    border-radius: 5px;
                    box-shadow: 0px 10px 20px -10px rgba(0, 0, 0, 0.75);
                    color: #b3b8cd; 
                    padding-top: 30px;
                    position: relative;
                    width: 350px;
                    max-width: 100%;
                    text-align: center;
                } 
                
                .card-container .pro {
                    colnor: #231e39;
                    background-color; #febb0b;
                    border-radius: 3px;
                    font-size: 14px;
                    font-weight: bold;
                    padding: 3px 7px;
                    position: absolute;
                    top: 30px;
                    left: 30px; 
                
                }
                
                .card-container .round {
                    border: 1px solid #03bfcb;
                    border-radius: 50%;
                    padding: 7px;
                }
                
                button.primary {
                    background-color: #03bfcb;
                    border: 1px solid #03bfcb;
                    border-radius: 3px;
                    color: #231e39;
                    font-family: Montserrat, sans-serif;
                    font-weight: 500;
                    padding: 10px 25px;
                }
                
                button.primary.ghost {
                    background-color: transparent;
                    color: #02899c;
                }
                
                .skills {
                    background-color: #1f1a36;
                    text-align: left;
                    padding: 15px;
                    margin-top: 30px; 
                }
                .skills ul {
                    
                list-style-type: none;
                    margin: 0;
                    padding: 0;
                }
                
                .skills ul li {
                    border: 1px solid #2d2747;
                    border-radius: 2px;
                    display: inline-block;
                    font-size: 12px;
                    margin: 0 7px 7px 0;
                    padding: 7px;
                }
            `;
    },
    disabled: false,
    author: "-v-",
    onload: () => {
        console.log('[author_hero_01 :: onload]');
        setTimeout(() => {
            V_Logo.printLogo('v_logo');
        }, 300);
    }
};

module.exports = author_hero_01;
