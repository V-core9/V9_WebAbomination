const base_about_us_01 = {
    name: "base_about_us_01",
    view(section = { title: null, subtitle: null, text: null }) {
        return `<div class="section_full">
                    <h3>${section.title}</h3>
                    <h5>${section.subtitle}</h5>
                    <p>${section.text}</p>
                </div>`;
    },
    css() {
        return `<style>
                .base_about_us_01 .section_full {
                    align-items: center;
                    justify-content: center;
                    display: flex;
                    flex-direction: column;
                    padding: 2em;
                    gap: 1em;
                }
                
                .base_about_us_01 .section_full h3 {
                    color: #03a9f4;
                    font-size: 2em;
                    text-align: center;
                    letter-spacing: 2px;
                }
                
                .base_about_us_01 .section_full h5 {
                    font-size: 1.25em;
                    color: gray;
                    text-shadow: 0 0 5px black;
                    background: #00000030;
                    padding: 1em 2em;
                }
                
                .base_about_us_01 .section_full p {
                    max-width: 50%;
                    text-align: center;
                    line-height: 1.5em;
                    letter-spacing: 1px;
                    text-shadow: 0 0 10px #03a9f4;
                }
            </style>`;
    },
    disabled: false,
    author: "-v-"
};


module.exports = base_about_us_01;
