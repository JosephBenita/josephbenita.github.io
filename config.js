var config = {
    style: 'mapbox://styles/josephbenita/ckn65wzn700rg17rofkgal7i3',
    accessToken: 'pk.eyJ1Ijoiam9zZXBoYmVuaXRhIiwiYSI6ImNrbjY1cGVpbzA1NGkzMm56ODBtYWFxdmYifQ.6TS9XHdQFp7eDSsiv70xiw',
    showMarkers: false,
    theme: 'light',
    title: 'ASM - Africa desk presentation',
    subtitle: 'October 2022',
    byline: '',
    description: '',
    footer: 'iMMAP - Sarah Simon - <a href="mailto:ssimon@immap.org">ssimon@immap.org</a>',
    chapters: [
        {
            id: 'intro1',
            alignment: 'right',
            title: 'Global situation',
            image: '',
            imageCredit:'iMMAP',
            description: '<left><span class="image main"><img src="images/form_logo.png" alt=""  style="width:50px;height:50px;" /></span></left> <p>This tutorial demonstrates how to use <a href="https://github.com/mapbox/storytelling">Mapbox Storytelling</a> with our previous web mapping example. Here we will use Mapbox storytelling template to first, give an overview of the decrease in subway usage around the city, and second, zoom into three different locations that exemplify the diversity of conditions around New York.</p><p>We will use the <a href="https://pointsunknown.nyc/web%20mapping/mapbox/2020/03/25/10_WebmappingTurnstileData.html">previous web map displaying MTA turnstile data</a> as the basis for our story. In this process we will use Mapbox GL JS, as well as Intersection Observer and Scrollama as our main JavaScript libraries.</p><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In harum natus eos cum rem iure aperiam omnis distinctio illo quis, sunt nesciunt sint impedit deleniti dolor saepe necessitatibus eligendi aut?</p><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In harum natus eos cum rem iure aperiam omnis distinctio illo quis, sunt nesciunt sint impedit deleniti dolor saepe necessitatibus eligendi aut?</p>',
            location: {
                center: [53.72, 3.17],
                zoom: 2.93,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'ne-10m-time-zones',
                    opacity: 0.6
                },
                {
                    layer: 'ne-10m-time-zones-2',
                    opacity: 0.6
                }
            ],
            onChapterExit: [
                {
                    layer: 'ne-10m-time-zones',
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
            imageCredit:'Joseph Benita',
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
            id: 'mali_intro',
            alignment: 'right',
            title: 'Mali',
            image: '',
            description: '<left><span class="image main"><img src="images/acces/Nat.png" alt=""  style="width:500px;height:425px;" /></span></left>',
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
            description: '...',
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
            description: '...',
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
            description: '...',
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
            id: 'keystaff',
            alignment: 'right',
            title: 'Key staff distribution',
            description: '...',
            location: {
                center: [32.9, 25.8],
                zoom: 3.27,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'key-staff',
                    opacity: 1
                },
                {
                    layer: 'key-staff-label-joseph',
                    opacity: 1
                },
                {
                    layer: 'key-staff-label-jonathan',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'key-staff',
                    opacity: 0
                },
                {
                    layer: 'key-staff-label-joseph',
                    opacity: 0
                },
                {
                    layer: 'key-staff-label-jonathan',
                    opacity: 0
                }
            ]
        }
    ]
};
