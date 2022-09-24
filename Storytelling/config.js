var config = {
    style: 'mapbox://styles/josephbenita/ckn65wzn700rg17rofkgal7i3',
    accessToken: 'pk.eyJ1Ijoiam9zZXBoYmVuaXRhIiwiYSI6ImNrbjY1cGVpbzA1NGkzMm56ODBtYWFxdmYifQ.6TS9XHdQFp7eDSsiv70xiw',
    showMarkers: false,
    theme: 'light',
    title: '',
    subtitle: '',
    byline: '',
    footer: '',
    chapters: [
        {
            id: 'intro1',
            alignment: 'right',
            title: 'Africa desk presentation',
            image: 'storytelling/form_logo.png',
            description: 'intro',
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
            title: 'Global strategy',
            image: 'Storytelling/image1.png',
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
                {}
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
                }
            ],
            onChapterExit: [
                {
                    layer: 'afrique-continent-wb',
                    opacity: 0
                },
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
                }
            ],
            onChapterExit: [
                {
                    layer: 'country-boundaries_mli',
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
            id: 'pennypack',
            alignment: 'right',
            title: 'Pennypack Park Trails',
            description: '...',
            location: {
                center: [-75.05685, 40.06839],
                zoom: 13.73,
                pitch: 43.50,
                bearing: 96.80
            },
            onChapterEnter: [
                {
                    layer: 'pennypack',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'pennypack',
                    opacity: 0
                }
            ]
        }
    ]
};
