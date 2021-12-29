const login_base_01 = {
    name: "login_base_01",
    view: (section = { title: null, subtitle: null, button: { do: null, text: null }, image: { url: "#", width: "auto", height: "auto", alt: null } }) => {
        return `
                <div class="section_side">
                    <img src="${section.image.url}" width="35%" height="100%" alt="${section.image.alt}"/>
                    <h1>${section.title}</h1>
                    <v_block>
                        <label for="perm_login">Username</label>
                        <input type="text" placeholder="V_core9" name="username" required/>
                    </v_block>
                    <v_block>
                        <label for="perm_login">Password</label>
                        <input type="password" placeholder="AzQ1@4488B" name="password" required/>
                    </v_block>
                    <v_block type='row'>
                        <input type="checkbox" id="perm_login" name="perm_login" >
                        <label for="perm_login">Remember Me</label>
                    </v_block>
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
                    flex: 1;
                }

                
                .login_base_01 h1 {
                    margin: 0;
                }
                .login_base_01 .section_side {
                    text-align: center;
                    display: flex;
                    align-items: center;
                    box-shadow: 0 0 65px #2196f3 inset;
                    padding: 2em;
                    gap: 1em;
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

                @media screen and (min-width: 768px) {
                    
                    .login_base_01 {
                        color: #fff;
                        gap: 1em;
                        padding: 0;
                        justify-content: space-evenly;
                        height: auto;
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
