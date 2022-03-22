const uptime_summary_01 = {
    name: "uptime_summary_01",
    view: () => {
        return `<div class="section_side">
                    <marker_icon type="success"></marker_icon>
                    <h1>All Systems <span type="success">operational</span></h1>
                </div>
                <div class="section_side right_align">
                    <p><a href="#">Last Downtime</a> detected 6 days ago.</p>
                </div>`;
    },
    css: () => {
        return `
                .uptime_summary_01 {
                    color: #fff;
                    gap: 1em;
                    padding: 5em 0;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    background: #0d101c;
                    padding: 2em;
                    margin: 1em;
                    box-shadow: 0 20px 30px -10px #0d101c;
                }

                .uptime_summary_01 .section_side {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    gap: 1em;
                }

                marker_icon {
                    width: 2em;
                    height: 2em;
                    background: gray;
                    border-radius: 50%;
                }
                
                marker_icon[type='success'] {
                    background: lime;
                }
                
                [type='success'] {
                    color: lime;
                }
                
                .uptime_summary_01 .section_side h1, .uptime_summary_01 .section_side p {
                    margin: 0;
                }
                
                
                
                .uptime_summary_01 .section_side.right_align {
                    justify-content: flex-end;
                }
                `;
    },
    disabled: false,
    author: "-v-",
    onload: () => {
        console.log('[uptime_summary_01 :: onload]');
    },
};

module.exports = uptime_summary_01;
