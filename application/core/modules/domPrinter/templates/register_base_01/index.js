const register_base_01 = {
    name: "register_base_01",
    view: (section = { title: null, subtitle: null, button: { do: null, text: null }, image: { url: "#", width: "auto", height: "auto", alt: null } }) => {
        return `<div class="section_side">
                    <img src="${section.image.url}" width="${section.image.width}" height="${section.image.height}" alt="${section.image.alt}"/>
                    <h2>${section.subtitle}</h2>
                </div>
                <div class="section_side form">
                    <h1>${section.title}</h1>
                    <input type="text" placeholder="Username" name="username" required/>
                    <input type="password" placeholder="Password" name="password" required/>
                    <input type="password" placeholder="Confirm Password" name="confirm_password" required/>
                    <input type="email" placeholder="Email" name="email" required/>
                    <button action="newUserRegister">Register</button>
                </div>`;
    },
    css: () => {
        return `
                .register_base_01 {
                    color: #fff;
                    gap: 1em;
                    padding: 5em 0;
                    justify-content: space-evenly;
                }

                .register_base_01 .section_side {
                    text-align: center;
                    display: flex;
                    align-items: center;
                    gap: 1em;
                    flex: 0;
                }
                .register_base_01 .section_side.form {
                    padding: 2em;
                    box-shadow: 0 0 65px #2196f3 inset;
                    outline: .5em #0d101c solid;
                }
                
                .register_base_01 .section_side.form input {
                    background: #0d101c;
                    border: none;
                    font-size: 1em;
                    line-height: 1.5em;
                    padding: 0.25em 0.5em;
                    color: white;
                    border-left: 4px solid #2196f3;
                }
                
                .register_base_01 .section_side.form input:hover {
                    background: #2196f3;
                }
                `;
    },
    disabled: false,
    author: "-v-",
    onload: () => {
        console.log('[register_base_01 :: onload]');
    },
};

module.exports = register_base_01;
