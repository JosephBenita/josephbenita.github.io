var config = {
    style: 'mapbox://styles/josephbenita/cm1eqamys02m301qy6ytvgt3v',
    accessToken: 'pk.eyJ1Ijoiam9zZXBoYmVuaXRhIiwiYSI6ImNrbjY1cGVpbzA1NGkzMm56ODBtYWFxdmYifQ.6TS9XHdQFp7eDSsiv70xiw',
    showMarkers: false,
    theme: 'light',
    title: 'Je pars pour faire le tour du monde [...]',
    subtitle: '',
    use3dTerrain: true,
    byline: '',
    description: '',
    footer: 'Joseph Benita - <a href="mailto:joseph@benita.cc">joseph@benita.cc</a>',
    chapters: [
        {
            id: '1',
            hidden:'false',
            alignment: 'right',
            title: '1',
            image: '',
            description: '',
            location: {
                center: [1.78210, 43.83676],
                zoom: 14.49,
                pitch: 0.00,
                bearing: 0.00,
                speed: 0.1
            },

        },
        {
            id: '1b',
            alignment: 'right',
            title: 'A partir de Saint Géry',
            image: '',
            description: '',
            location: {
                center: [1.78210, 43.83676],
                zoom: 14.49,
                pitch: 0.00,
                bearing: 0.00,
                speed: 12000
            },
            
            onChapterEnter: [
                {
                    layer: 'st-gery-parcelles',
                    opacity: 0.5
                },
                {
                    layer: '',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'st-gery-parcelles',
                    opacity: 0
                },
                {
                    layer: '',
                    opacity: 0
                }
            ]
        },
        {
            id: '2',
            alignment: 'right',
            title: '2',
            image: '',
            imageCredit:'',
            description: '<left><span class="image main"><img src="laperouse/laperouse.png" alt=""  style="width:154.56px;height:200px;" /></span></left><p>Texte</p>',
            location: {
                center: [2.15140, 43.92827],
                zoom: 15.26,
                pitch: 0,
                bearing: 0.00,
                speed: 0.3
            },
            onChapterEnter: [
                {
                    layer: 'albi-polygones',
                    opacity: 1
                },
                {
                    layer: '',
                    opacity: 0.5
                }
            ],
            onChapterExit: [
                {
                    layer: 'albi-polygones',
                    opacity: 0
                },
                {
                    layer: '',
                    opacity: 0
                }
            ]
        },
        {
            id: '3',
            hidden:'true',
            alignment: 'right',
            title: '3',
            image: '',
            description: '',
            location: {
                center: [2.22474, 43.93714],
                zoom: 11.91,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'albi-polygones',
                    opacity: 0.6
                },
                {
                    layer: '',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'albi-polygones',
                    opacity: 0
                },
                {
                    layer: '',
                    opacity: 0
                }
            ]
        },
        {
            id: '4',
            alignment: 'left',
            title: '4',
            image: '',
            imageCredit:'',
            description: '<left><span class="image main"><img src="images/asm_ad/Figure_SVG.svg" alt=""  style="width:50%;height:50%;" /></span></left>',
            location: {
                center: [0.96581, 47.11029],
                zoom: 6.42,
                pitch: 69.50,
                bearing: 71.20
            },
            onChapterEnter: [
                {
                    layer: '',
                    opacity: 0.1
                },

            ],
            onChapterExit: [
                {
                    layer: '',
                    opacity: 0
                },

            ]
        },
        {
            id: '5',
            alignment: 'left',
            title: 'Brest',
            image: '',
            imageCredit:'',
            description: '<iframe width="560" height="315" src="https://www.youtube.com/embed/le-e37ZMck8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            location: {
                center: [-4.55029, 48.38998],
                zoom: 12.44,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'brest-ligne',
                    opacity: 0.5
                },
            ],
            onChapterExit: [
                {
                    layer: 'brest-ligne',
                    opacity: 0
                },
            ]           
        },
        {
            id: '6',
            hidden:'true',
            alignment: 'right',
            title: 'Front Ouest',
            image: '',
            description: '',
            location: {
                center: [-5.83602, 46.15892],
                zoom: 6.08,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'front-ouest',
                    opacity: 0.5
                },
                {
                    layer: 'front-ouest-label',
                    opacity: 0.5
                },
            ],
            onChapterExit: [
                {
                    layer: 'front-ouest',
                    opacity: 0
                },
                {
                    layer: 'front-ouest-label',
                    opacity: 0
                },
            ]  
        },
        {
            id: '7',
            hidden:'true',
            alignment: 'right',
            title: '7',
            image: '',
            description: '',
            location: {
                center: [-45.23109, 25.81440],
                zoom: 1.93,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'cliwoc-all',
                    opacity: 0.5
                },
            ],
            onChapterExit: [
                {
                    layer: 'cliwoc-all',
                    opacity: 0
                },
            ]
        },
        {
            id: '8',
            hidden:'true',
            alignment: 'right',
            title: '8',
            image: '',
            description: '',
            location: {
                center: [-45.23109, 25.81440],
                zoom: 1.93,
                pitch: 0.00,
                bearing: 0.00
            },
        },
        {
            id: '9',
            hidden:'true',
            alignment: 'right',
            title: '9',
            image: '',
            description: '',
            location: {
                center: [53.86627, 15.36318],
                zoom: 1.93,
                pitch: 0.00,
                bearing: 0.00
            },
        },
        {
            id: '10',
            hidden:'true',
            alignment: 'right',
            title: '10',
            image: '',
            description: '',
            location: {
                center: [2.72839, 17.08936],
                zoom: 2.25,
                pitch: 0.00,
                bearing: 0.00
            },
        },
        {
            id: '11',
            hidden:'true',
            alignment: 'right',
            title: '11',
            image: '',
            description: '',
            location: {
                center: [2.72839, 17.08936],
                zoom: 2.25,
                pitch: 0.00,
                bearing: 0.00
            },
        },        {
            id: '12',
            hidden:'true',
            alignment: 'right',
            title: '12',
            image: '',
            description: '',
            location: {
                center: [2.72839, 17.08936],
                zoom: 2.25,
                pitch: 0.00,
                bearing: 0.00
            },
        },
        {
            id: '13',
            hidden:'true',
            alignment: 'right',
            title: '13',
            image: '',
            description: '',
            location: {
                center: [2.72839, 17.08936],
                zoom: 2.25,
                pitch: 0.00,
                bearing: 0.00
            },
        },
        {
            id: '14',
            alignment: 'right',
            title: 'Sources',
            image: '',
            description:'<left><span class="image main"><img src="laperouse/laperouse.jpg" alt=""  style="width:117.1px;height:200px;" /> </span></left><left><span class="image main"><img src="laperouse/expedition.jpg" alt=""  style="width:157.8px;height:200px;" /></span></left> <span class="image main"><img src="laperouse/memoires.jpg" alt=""  style="width:131.58px;height:200px;" /></span></left>',
            location: {
                center: [-145.42007, 6.48104],
                zoom: 2,
                pitch: 0.00,
                bearing: 0.00
            },
        },            
    ]
};
