var config = {
    style: 'mapbox://styles/josephbenita/clkckmnbo001u01pcesvo1p3h',
    accessToken: 'pk.eyJ1Ijoiam9zZXBoYmVuaXRhIiwiYSI6ImNrbjY1cGVpbzA1NGkzMm56ODBtYWFxdmYifQ.6TS9XHdQFp7eDSsiv70xiw',
    showMarkers: false,
    theme: 'light',
    title: 'Je pars pour faire le tour du monde',
    subtitle: '',
    use3dTerrain: true,
    byline: '',
    description: '',
    footer: 'Joseph Benita - <a href="mailto:joseph@benita.cc">joseph@benita.cc</a>',
    chapters: [
        {
            id: '1',
            alignment: 'right',
            title: 'De Jean François de Galaup au Comte de Lapérouse',
            image: '',
            imageCredit:'',
            description: '<left><span class="image main"><img src="images/asm_ad/Sarah.png" alt=""  style="width:100px;height:100px;" /></span></left><left><span class="image main"><img src="images/asm_ad/Manon.png" alt=""  style="width:100px;height:100px;" /></span></left>  <p>This tutorial demonstrates how to use <a href="https://github.com/mapbox/storytelling">Mapbox Storytelling</a> with our previous web mapping example. Here we will use Mapbox storytelling template to first, give an overview of the decrease in subway usage around the city, and second, zoom into three different locations that exemplify the diversity of conditions around New York.</p><p>We will use the <a href="https://pointsunknown.nyc/web%20mapping/mapbox/2020/03/25/10_WebmappingTurnstileData.html">previous web map displaying MTA turnstile data</a> as the basis for our story. In this process we will use Mapbox GL JS, as well as Intersection Observer and Scrollama as our main JavaScript libraries.</p><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In harum natus eos cum rem iure aperiam omnis distinctio illo quis, sunt nesciunt sint impedit deleniti dolor saepe necessitatibus eligendi aut?</p><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In harum natus eos cum rem iure aperiam omnis distinctio illo quis, sunt nesciunt sint impedit deleniti dolor saepe necessitatibus eligendi aut?</p>',
            location: {
                center: [4.53259, 16.49463],
                zoom: 3.49,
                pitch: 0,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'sahel-adm2-ch-cour',
                    opacity: 0.8
                },
                {
                    layer: 'ne-10m-time-zones-2',
                    opacity: 0.6
                }
            ],
            onChapterExit: [
                {
                    layer: 'sahel-adm2-ch-cour',
                    opacity: 0
                },
                {
                    layer: 'ne-10m-time-zones-2',
                    opacity: 0
                }
            ]
        },
        {
            id: '2',
            alignment: 'left',
            title: 'Global situation',
            image: '',
            imageCredit:'iMMAP',
            description: '<left><span class="image main"><img src="images/asm_ad/Figure_SVG.svg" alt=""  style="width:50%;height:50%;" /></span></left>',
            location: {
                center: [4.53259, 16.49463],
                zoom: 3.49,
                pitch: 0,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'cliwoc-all',
                    opacity: 0.1
                },
                {
                    layer: 'ne-10m-time-zones-2',
                    opacity: 0.6
                }
            ],
            onChapterExit: [
                {
                    layer: 'cliwoc-all',
                    opacity: 0
                },
                {
                    layer: 'ne-10m-time-zones-2',
                    opacity: 0
                }
            ]
        },
        {
            id: 'intro2',
            alignment: 'right',
            title: 'Current strategy',
            image: '',
            imageCredit:'',
            description: '<iframe width="560" height="315" src="https://www.youtube.com/embed/le-e37ZMck8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            location: {
                center: [53.72, 3.17],
                zoom: 2.93,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'afrique-continent-wb',
                    opacity: .7
                }
            ],
            onChapterExit: [
                {                
                    layer: 'afrique-continent-wb',
                    opacity: 0
                }
            ]
        },
        {
            id: 'hidden1',
            hidden:'true',
            alignment: 'right',
            title: '',
            image: '',
            description: '',
            location: {
                center: [-3.87036, 14.45513],
                zoom: 4.57,
                pitch: 0.00,
                bearing: 0.00
            },
        },
        {
            id: 'intro3',
            alignment: 'right',
            title: 'Current missions',
            image: '',
            description: '<iframe title="CMR_MSNA_Région du Centre_v1" width="570" height="270.5" src="https://app.powerbi.com/reportEmbed?reportId=f7500302-ed84-449a-a4b1-c704be6fc610&autoAuth=true&ctid=f6f70f1b-2a2d-4f30-852a-64b8ce0c19d7" frameborder="0" allowFullScreen="true"></iframe>',
            location: {
                center: [53.72, 3.17],
                zoom: 2.93,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'country-boundaries_all',
                    opacity: .5
                }
            ],
            onChapterExit: [
                {
                    layer: 'country-boundaries_all',
                    opacity: .0
                }
            ]
        },
        {
            id: 'mali_intro',
            alignment: 'right',
            title: 'Mali',
            image: '',
            description: '<left><span class="image main"><img src="images/asm_ad/Jonathan.png" alt=""  style="width:100px;height:100px;" /></span></left><left><span class="image main"><img src="images/asm_ad/Joseph.png" alt=""  style="width:100px;height:100px;" /></span></left><p>This tutorial demonstrates how to use <a href="https://immap.sharepoint.com/:p:/r/sites/Africa1/_layouts/15/Doc.aspx?sourcedoc=%7B2C4D4121-8D13-4AD7-8708-2EACB6246132%7D&file=iMMAP%20Presentation_English_External_IMWG_v3_IMWG%20Dakar_220923.pptx&action=embedview" target="_blank">Présentation Mali</a> with our previous web mapping example. Here we will use Mapbox storytelling template to first, give an overview of the decrease in subway usage around the city, and second, zoom into three different locations that exemplify the diversity of conditions around New York.</p><p>We will use the <a href="https://pointsunknown.nyc/web%20mapping/mapbox/2020/03/25/10_WebmappingTurnstileData.html">previous web map displaying MTA turnstile data</a> as the basis for our story. In this process we will use Mapbox GL JS, as well as Intersection Observer and Scrollama as our main JavaScript libraries.</p><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In harum natus eos cum rem iure aperiam omnis distinctio illo quis, sunt nesciunt sint impedit deleniti dolor saepe necessitatibus eligendi aut?</p><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In harum natus eos cum rem iure aperiam omnis distinctio illo quis, sunt nesciunt sint impedit deleniti dolor saepe necessitatibus eligendi aut?</p>',
            location: {
                center: [4.33, 17.11],
                zoom: 4.70,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'country-boundaries_mli',
                    opacity: 0.5
                },
                {
                    layer: 'mali-poi',
                    opacity: 0.8
                },
                {
                    layer: 'mali-poi-label',
                    opacity: 0.8
                }
            ],
            onChapterExit: [
                {
                    layer: 'country-boundaries_mli',
                    opacity: 0
                },
                {
                    layer: 'mali-poi',
                    opacity: 0
                },
                {
                    layer: 'mali-poi-label',
                    opacity: 0
                }
            ]
        },
        {
            id: 'nigeria_intro',
            alignment: 'right',
            title: 'Nigeria',
            image: '',
            description: '<left><span class="image main"><img src="images/asm_ad/Arie.png" alt=""  style="width:100px;height:100px;" /></span></left><left><span class="image main"><img src="images/asm_ad/Hany.png" alt=""  style="width:100px;height:100px;" /></span></left><p>This tutorial demonstrates how to use <a href="https://github.com/mapbox/storytelling">Mapbox Storytelling</a> with our previous web mapping example. Here we will use Mapbox storytelling template to first, give an overview of the decrease in subway usage around the city, and second, zoom into three different locations that exemplify the diversity of conditions around New York.</p><p>We will use the <a href="https://pointsunknown.nyc/web%20mapping/mapbox/2020/03/25/10_WebmappingTurnstileData.html">previous web map displaying MTA turnstile data</a> as the basis for our story. In this process we will use Mapbox GL JS, as well as Intersection Observer and Scrollama as our main JavaScript libraries.</p><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In harum natus eos cum rem iure aperiam omnis distinctio illo quis, sunt nesciunt sint impedit deleniti dolor saepe necessitatibus eligendi aut?</p><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In harum natus eos cum rem iure aperiam omnis distinctio illo quis, sunt nesciunt sint impedit deleniti dolor saepe necessitatibus eligendi aut?</p>',
            location: {
                center: [14.30, 10.10],
                zoom: 5.27,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'country-boundaries_nga',
                    opacity: 0.8
                }
            ],
            onChapterExit: [
                {
                    layer: 'country-boundaries_nga',
                    opacity: 0
                }
            ]
        },
        {
            id: 'cmr_intro',
            alignment: 'right',
            title: 'Cameroon',
            image: '',
            description: '<left><span class="image main"><img src="images/asm_ad/Walter.png" alt=""  style="width:100px;height:100px;" /></span></left>',
            location: {
                center: [19.2, 7.3],
                zoom: 5.27,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'country-boundaries_cmr',
                    opacity: 0.8
                }
            ],
            onChapterExit: [
                {
                    layer: 'country-boundaries_cmr',
                    opacity: 0
                }
            ]
        },
        {
            id: 'eth_intro',
            alignment: 'right',
            title: 'Ethiopia',
            image: '',
            description: '<left><span class="image main"><img src="images/asm_ad/Janet.png" alt=""  style="width:100px;height:100px;" /></span></left><left><span class="image main"><img src="images/asm_ad/David.png" alt=""  style="width:100px;height:100px;" /> </span></left><p>This tutorial demonstrates how to use <a href="https://github.com/mapbox/storytelling">Mapbox Storytelling</a> with our previous web mapping example. Here we will use Mapbox storytelling template to first, give an overview of the decrease in subway usage around the city, and second, zoom into three different locations that exemplify the diversity of conditions around New York.</p><p>We will use the <a href="https://pointsunknown.nyc/web%20mapping/mapbox/2020/03/25/10_WebmappingTurnstileData.html">previous web map displaying MTA turnstile data</a> as the basis for our story. In this process we will use Mapbox GL JS, as well as Intersection Observer and Scrollama as our main JavaScript libraries.</p><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In harum natus eos cum rem iure aperiam omnis distinctio illo quis, sunt nesciunt sint impedit deleniti dolor saepe necessitatibus eligendi aut?</p><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In harum natus eos cum rem iure aperiam omnis distinctio illo quis, sunt nesciunt sint impedit deleniti dolor saepe necessitatibus eligendi aut?</p><left><span class="image main"><img src="images/asm_ad/image1.png" alt=""  style="width:843px;height:493.5px;" /></span></left>',
            location: {
                center: [46.03, 9.43],
                zoom: 5.27,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'country-boundaries_eth',
                    opacity: 0.8
                }
            ],
            onChapterExit: [
                {
                    layer: 'country-boundaries_eth',
                    opacity: 0
                }
            ]
        },
        {
            id: 'intro4',
            alignment: 'right',
            title: 'Missions closed',
            image: '',
            description: '',
            location: {
                center: [53.72, 3.17],
                zoom: 2.93,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                layer: 'country-boundaries_closed',
                opacity: .5
                }
            ],
            onChapterExit: [
                {
                layer: 'country-boundaries_closed',
                opacity: .0
                }
            ]
        },
        {
            id: 'bfa',
            alignment: 'right',
            title: 'Burkina Faso',
            image: '',
            description: '',
            location: {
                center: [2.01, 12.44],
                zoom: 6.42,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                layer: 'country-boundaries_closed',
                opacity: .5
                }
            ],
            onChapterExit: [
                {
                layer: 'country-boundaries_closed',
                opacity: .0
                }
            ]
        },
        {
            id: 'mz',
            alignment: 'right',
            title: 'Malawi',
            image: '',
            description: '',
            location: {
                center: [39.46, -12.94],
                zoom: 5.99,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                layer: 'country-boundaries_closed',
                opacity: .5
                }
            ],
            onChapterExit: [
                {
                layer: 'country-boundaries_closed',
                opacity: .0
                }
            ]
        },
        {
            id: 'staff',
            alignment: 'right',
            title: 'Current key staff distribution',
            description: '...',
            location: {
                center: [28.58, 27.14],
                zoom: 3.27,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'key-staff-label',
                    opacity: 1
                },
                {
                    layer: 'key-staff-poi',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'key-staff-label',
                    opacity: 0
                },
                {
                    layer: 'key-staff-poi',
                    opacity: 0
                }
            ]
        }
    ]
};
