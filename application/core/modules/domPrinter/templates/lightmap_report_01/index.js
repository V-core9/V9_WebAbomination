const lightmap_report_01 = {
    name: "lightmap_report_01",
    view: (data) => {

        return `
            <header>
                <h1>🕯 LightMap : </h1>
                <h2>Execution Time <span>${data.execTime / 1000}s</span></h2>
            </header>
            <div id="lightmap_results">
            </div>
            <footer>
                <v_block>
                    <v_text>Generated with <a href="https://npmjs.com/package/v_lightmapper">V_LightMapper</a>.</v_text>
                </v_block>
            </footer>`;
    },
    css: () => {
        return `
                .lightmap_report_01 {
                    gap: 1em;
                    color: #fff;
                    display: flex;
                    flex-direction: column;
                    padding: 0;
                    flex: 1;
                    background: #101525;
                }
    
                #lightmap_results {
                    display: flex;
                    flex-direction: column;
                    padding: 1em;
                    border: 1px solid #1f2538;
                    color: #fff;
                    gap: 0.25em;
                    flex: 1;
                }
    
                #lightmap_results item {
                    border: 1px solid #1f2538;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 0.25em .5em;
                }
    
    
                #lightmap_results item:hover {
                    background: #2196f330;
                }
    
                #lightmap_results item name,
                #lightmap_results item score {
                    flex: 1;
                    display: flex;
                    justify-content: space-between;
                    gap: 1em;
                    align-items: center;
                    font-size: 14px;
                }
    
                [type='good'] {
                    color: lime;
                }
    
                [type='avg'] {
                    color: orange;
                }
    
                [type='bad'] {
                    color: red;
                }
    
                #lightmap_results item score>* {
                    display: flex;
                    flex: 1;
                    justify-content: center;
                    border-left: 1px solid;
                    font-size: 14px;
                    text-align: center;
                }
    
                #lightmap_results item score>[type='bad'] {
                    background: #ff00001a;
                    border: none;
                }
    
                #lightmap_results item score>[type='good'] {
                    background: #33ff001a;
                    border: none;
                }
    
                #lightmap_results item score>[type='avg'] {
                    background: #ffc8001a;
                    border: none;
                }
    
                header {
                    background: #1f2538;
                    display: flex;
                    padding: 1em;
                    align-items: center;
                    justify-content: space-between;
                }
    
                footer {
                    display: flex;
                    align-items: center;
                    justify-content: flex-end;
                    padding: 1em;
                    background: #1f2538;
                }
    
                body #lightmap_results>item:nth-child(1) name,
                body #lightmap_results>item:nth-child(1) score {
                    font-size: 22px;
                    font-weight: bold;
                    text-shadow: 0 0 5px black;
                    padding: .5em;
                    border: none;
                    background: #101525;
                }
    
                #lightmap_results>item name {
                    padding: 0.25em 1em;
                }
    
                header * {
                    margin: 0;
                }
    
                body #lightmap_results>item:nth-child(1) {
                    border: none;
                }
    
                body #lightmap_results>item:nth-child(1):hover {
                    background: transparent;
                }
    
                header h2 {
                    font-size: 1em;
                    color: #898989;
                }
                
                a {
                    color: #2196f3;
                }
                
                header h2 span {
                    background: #2196f3;
                    padding: .25em 0.5em;
                    color: white;
                }
                `;
    },
    disabled: false,
    author: "-v-",
    onload: () => {
        const scores = {
            good: 90,
            avg: 70,
            bad: 50
        };
        
        console.log('[lightmap_report_01 :: onload]');

        const results = JSON.parse(document.querySelector('meta[name="Vc9_Page"]').getAttribute('content')).sections[1].data;

        console.log(results);

        var domRes = `<item>
                        <name>Page URL</name>
                        <score>
                            <perf>Performance</perf>
                            <bp>Best-Practices</bp>
                            <seo>SEO</seo>
                            <acc>Accessibility</acc>
                            <pwa>PWA</pwa>
                        </score>
                    </item>`;

        score_to_word = (numb) => {
            return (numb > scores.avg) ? (numb > scores.good) ? 'good' : 'avg' : 'bad';
        };

        results.pageRes.forEach(item => {
            console.log(item);
            domRes += `<item>
                        <name><a href="${item.name}">${item.name}</a></name>
                        <score>
                            <perf type="${score_to_word(item.perf)}">${item.perf}</perf>
                            <bp type="${score_to_word(item.bp)}">${item.bp}</bp>
                            <seo type="${score_to_word(item.seo)}">${item.seo}</seo>
                            <acc type="${score_to_word(item.acc)}">${item.acc}</acc>
                            <pwa type="${score_to_word(item.pwa)}">${item.pwa}</pwa>
                        </score>
                    </item>`;
        });

        setTimeout(() => {
            document.querySelector("#lightmap_results").insertAdjacentHTML('beforeend', domRes);
        }, 500);
    },
};

module.exports = lightmap_report_01;
