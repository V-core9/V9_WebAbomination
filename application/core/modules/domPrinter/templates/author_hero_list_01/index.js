const V_Logo = require("../../../V_Logo");

const author_hero_list_01 = {
    name: "author_hero_list_01",
    view: (data) => {
        var resp = '<h2>List of Authors: </h2><authors>';
        data.forEach(item => {
            resp += `    
            <div class="card-container">
                <span class="pro">${item.pro}</span>
                <img class="round" src="${item.img}" alt="user"/>
                <h3>${item.name}</h3>
                <h6>${item.location}</h6>
                <p>${item.description}</p>
                <div class="buttons">
                    <button class="primary">Message</button>
                    <button class="primary ghost" href='/authors/${item.name}>View Profile</button>
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
        });
        resp += '</authors>';
        return resp;
    },
    css: () => {
        return `     
                .author_hero_list_01 {
                    padding: 1em;
                    gap: 2em;
                    flex-direction: column;
                }

                .card-container {
                    background-color: #131b2a;
                    border-radius: 1em;
                    box-shadow: 0px 10px 20px -10px rgb(0 0 0 / 75%);
                    padding: 2em;
                    position: relative;
                    text-align: center;
                    gap: 1em;
                    display: flex;
                    flex-direction: column;
                } 
                authors {
                    padding: 1em;
                    gap: 4em;
                    display: grid;
                    grid-template-columns: auto auto;
                    grid-row: auto;
                    grid-column-gap: 2em;
                    grid-row-gap: 2em;
                }
                .card-container .pro {
                    color: #e8e8e9;
                    padding: .25em .5em;
                    background: #2196f3;
                    border-radius: 3px;
                    font-size: 14px;
                    font-weight: bold;
                    position: absolute;
                    top: 30px;
                    left: 30px;                
                }
                
                .card-container .round {
                    border: 1px solid #2196f3;
                    border-radius: 50%;
                    width: 50%;
                    padding: 1em;
                    align-self: center;
                    background: #070a14;
                }
                
                button.primary {
                    background-color: #2196f3;
                    border: 1px solid #2196f3;
                    border-radius: 3px;
                    color: #fff;
                    font-weight: 500;
                    padding: 10px 25px;
                }
                
                button.primary.ghost {
                    background-color: #0000;
                    color: #fff;
                }
                
                .skills {
                    text-align: left;
                    padding: 1em;
                    margin-top: 30px;
                    display: flex;
                    flex-direction: column;
                    gap: 1em;
                    background: #111826;
                    border-radius: 1em;
                }
                .skills ul {
                    
                list-style-type: none;
                    margin: 0;
                    padding: 0;
                }
                
                .skills ul li {
                    border: 1px solid #2196f3;
                    border-radius: 2px;
                    display: inline-block;
                    font-size: 12px;
                    margin: 0 7px 7px 0;
                    padding: 1em;
                }

                .card-container p {
                    font-size: .75em;
                    line-height: 1.5em;
                }

                .buttons {
                    gap: 1em;
                    display: flex;
                    flex-direction: column;
                }

                @media screen and (min-width: 768px) {
                    
                    .author_hero_list_01 {
                        padding: 2em;
                        gap: 2em;
                    }

                    .buttons {
                        flex-direction: row;
                    }
                }
            `;
    },
    disabled: false,
    author: "-v-",
    onload: () => {
        console.log('[author_hero_list_01 :: onload]');
    }
};

module.exports = author_hero_list_01;
