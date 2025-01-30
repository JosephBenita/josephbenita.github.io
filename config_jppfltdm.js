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
            id: '110',
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
            id: '111',
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
            id: '112',
            alignment: 'right',
            title: '',
            image: '',
            imageCredit:'',
            description: '<left><span class="image main"><img src="laperouse/laperouse.png" alt=""  style="width:231.84px;height:300px;" /></span></left><p>Jean François de Galaup, comte de Lapérouse</p>',
            location: {
                center: [1.78210, 43.83676],
                zoom: 14.49,
                pitch: 0,
                bearing: 0.00,
                speed: 0.35
            },

        },
        {
            id: '113',
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
            id: '114',
            alignment: 'full',
            title: '',
            image: '',
            imageCredit:'',
            description: '<center><span class="image main"><img src="laperouse/tableau.png" alt=""  style="width:800px;height:608px;" /></span>',
            location: {
                center: [1.78210, 43.83676],
                zoom: 14.49,
                pitch: 0,
                bearing: 0.00,
                speed: 0.35
            },

        },
        {
            id: '115',
            alignment: 'right',
            title: 'Les Marquis de St Géry',
            image: '',
            imageCredit:'',
            description: '<center><span class="image main"><img src="laperouse/marquis.e.png" alt=""  style="width:359.8px;height:300px;"/></span><p>Clément de Rey & Mary O Kelly-Farrell</p>',
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
            id: '116',
            alignment: 'right',
            title: '',
            image: 'laperouse/Lettre de LP_extrait.png',
            imageCredit:'',
            description: '',
            location: {
                center: [1.78210, 43.83676],
                zoom: 14.49,
                pitch: 0,
                bearing: 0.00,
                speed: 0.35
            },
        },
        {
            id: '121',
            alignment: 'right',
            title: 'Jean François de Galaup',
            image: '',
            imageCredit:'',
            description: '<left><span class="image main"><img src="laperouse/laperouse.png" alt=""  style="width:231.84px;height:300px;" /></span></left><p>Naissance 23 aout 1741 à Albi. De ces 9 à 15 ans au collège des jésuites d&apos;Albi</p>',
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
            id: '122',
            alignment: 'full',
            title: 'de Galaup et de Rey',
            image: '',
            imageCredit:'',
            description: '<center><span class="image main"><img src="laperouse/arbre_gif.gif" alt=""  style="width:987px;height:400px;" /></span></center><p>texte</p>',
            location: {
                center: [2.22474, 43.93714],
                zoom: 11.5,
                pitch: 0,
                bearing: 0.00,
                speed: 0.35
            },
        },
        {
            id: '123',
            alignment: 'full',
            title: 'En comparaison pour la famille O&apos;Byrne',
            image: '',
            imageCredit:'',
            description: '<center><span class="image main"><img src="laperouse/Arbre_OByrne.png" alt=""  style="width:987px;height:400px;" /></span></center><p>texte</p>',
            location: {
                center: [2.22474, 43.93714],
                zoom: 11.5,
                pitch: 0,
                bearing: 0.00,
                speed: 0.35
            },
        },
        {
            id: '124',
            hidden:'',
            alignment: 'right',
            title: 'Ses parents',
            image: '',
            description: '<right><span class="image main"><img src="laperouse/parents.png" alt=""style="width:415.2px;height:300px;"/></span></right><p>Victor Joseph de Galaup & Marguerite de Rességuier</p>',
            location: {
                center: [2.22474, 43.93714],
                zoom: 11.5,
                pitch: 0.00,
                bearing: 0.00
            },
        },
        {
            id: '125',
            hidden:'',
            alignment: 'right',
            title: 'Des tuteurs importants',
            image: '',
            description: '<left><span class="image main"><img src="laperouse/tuteurs.png" alt=""  style="width:538.8px;height:300px;" />  </span></left><p>Charles Eugène Gabriel de La Croix de Castries (1727-1801)<a href="https://fr.wikipedia.org/wiki/Charles_Eug%C3%A8ne_Gabriel_de_La_Croix_de_Castries" target="_blank">Wiki</a></p><p>Charles-Henri-Louis d&apos;Arsac de Ternay (1723-1780)<a href="https://fr.wikipedia.org/wiki/Charles-Henri-Louis_d%27Arsac_de_Ternay" target="_blank">Wiki</a></p>',
            location: {
                center: [2.22474, 43.93714],
                zoom: 11.5,
                pitch: 0.00,
                bearing: 0.00
            },
        },
        {
            id: '211',
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
            id: '212',
            alignment: 'left',
            title: 'Brest, le séminaire de la Marine',
            image: 'laperouse/Brest_1777.png',
            imageCredit:'',
            description: '',
            location: {
                center: [-4.54014, 48.38893],
                zoom: 12.80,
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
            id: '312',
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
            id: '313',
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
            id: '314',
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
            id: '331',
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
            id: '411',
            hidden:'',
            alignment: 'left',
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
