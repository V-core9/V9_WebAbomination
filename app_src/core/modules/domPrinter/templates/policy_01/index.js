const policy_01 = {
    name: "policy_01",
    view( section = { title : null , blocks : []}) {

        var blokz = '';
        for (var i = 0; i < section.blocks.length; i++) {
            blokz += `<div class="blok"><h2>${section.blocks[i].title}</h2><p>${section.blocks[i].text}</p></div>`;
        }

        return `<div class="section_full">
                    <h1>${section.title}</h1>
                    ${blokz}
                </div>`;
    },
    css() {
        return `
                .policy_01 {
                    width: 100%;
                    padding: 2em;
                }

                .policy_01 .section_full {
                    display: flex;
                    flex-direction: column;
                    gap: 3em;
                }
                
                .policy_01 .section_full .blok {
                    display: flex;
                    flex-direction: column;
                    gap: 1em;
                    border-bottom : .5em dashed #1f2e3e;
                    padding: 2.5em 1em;
                }
                
                .policy_01 .section_full .blok h2 {
                    color : #7ab2ef;
                }
                
                
                .policy_01 .section_full > h1 {
                    color: #2196f3;
                    font-weight: 900;
                    text-decoration: underline;
                }
                
                .policy_01 .section_full .blok p {
                    font-size: .75em;
                    line-height: 1.35em;
                }
                `;
    },
    disabled: false,
    author: "-v-"
};


module.exports = policy_01;
