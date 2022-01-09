const V_Logo = require("../../../V_Logo");

const support_chat_01 = {
    name: "support_chat_01",
    view: () => {
        return `
            <div class="XcriptLiveChatHelp" id='XcriptMain' >
            <div class="frontPart">
                <div class="defaultTemplate">
                <p class="primary">Need Help?</p>
                <p class="secondary" action="toggleChat">Open Chat</p>
                <p class="opened"><span class="userName" title="IT Support - Level 1">Miki UserName</span><span class="companyName">YeaCompany</span><span class="minIcon" action="toggleChat" title="Minimize Chat">_</span></p>
                <img src="/assets/gif.gif">
                </div>
            </div>
            <div class="backPart">
                <div class="messagesArea">
                <div class="singleMessage">
                    <div class="whoSent">
                    <h3>UserName</h3>
                    <p>11:34</p>
                    </div>
                    <div class="content">
                    <p>Hello</p>
                    </div>
                </div>
                <div class="singleMessage owned">
                    <div class="whoSent">
                    <h3>UserName</h3>
                    <p>11:34</p>
                    </div>
                    <div class="content">
                    <p>Fuk You Idiot I have Big pRoblems</p>
                    </div>
                </div>
                <div class="singleMessage owned">
                    <div class="whoSent">
                    <h3>UserName</h3>
                    <p>11:34</p>
                    </div>
                    <div class="content">
                    <p>Tell me how to fix it</p>
                    </div>
                </div>
                <div class="singleMessage">
                    <div class="whoSent">
                    <h3>UserName</h3>
                    <p>11:34</p>
                    </div>
                    <div class="content">
                    <p>Some random generated text that I actaully just made up while writting for the testing of things.</p>
                    </div>
                </div>
                <div class="singleMessage owned">
                    <div class="whoSent">
                    <h3>UserName</h3>
                    <p>11:34</p>
                    </div>
                    <div class="content">
                    <p>Hello</p>
                    </div>
                </div>
                <div class="singleMessage">
                    <div class="whoSent">
                    <h3>UserName</h3>
                    <p>11:34</p>
                    </div>
                    <div class="content">
                    <p>Hello</p>
                    </div>
                </div>
                <div class="singleMessage owned">
                    <div class="whoSent">
                    <h3>UserName</h3>
                    <p>11:34</p>
                    </div>
                    <div class="content">
                    <p>Fuk You Idiot I have Big pRoblems</p>
                    </div>
                </div>
                <div class="singleMessage owned">
                    <div class="whoSent">
                    <h3>UserName</h3>
                    <p>11:34</p>
                    </div>
                    <div class="content">
                    <p>Tell me how to fix it</p>
                    </div>
                </div>
                <div class="singleMessage">
                    <div class="whoSent">
                    <h3>UserName</h3>
                    <p>11:34</p>
                    </div>
                    <div class="content">
                    <p>Some random generated text that I actaully just made up while writting for the testing of things.</p>
                    </div>
                </div>
                <div class="singleMessage owned">
                    <div class="whoSent">
                    <h3>UserName</h3>
                    <p>11:34</p>
                    </div>
                    <div class="content">
                    <p>Hello</p>
                    </div>
                </div>
                </div>
                <div class="XcriptChatForm">
                    <div class="attachFileButton">
                    <svg class="uploadButton" viewBox="0 0 500 500">
                        <g fill-rule="evenodd">
                        <path d="M 113,416 C -30,395 -25,235 70,195 C 60,30 275,5 324,135 C 380,85 460,155 422,220 C 525,240 525,405 409,415 Z M 267,250 L 326,250 C 333,248, 334,240 331,237 L 240,146 C 237,142 229,142 226,146 L 138,235 C 131,240 135,249 142,250 L 201,250 L 201,341 C 201,345 205,349 209,349 L 259,349 C 263,349 267,345 267,341 Z"></path>
                        </g>
                    </svg>
                    </div>
                    <input type="text" name="messageContent" id='mainMessageContent'>
                    <button class="sendMessage" action="demoMessage">
                    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                        <g fill="none" fill-rule="evenodd" transform="translate(1 1)">
                        <path d="m20 38v-12h-12l25-13-13 25">
                        </path>
                        <circle cx="23" cy="23" r="23">
                        </circle>            
                        </g>
                    </svg>
                </button>
                </div>
            </div>
        </div>`;
    },
    css: () => {
        return `
            .XcriptLiveChatHelp {
                position: fixed;
                bottom: 15px;
                right: 15px;
                max-width: 200px;
                transition: .75s ease-in-out all;
                font-family: monospace;
            }
            .XcriptLiveChatHelp.showXcriptChat {
                max-width: 400px;
                width: 100%;
                transition: .5s ease-in-out all;
            }
            
            .frontPart .defaultTemplate {
                display: flex;
                background: #070a14;
                padding: 0 10px 0 15px;
                border-radius: 25px;
                font-family: monospace;
                transition: 0.25s ease-in-out all;
                cursor: pointer;
                position: relative;
                min-height: 2.5em;
            }
            
            .frontPart .defaultTemplate img {
                max-width: 60px;
                max-height: 60px;
                border: 3px solid #070a14;
                border-radius: 50%;
                transition: 0.25s ease-in-out all;
                position: absolute;
                top: -10px;
                left: calc(100% - 55px);
            }
            
            .frontPart .defaultTemplate p.primary {
                color: white;
                transition: 0s ease-in-out all;
                width: 200px;
                margin: 10px 0;
                position: relative;
                font-size: 20px;
                white-space: nowrap;
            }
            .frontPart .defaultTemplate:hover p.primary{
                width: 0;
                opacity: 0;
                overflow: hidden;
                margin: 0;
                transition: 0.35s ease-in-out all;
                position: absolute;
                white-space: nowrap;
                color: transparent;
            } 
            
            .frontPart .defaultTemplate:hover p.secondary {
                color: white;
                opacity: 1;
                width: 200px;
                margin: 10px 0;
                position: relative;
                transition: 0s ease-in-out all;
            }
            .frontPart .defaultTemplate p.secondary{
                color: transparent;
                width: 0;
                opacity: 0;
                margin: 0;
                display: block;
                overflow: hidden;
                transition: 0.35s ease-in-out all;
                position: absolute;
                font-size: 20px;
                white-space: nowrap;
            } 
            
            .frontPart .defaultTemplate:hover {
                box-shadow: 0 5px 5px 0 #444;
                transform: scale(1.02);
            }
            .showXcriptChat .frontPart .defaultTemplate{
                border-radius: 25px 25px 0px 0px;
                transition: 0.25s ease-in-out all;
            }
            
            .backPart {
                background: whitesmoke;
                border-radius: 0 0 25px 25px;
            }
            .backPart{
                height: 0px;
                width: calc(100% - 2px);
                opacity: 0;
                display: block;
                overflow: hidden;
                transition: .25s ease-in-out all;
                border: 1px solid transparent;
            }
            
            .showXcriptChat .backPart {
                height: 375px;
                opacity: 1;
                transition: .75s ease-in-out all;
                border-color: #070a14;
                background: #070a147a;
                box-shadow: 0 0 50px 40px #1c2939 inset;
            }
            
            
            .XcriptLiveChatHelp.showXcriptChat .frontPart .defaultTemplate:hover {
                box-shadow: none;
                transform: none;
            }
            .XcriptLiveChatHelp.showXcriptChat .defaultTemplate .primary,.XcriptLiveChatHelp.showXcriptChat .defaultTemplate .secondary, .XcriptLiveChatHelp.showXcriptChat .defaultTemplate:hover .primary,.XcriptLiveChatHelp.showXcriptChat .defaultTemplate:hover .secondary{
                color: transparent;
                width: 0;
                opacity: 0;
                margin: 0;
                display: block;
                overflow: hidden;
            }
            
            .showXcriptChat .frontPart .defaultTemplate img {
                left: -20px;
                transition: 0.5s ease-in-out all;
                border-width: 4px;
                z-index: 20;
            }
            .XcriptLiveChatHelp p.opened{
                font-size: 0;  
                color: transparent;
                width: 0;
                opacity: 0;
                margin: 0;
                display: block;
                overflow: hidden;
                transition: 0s ease-in-out all;
                transition-delay: 0s;
            }
            .XcriptLiveChatHelp.showXcriptChat p.opened{
                color: white;
                width: 100%;
                margin-left: 40px;
                opacity: 1;
                display: flex;
                flex-direction: column;
                align-self: center;
                transition: 0.35s ease-in-out all;
                transition-delay: 0.25s;
            }
            
            .XcriptLiveChatHelp.showXcriptChat p.opened .userName{
                font-size: 16px;  
                color: white;
            }
            .XcriptLiveChatHelp.showXcriptChat p.opened .companyName{
                font-size: 12px;  
                color: white;
            }
            
            
            
            span.minIcon {
                position: absolute;
                right: 0px;
                top: 0px;
                color: white;
                line-height: 2em;
                font-size: 20px;
                width: 42px;
                height: 42px;
                display: block;
                text-align: center;
                border-radius: 0 25px 0 0;
                cursor: pointer;
            }
            
            span.minIcon:hover {
                background: rgba(0, 0, 0, 0.15);
            }
            
            .showXcriptChat .frontPart .defaultTemplate {
                cursor: auto;
            }
            
            .singleMessage {
                display: flex;
                flex-direction: column;
                max-width: 85%;
                min-width: 55%;
                background: #101626;
                border: 1px solid #0b0d17;
                color: #fff;
                margin: 7.5px;
                border-radius: 25px;
                float: left;
                clear: both;
                overflow: hidden;
            }
            
            .whoSent {
                display: flex;
                padding: 7.5px 10px;
                background: rgba(0,0,0,0.15);
            }
            
            .whoSent p, .whoSent h3, .content p {
                margin: 0;
            }
            
            .singleMessage.owned {
                float: right;
                clear: both;
                background: #1c2939;
            }
            
            .singleMessage.owned .whoSent {
                flex-direction: row-reverse;
            }
            
            .whoSent h3 {
                font-size: 14px;
                margin: 0 10px 0;
            }
            .whoSent p {
                font-size: 10px;
                margin: 3px 10px 0 10px;
                color: #eaeaea;
            }
            
            .content {
                padding: 10px 20px;
            }
            
            .messagesArea {
                max-height: calc(100% - 50px);
                overflow-x: hidden;
                overflow-y: scroll;
                display: block;
                border-bottom: 2px solid #070a14;
            }
            
            .attachFileButton .uploadButton {
                fill: #5694b5;
                width: 30px;
                height: 27px;
                margin: 5px 0 5px 10px;
                padding: 5px;
                border-radius: 20px 0 0 20px;
                border: 1px solid lightgray;
                background: white;
                border-right: none;
            }
            .attachFileButton .uploadButton:hover {
                background: rgba(0,0,0,0.15);
            }
            .XcriptChatForm {
                display: flex;
            }
            
            .sendMessage > svg circle {
                stroke: #5694b5;
                stroke-dasharray: unset;
                stroke-width: 2px;
            }
            
            .sendMessage > svg path {
                fill: #5694b5;
            }
            
            button.sendMessage {
                margin: 5px 10px 5px 0;
                border-radius: 0 25px 25px 0;
                border: 1px solid lightgray;
                width: 40px;
                height: 39px;
                background: white;
                border-left: none;
            }
            
            input[type="text"] {
                height: 35px;
                margin: 5px 0;
                border: 1px solid lightgray;
                width: calc(100% - 100px);
                border-left: none;
                border-right: none;
            }
            
            button.sendMessage svg {
                margin-top: 2.5px;
            }
            
            button.sendMessage:hover {
                background: rgba(0,0,0,0.15);
            }
            
            
            #mainMessageContent{
                padding: 5px 10px;
                line-height: 1em;
                font-size: 18px;
                height: 27px;
            }
            
            #mainMessageContent:focus {
                outline: none;
            }
            
            .attachFileButton .uploadButton:hover, button.sendMessage:hover {
                cursor: pointer;
            }
            
            .attachFileButton .uploadButton:focus, button.sendMessage:focus {
                outline: none;
            }
            
            .attachFileButton .uploadButton:active, button.sendMessage:active {
                background: white;
            }
            
          

                `;
    },
    disabled: false,
    author: "-v-",
    onload: () => {
        console.log('[support_chat_01 :: onload]');
        setTimeout(() => {
            V_Logo.printLogo('v_logo');
        }, 300);
    }
};

module.exports = support_chat_01;
