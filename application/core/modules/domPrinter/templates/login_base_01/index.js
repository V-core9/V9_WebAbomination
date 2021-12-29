const login_base_01 = {
    name: "login_base_01",
    view: (section = { title: null, subtitle: null, button: { do: null, text: null }, image: { url: "#", width: "auto", height: "auto", alt: null } }) => {
        return `
                <div class="section_side">
                    <img src="${section.image.url}" width="65%" height="100%" alt="${section.image.alt}"/>
                    <h1>${section.title}</h1>
                    <input type="text" placeholder="Username" name="username" required/>
                    <input type="password" placeholder="Password" name="password" required/>
                    <button action="loginUser">Login</button>
                </div>
                `;
    },
    css: () => {
        return `
                .login_base_01 {
                    color: #fff;
                    gap: 1em;
                    padding: 0;
                    justify-content: space-evenly;
                }

                .login_base_01 .section_side {
                    text-align: center;
                    display: flex;
                    align-items: center;
                    gap: 1em;
                    flex: 0;
                    padding: 1em;
                    box-shadow: 0 0 65px #2196f3 inset;
                    outline: .5em #0d101c solid;
                }
                
                .login_base_01 .section_side input {
                    background: #0d101c;
                    border: none;
                    font-size: 1em;
                    line-height: 1.5em;
                    padding: 0.25em 0.5em;
                    color: white;
                    border-left: 4px solid #2196f3;
                }
                
                .login_base_01 .section_side input:hover {
                    background: #2196f3;
                }
                `;
    },
    disabled: false,
    author: "-v-",
    onload: () => {
        console.log('[login_base_01 :: onload]');
    },
};

module.exports = login_base_01;
