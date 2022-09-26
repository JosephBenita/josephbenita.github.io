var config = {
    style: 'mapbox://styles/josephbenita/ckn65wzn700rg17rofkgal7i3',
    accessToken: 'pk.eyJ1Ijoiam9zZXBoYmVuaXRhIiwiYSI6ImNrbjY1cGVpbzA1NGkzMm56ODBtYWFxdmYifQ.6TS9XHdQFp7eDSsiv70xiw',
    showMarkers: false,
    theme: 'light',
    title: 'ASM - Africa desk presentation',
    subtitle: 'October 2022',
    byline: '',
    description: 'whatever...',
    footer: 'iMMAP - Sarah Simon - ssimon@immap.org',
    chapters: [
        {
            id: 'intro1',
            alignment: 'right',
            title: 'Global situation',
            image: 'images/form_logo.png',
            imageCredit:'iMMAP',
            description: '<p>This tutorial demonstrates how to use <a href="https://github.com/mapbox/storytelling">Mapbox Storytelling</a> with our previous web mapping example. Here we will use Mapbox storytelling template to first, give an overview of the decrease in subway usage around the city, and second, zoom into three different locations that exemplify the diversity of conditions around New York.</p><p>We will use the <a href="https://pointsunknown.nyc/web%20mapping/mapbox/2020/03/25/10_WebmappingTurnstileData.html">previous web map displaying MTA turnstile data</a> as the basis for our story. In this process we will use Mapbox GL JS, as well as Intersection Observer and Scrollama as our main JavaScript libraries.</p><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In harum natus eos cum rem iure aperiam omnis distinctio illo quis, sunt nesciunt sint impedit deleniti dolor saepe necessitatibus eligendi aut?</p><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In harum natus eos cum rem iure aperiam omnis distinctio illo quis, sunt nesciunt sint impedit deleniti dolor saepe necessitatibus eligendi aut?</p>',
            location: {
                center: [39, 13],
                zoom: 2,
                pitch: 0.00,
                bearing: 0.00
            },
        },
        {
            id: 'intro2',
            alignment: 'right',
            title: 'Current strategy',
            image: 'images/image1.png',
            imageCredit:'Joseph Benita',
            description: 'intro',
            location: {
                center: [39, 13],
                zoom: 2,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'afrique-continent-wb',
                    opacity: .4
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
            description: 'intro',
            location: {
                center: [39, 13],
                zoom: 2,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'country-boundaries_all',
                    opacity: .5
                },
                {
                    layer: 'country-boundaries_all_line',
                    opacity: .5
                }
            ],
            onChapterExit: [
                {
                    layer: 'country-boundaries_all',
                    opacity: .0
                },
                {
                    layer: 'country-boundaries_all-line',
                    opacity: .0
                }
            ]
        },
        {
            id: 'mali_intro',
            alignment: 'right',
            title: 'Mali',
            image: '',
            description: 'Financement ECHO...',
            location: {
                center: [4.33, 17.11],
                zoom: 4.70,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'country-boundaries_mli',
                    opacity: 0.8
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
                    layer: 'key-staff-label',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'key-staff',
                    opacity: 0
                },
                {
                    layer: 'key-staff-label',
                    opacity: 0
                }
            ]
        }
    ]
};
