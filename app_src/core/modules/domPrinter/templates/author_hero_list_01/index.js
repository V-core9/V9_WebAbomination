const author_hero_list_01 = {
    name: "author_hero_list_01",
    
    view: (data) => {
        var resp = '<h2>List of Authors: </h2><authors>';
        console.log(data);
        data.forEach(item => {
            resp += `    
            <div class="card-container">
                <span class="pro">${item.pro}</span>
                <img class="round" src="${item.img}" alt="user"/>
                <h3>${item.name}</h3>
                <h6>${item.location}</h6>
                <p>${item.description}</p>
                <div class="links">
                    <button class="ghost">
                        <icon>📩</icon>
                        <txt>Message</txt>
                    </button>
                    <button class="ghost" href='/authors/${item.name}'>
                        <icon>🙋‍♂️</icon>
                        <txt>Profile</txt>
                    </button>
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
                    padding: .5em;
                    position: relative;
                    text-align: center;
                    gap: 1em;
                    display: flex;
                    flex-direction: column;
                    outline: 1px solid #070a14;
                } 

                authors {
                    display: grid;
                    grid-template-columns: auto;
                    grid-row: auto;
                    grid-column-gap: 2em;
                    grid-row-gap: 2em;
                }

                .card-container .pro {
                    color: #e8e8e9;
                    padding: .5em .75em;
                    background: #2e455e;
                    border-radius: 1em;
                    font-size: 16px;
                    font-weight: bold;
                    position: absolute;
                    top: 1em;
                    left: 1em;
                    border: 1px solid #070a14;               
                }
                
                .card-container .round {
                    border: 1px solid #2196f3;
                    border-radius: 50%;
                    width: 50%;
                    padding: 1em;
                    align-self: center;
                    background: #070a14;
                }
                
                .ghost {
                    background-color: #2e455e;
                    border: 1px solid #070a14;
                    font-weight: normal;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex: 1;
                    min-height: 2em;
                    padding: 0;
                    box-shadow: none;
                }
                
                .skills {
                    text-align: left;
                    padding: 1em;
                    display: flex;
                    flex-direction: column;
                    gap: 1em;
                    background: #1a2636;
                    border-radius: 1em;
                }

                .skills ul {
                    padding: 0;
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.25em;
                    list-style-type: none;
                    margin: 0;
                    padding: 0;
                }
                
                .skills ul li {
                    border: 1px solid #131b2a;
                    font-size: 12px;
                    background: #2e455e;
                    padding: .5em .75em;
                }

                .card-container p {
                    font-size: .75em;
                    line-height: 1.5em;
                }

                .links {
                    gap: 1em;
                    display: flex;
                }

                @media screen and (min-width: 768px) {
                    .author_hero_list_01 {
                        gap: 2em;
                    }

                    .card-container {
                        padding: 1em;
                    }

                    .links {
                        flex-direction: row;
                    }

                    authors {
                        grid-template-columns: auto auto;
                    }
                }

                @media screen and (min-width: 1280px) {
                    authors {
                        grid-template-columns: auto auto auto;
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
