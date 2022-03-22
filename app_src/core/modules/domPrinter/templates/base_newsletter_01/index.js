const base_newsletter_01 = {
    name: "base_newsletter_01",
    view(section = { title: null, text: null }) {
        return `<div class="section_side">
                    <h3>${section.title}</h3>
                    <p>${section.text}</p>
                </div>
                <div class="section_side">
                    <input type="text"/>
                    <button />SignUp</button>
                </div>`;
    },
    css() {
        return `                
                .base_newsletter_01 {
                    padding: 2em;
                    margin: 0 auto;
                }

                .base_newsletter_01 .section_side {
                    max-width: 50%;
                    display: flex;
                    flex-direction: column;
                    gap: 1em;
                    flex: 1;
                }

                .base_newsletter_01 h3 {
                    font-size: 1.25em;
                    color: #03A9F4;
                    display: inline-flex;
                    background: #ffffff1a;
                    width: fit-content;
                    box-shadow: 0 5px 10px black;
                }

                .base_newsletter_01 p {
                    display: inline-flex;
                    background: #ffffff1a;
                    width: fit-content;
                    box-shadow: 0 5px 10px black;
                }

                .base_newsletter_01 input[type="text"] {
                    font-size: 1em;
                    padding: 1em;
                    background: #00000042;
                    outline: none;
                    color: white;
                    border: none;
                    border: 1px solid #03A9F4;
                    font-weight: bold;
                }

                .base_newsletter_01 button {
                    width: fit-content;
                    margin: 0 auto;
                    font-size: 1.15em;
                    font-weight: bold;
                    background: #03A9F4;
                    color: white;
                    padding: .5em 1.5em;
                    border-radius: 0;
                    box-shadow: 0 2px 5px black;
                    text-shadow: 0 0 2px black;
                }
                `;
    },
    disabled: false,
    author: "-v-"
};


module.exports = base_newsletter_01;
