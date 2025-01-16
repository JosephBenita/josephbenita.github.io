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
            description: '<div class="audio-container"><audio controls><source src="laperouse/Bonne-maman.mp3" type="audio/mpeg"></audio></div>',
            location: {
                center: [1.78210, 43.83676],
                zoom: 14.49,
                pitch: 0.00,
                bearing: 0.00,
                speed: 1000
            },
            
            onChapterEnter: [
                {
                    layer: 'st-gery',
                    opacity: 0.5
                },
                {
                    layer: '',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: '',
                    opacity: 0
                },
                {
                    layer: '',
                    opacity: 0
                }
            ]
        },
        {
            id: '1c',
            alignment: 'right',
            title: '2',
            image: '',
            imageCredit:'',
            description: '<left><span class="image main"><img src="laperouse/laperouse.png" alt=""  style="width:154.56px;height:200px;" /></span></left><p>Jean François Gallaup, comte de Lapérouse</p>',
            location: {
                center: [1.78210, 43.83676],
                zoom: 14.49,
                pitch: 0,
                bearing: 0.00,
                speed: 0.35
            },

        },
        {
            id: '1d',
            alignment: 'right',
            title: '',
            image: '',
            imageCredit:'',
            description: '<left><span class="image main"><img src="laperouse/cage.jpeg" alt=""  style="width:450px;height:600px;" /></span>',
            location: {
                center: [1.78210, 43.83676],
                zoom: 14.49,
                pitch: 0,
                bearing: 0.00,
                speed: 0.35
            },

        },
        {
            id: '1d',
            alignment: 'full',
            title: '',
            image: '',
            imageCredit:'',
            description: '<center><span class="image main"><img src="laperouse/cadre_1.jpeg" alt=""  style="width:800px;height:608px;" /></span>',
            location: {
                center: [1.78210, 43.83676],
                zoom: 14.49,
                pitch: 0,
                bearing: 0.00,
                speed: 0.35
            },

        },
        {
            id: '1e',
            alignment: 'right',
            title: '2',
            image: '',
            imageCredit:'',
            description: '<left><span class="image main"><img src="laperouse/Marie-Christine Rey sans cadre.png" alt=""  style="width:177.14px;height:200px;" /></span> <span class="image main"><img src="laperouse/Clément de Rey.png" alt=""  style="width:156.07px;height:200px;" /></span></left><p>Mary O Kelly-Farrell, Marquise de St Géry & Clément de Rey, Marquis de St Géry</p>',
            location: {
                center: [1.78210, 43.83676],
                zoom: 14.49,
                pitch: 0,
                bearing: 0.00,
                speed: 0.35
            },
            onChapterEnter: [
                {
                    layer: '',
                    opacity: 0
                },
                {
                    layer: '',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'st-gery',
                    opacity: 0
                },
                {
                    layer: '',
                    opacity: 0
                }
            ]

        },
        {
            id: '2a',
            alignment: 'right',
            title: '2',
            image: '',
            imageCredit:'',
            description: '<left><span class="image main"><img src="laperouse/laperouse.png" alt=""  style="width:154.56px;height:200px;" /></span></left><p>Texte</p>',
            location: {
                center: [2.22474, 43.93714],
                zoom: 11.5,
                pitch: 0,
                bearing: 0.00,
                speed: 0.35
            },
            onChapterEnter: [
                {
                    layer: 'albi-polygones',
                    opacity: 1
                },
                {
                    layer: 'albi-points-label',
                    opacity: 1
                },
                {
                    layer: 'albi-points',
                    opacity: 0.8
                }
            ],
            onChapterExit: [
                {
                    layer: '',
                    opacity: 0
                },
                {
                    layer: '',
                    opacity: 0
                }
            ]
        },
        {
            id: '2b',
            hidden:'',
            alignment: 'right',
            title: 'titre',
            image: '',
            description: '<left><span class="image main"><img src="laperouse/Marguerite de Rességuier.png" alt=""  style="width:136.93px;height:200px;" />  </span><span class="image main"><img src="laperouse/VJ de Galaup.png" alt=""  style="width:165.99px;height:200px;" /></span></left><p>texte</p>',
            location: {
                center: [2.22474, 43.93714],
                zoom: 11.5,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: '',
                    opacity: 0.9
                },
                {
                    layer: '',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: '',
                    opacity: 0
                },
                {
                    layer: '',
                    opacity: 0
                }
            ]
        },
        {
            id: '2c',
            hidden:'',
            alignment: 'right',
            title: 'Charles-Henri-Louis d’Arsac De Ternay',
            image: '',
            description: '<left><span class="image main"><img src="laperouse/Chevalierdeternay.jpeg" alt=""  style="width:273.66px;height:300px;" /></span></left><p>1723-1780</p>',
            location: {
                center: [2.22474, 43.93714],
                zoom: 11.5,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: '',
                    opacity: 0.9
                },
                {
                    layer: '',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: '',
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
            alignment: 'left',
            title: 'A 15 ans, départ pour Brest',
            image: '',
            imageCredit:'',
            description: '<span class="flourish-embed flourish-hierarchy" data-src="visualisation/16230863"><script src="https://public.flourish.studio/resources/embed.js"></script><noscript><img src="https://public.flourish.studio/visualisation/16230863/thumbnail" width="100%" alt="hierarchy visualization" /></noscript></span>',
            location: {
                center: [0.96581, 47.11029],
                zoom: 6.42,
                pitch: 69.50,
                bearing: 71.20
            },
            onChapterEnter: [
                {
                    layer: 'albi-brest',
                    opacity: 0.9
                },

            ],
            onChapterExit: [
                {
                    layer: '',
                    opacity: 0
                },
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
                {
                    layer: 'albi-brest',
                    opacity: 0
                },
                {
                    layer: 'albi-points',
                    opacity: 0
                },
                {
                    layer: 'albi-points-label',
                    opacity: 0
                },
            ]           
        },
        {
            id: '7a',
            hidden:'',
            alignment: 'right',
            title: 'Avant la guerre de 7 ans',
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
                    layer: 'world-1750',
                    opacity: 0.5
                },
            ],
            onChapterExit: [
                {
                    layer: '',
                    opacity: 0
                },
                {
                    layer: '',
                    opacity: 0
                },
            ]
        },
        {
            id: '7b',
            hidden:'true',
            alignment: 'right',
            title: '',
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
                    layer: 'EN-1750-1763',
                    opacity: 1
                },
            ],
            onChapterExit: [
                {
                    layer: 'EN-1750-1763',
                    opacity: 0
                },
            ]
        },
        {
            id: '7c',
            hidden:'true',
            alignment: 'right',
            title: '',
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
                    layer: 'FR-1750-1763',
                    opacity: 1
                },
            ],
            onChapterExit: [
                {
                    layer: 'world-1750',
                    opacity: 0
                },
                {
                    layer: 'FR-1750-1763',
                    opacity: 0
                },
            ]
        },
        {
            id: '8',
            hidden:'',
            alignment: 'right',
            title: 'Après la guerre de 7 ans',
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
                    layer: 'world-1763',
                    opacity: 0.5
                },
            ],
            onChapterExit: [
                {
                    layer: 'world-1763',
                    opacity: 0
                },
            ]
        },
        {
            id: '9',
            hidden:'',
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
            id: '10',
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
            id: '11',
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
            id: '12',
            hidden:'true',
            alignment: 'right',
            title: '10',
            image: '',
            description: '',
            location: {
                center: [-40.57421, -6.48104],
                zoom: 2,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: '944-1',
                    opacity: 0.5
                },
            ]
        },
        {
            id: '13',
            hidden:'true',
            alignment: 'right',
            title: '11',
            image: '',
            description: '',
            location: {
                center: [-145.42007, 0],
                zoom: 2,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: '944-2',
                    opacity: 0.5
                },
            ]
        },        {
            id: '14',
            hidden:'true',
            alignment: 'right',
            title: '12',
            image: '',
            description: '',
            location: {
                center: [-145.42007, 6.48104],
                zoom: 2,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: '944-3',
                    opacity: 0.5
                },
            ]
        },
        {
            id: '15',
            hidden:'true',
            alignment: 'right',
            title: '13',
            image: '',
            description: '',
            location: {
                center: [-145.42007, 6.48104],
                zoom: 2,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: '944-4',
                    opacity: 0.5
                },
            ]
        },
        {
            id: '16',
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
        {
            id: '17a',
            hidden:'true',
            alignment: 'right',
            title: '',
            image: '',
            description:'',
            location: {
                center: [166.88165, -11.65377],
                zoom: 10.56,
                pitch: 0.00,
                bearing: 0.00
            },
        },
        {
            id: '17b',
            alignment: 'right',
            title: 'et des récifs',
            image: '',
            description:'',
            location: {
                center: [166.88165, -11.65377],
                zoom: 10.56,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'vanikoro-reef',
                    opacity: 0.5
                },
                {
                    layer: 'vanikoro-reef-line',
                    opacity: 0.5
                },
            ],
            onChapterExit: [
                {
                    layer: 'vanikoro-reef',
                    opacity: 0
                },
                {
                    layer: 'vanikoro-reef-line',
                    opacity: 0
                },
            ]  
        },                 
    ]
};
