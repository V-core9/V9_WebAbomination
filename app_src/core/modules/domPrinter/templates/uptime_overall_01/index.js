const uptime_overall_01 = {
    name: "uptime_overall_01",
    view: () => {
        return `<div class="section_side">
                    <h2>Overall Uptime</h2>
                </div>
                <div class="section_side right_align">
                    <a href="#">⚡ More Details</a>
                </div>
                <div class="section_full">
                    <div class="infoBlock">
                        <h3>100.000%</h3>
                        <p>Last 24 hours</p>
                    </div>
                    <div class="infoBlock">
                        <h3>99.921%</h3>
                        <p>Last 7 days</p>
                    </div>
                    <div class="infoBlock">
                        <h3>99.881%</h3>
                        <p>Last 30 days</p>
                    </div>
                    <div class="infoBlock">
                        <h3>99.110%</h3>
                        <p>Last 90 days</p>
                    </div>
                </div>`;
    },
    css: () => {
        return `
                .uptime_overall_01 {
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
                    flex-wrap: wrap;
                }

                .uptime_overall_01 .section_side {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    gap: 1em;
                }

                .uptime_overall_01 .section_side h1, .uptime_overall_01 .section_side p {
                    margin: 0;
                }

                .uptime_overall_01 .section_full {
                    width: 100%;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-around;
                    gap: 2em;
                }

                .uptime_overall_01 .section_full .infoBlock {
                    padding: 1em;
                    background: #141d2c;
                    color: #2196f3;
                    flex: 1;
                    text-align: center;
                }

                .uptime_overall_01 .section_full .infoBlock p {
                    color: #6a7e95;
                }
                
                
                
                .uptime_overall_01 .section_side.right_align {
                    justify-content: flex-end;
                }
                `;
    },
    disabled: false,
    author: "-v-",
    onload: () => {
        console.log('[uptime_overall_01 :: onload]');
    },
};

module.exports = uptime_overall_01;
