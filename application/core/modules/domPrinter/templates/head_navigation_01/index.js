const head_navigation_01 = {
    name: "head_navigation_01",
    view: (section = { title: null, subtitle: null, button: { do: null, text: null } }) => {
        return `<div class="section_side">
                    <a href='/' class='logo_link'><img src="/logo.svg" alt="V-core9 SVG Logo" width='30px' height='30px'/> <h1>V-core9</h1></a>
                </div>
                <div class="section_side no_flex">
                    <button action="${section.button.do}">[=]</button>
                </div>`;
    },
    css: () => {
        return `
                .head_navigation_01 {
                    background: #070a14;
                    padding: .5em;
                    color: #fff;
                    gap: 1em;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    width: 100%;
                    align-items: center;
                }

                .head_navigation_01 h1 {
                    margin: 0;
                    font-size: 18px;
                }

                .head_navigation_01 button {
                    margin: 0;
                    padding: 0.25em;
                    font-size: 16px;
                }

                .head_navigation_01 .no_flex {
                    flex:0;
                }

                .logo_link {
                    display: flex;
                    gap: .5em;
                    align-items: center;
                    color: #fff;
                    padding: 0.25em;
                    width: fit-content;
                }

                .logo_link:hover, .logo_link:active, .logo_link:focus {
                    color: white;
                    background: #2196f3;
                }
                `;
    },
    disabled: false,
    author: "-v-",
    onload: () => {
        console.log('[head_navigation_01 :: onload]');
    },
};

module.exports = head_navigation_01;
