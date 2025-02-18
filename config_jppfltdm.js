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
            hidden:'true',
            alignment: 'right',
            title: '110',
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
            title: '111',
            image: '',
            description: '<div class="audio-container"><audio controls><source src="laperouse/Bonne-maman.mp3" type="audio/mpeg"></audio></div><p>À partir de Saint Géry, visite de Bonne Maman, aout 1988</p>',
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
                    layer: 'geo-lines',
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
            id: '112',
            alignment: 'right',
            title: '112',
            image: '',
            imageCredit:'',
            description: '<center><span class="image main"><img src="laperouse/laperouse_sign.png" alt=""  style="width:238.8px;height:300px;" /></span><p>Jean François de Galaup, comte de Lapérouse</p></center>',
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
            title: '113',
            image: '',
            imageCredit:'',
            description: '<center><span class="image main"><img src="laperouse/cage.jpeg" alt=""  style="width:450px;height:600px;" /></span>',
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
            title: '114',
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
            title: '115',
            image: '',
            imageCredit:'',
            description: '<center><span class="image main"><img src="laperouse/marquis.e.png" alt=""  style="width:359.8px;height:300px;"/></span><p>Clément de Rey & Mary O\'Kelly-Farrell</p><p>Marquis.e de St Géry</p>',
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
            title: '116',
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
            title: '121',
            image: 'laperouse/laperouse_multi.png',
            imageCredit:'',
            description: '<center><p>Jean François de Galaup</p><p>Naissance 23 aout 1741 à Albi</p</center>',
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
            title: '122',
            image: '',
            imageCredit:'',
            description: '<center><span class="image main"><img src="laperouse/Arbre_Lapérouse.png" alt=""  style="width:987px;height:400px;" /></span></center><p>Clément et Jean François sont cousins de 3ème degré</p>',
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
            title: '123',
            image: '',
            imageCredit:'',
            description: '<center><span class="image main"><img src="laperouse/Arbre_OByrne.png" alt=""  style="width:987px;height:400px;" /></span></center><p>De la même manière que James et Alexandre</p>',
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
            title: '124',
            image: '',
            description: '<center><span class="image main"><img src="laperouse/parents.png" alt=""style="width:415.2px;height:300px;"/></span><p>Ses parents</p><p>Victor Joseph de Galaup & Marguerite de Rességuier</p></center>',
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
            title: '125',
            image: '',
            description: '<center><span class="image main"><img src="laperouse/tuteurs.png" alt=""  style="width:538.8px;height:300px;" /></span><p>Des tuteurs qui vont changer sa vie</p><p>Charles Eugène Gabriel de La Croix de Castries (1727-1801) - fiche <a href="https://fr.wikipedia.org/wiki/Charles_Eug%C3%A8ne_Gabriel_de_La_Croix_de_Castries" target="_blank">Wikipédia</a></p><p>Charles-Henri-Louis d&apos;Arsac de Ternay (1723-1780) - fiche <a href="https://fr.wikipedia.org/wiki/Charles-Henri-Louis_d%27Arsac_de_Ternay" target="_blank">Wikipédia</a></p></center>',
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
            title: '211',
            image: '',
            imageCredit:'',
            description: '<p>A 15 ans, départ pour Brest</p><span class="flourish-embed flourish-hierarchy" data-src="visualisation/16230863"><script src="https://public.flourish.studio/resources/embed.js"></script><noscript><img src="https://public.flourish.studio/visualisation/16230863/thumbnail" width="100%" alt="hierarchy visualization" /></noscript></span>',
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
                {
                    layer: 'brest',
                    opacity: 0.9
                },
                {
                    layer: 'brest-label',
                    opacity: 0.9
                },
            ],
            onChapterExit: [
                {
                    layer: 'brest',
                    opacity: 0
                },
                {
                    layer: 'brest-label',
                    opacity: 0
                },

            ]
        },
        {
            id: '212',
            alignment: 'left',
            title: '212',
            image: 'laperouse/Brest_1777.png',
            imageCredit:'',
            description: '<p>Brest, le séminaire de la Marine</p>',
            location: {
                center: [-4.54014, 48.38893],
                zoom: 12.80,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'brest-ligne',
                    opacity: 0.9
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
            id: '311',
            hidden:'',
            alignment: 'right',
            title: '311',
            image: '',
            description: '<p>Avant la guerre de 7 ans</p>',
            location: {
                center: [-0, 25.81440],
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
                    layer: 'world-1750',
                    opacity: 0
                },
            ]
        },
        {
            id: '312',
            hidden:'',
            alignment: 'right',
            title: '312',
            image: '',
            description: '<p>La flotte anglaise entre 1750 et 1763</p>',
            location: {
                center: [0, 25.81440],
                zoom: 1.93,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'EN-1750-1763',
                    opacity: 0.6
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
            id: '313',
            hidden:'',
            alignment: 'right',
            title: '313',
            image: '',
            description: '<p>En comparaison avec la flotte française sur la même période</p>',
            location: {
                center: [0, 25.81440],
                zoom: 1.93,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'FR-1750-1763',
                    opacity: 0.8
                },
            ],
            onChapterExit: [
                {
                    layer: 'FR-1750-1763',
                    opacity: 0
                },
            ]
        },
        {
            id: '321',
            hidden:'',
            alignment: 'left',
            title: '321',
            image: 'laperouse/quiberon.png',
            description: '1759, la bataille des Cardinaux',
            location: {
                center: [-6.68255, 48.86206],
                zoom: 6,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'quiberon',
                    opacity: 0.5
                },
            ],
            onChapterExit: [
                {
                    layer: 'quiberon',
                    opacity: 0
                },
                {
                    layer: '',
                    opacity: 0
                },
            ]
        },
        {
            id: '331',
            hidden:'',
            alignment: 'right',
            title: '331',
            image: '',
            description: 'Après la guerre de 7 ans',
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
            title: '411',
            image: '',
            description: 'Front Ouest',
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
                {
                    layer: 'indes-voie',
                    opacity: 0.6
                },
            ]  
        },

        {
            id: '421',
            hidden:'',
            alignment: 'left',
            title: '421',
            image: '',
            description: 'Dans l\'océan indien en soutien à la compagnie des Indes',
            location: {
                center: [40, -7],
                zoom: 3,
                pitch: 0.00,
                bearing: 0.00,
                speed:1
            },
            onChapterEnter: [
                {
                    layer: 'indes',
                    opacity: 1
                },
                {
                    layer: 'indes-label',
                    opacity: 0.9
                },
            ],
            onChapterExit: [
                {
                    layer: 'indes',
                    opacity: 0
                },
                {
                    layer: 'indes-label',
                    opacity: 0
                },
                {
                    layer: 'indes-voie',
                    opacity: 0
                },
            ]
        },
        {
            id: '422',
            hidden:'',
            alignment: 'right',
            title: '422',
            image: '',
            description: '<center><span class="image main"><img src="laperouse/Eleonore_Broudou.png" alt=""  style="width:220.1px;height:300px;" /></span><p>Eléonore Broudou, née à Nantes le 15 mai 1755</p><p>Fiche de l\'<a href="https://blogs.univ-jfc.fr/projetlaperouse/marin-et-soldat/dans-locean-indien/eleonore-broudou/" target="_blank">INU Champollion</a></p></center>',
            location: {
                center: [57.77373, -20.25468],
                zoom: 9.90,
                pitch: 0.00,
                bearing: 0.00,
                speed:10
            },
            onChapterEnter: [
                {
                    layer: 'mesnil',
                    opacity: 0.9
                },
            ]
        },
        {
            id: '423',
            hidden:'',
            alignment: 'right',
            title: '423',
            image: '',
            description: 'Retour en France',
            location: {
                center: [5, 46.50441],
                zoom: 5.24,
                pitch: 0.00,
                bearing: 0.00,
                speed:10
            },
            onChapterEnter: [
                {
                    layer: 'poi-france',
                    opacity: 0.9
                },
            ],
            onChapterExit: [
                {
                    layer: 'indes-voie',
                    opacity: 0
                },
                {
                    layer: 'poi-france',
                    opacity: 0
                },
            ],
        },
        {
            id: '511',
            hidden:'',
            alignment: 'right',
            title: '511',
            image: '',
            description: 'La guerre d\'indépendance des Etats-Unis',
            location: {
                center: [-25, 40],
                zoom: 3,
                pitch: 0.00,
                bearing: 0.00,
                speed:10
            },
            onChapterEnter: [
                {
                    layer: 'us',
                    opacity: 0.9
                },
                {
                    layer: 'us-label',
                    opacity: 0.9
                },
                {
                    layer: 'us-voie',
                    opacity: 0.9
                },
            ],
        },
        {
            id: '512',
            hidden:'',
            alignment: 'left',
            title: '512',
            image: '',
            description: '<center><span class="image main"><img src="laperouse/saintes.png" alt=""  style="width:416.5px;height:300px;" /></span><p>La bataille des Saintes</p><p>Fiche <a href="https://fr.wikipedia.org/wiki/Bataille_des_Saintes" target="_blank">Wikipédia</a></p></center>',
            location: {
                center: [-62.04257, 15.66748],
                zoom: 8.6,
                pitch: 0.00,
                bearing: 0.00,
                speed:2
            },
        },        
        {
            id: '513',
            hidden:'',
            alignment: 'right',
            title: '513',
            image: '',
            description: '<center><span class="image main"><img src="laperouse/fort.jpg" alt=""  style="width:430.5px;height:300px;" /></span><p>Une mission secrète dans la baie d\'Hudson</p><p>Fiche <a href="https://fr.wikipedia.org/wiki/Exp%C3%A9dition_de_la_baie_d%27Hudson" target="_blank">Wikipédia</a></p></center>',
            location: {
                center: [-63.44630, 59.96458],
                zoom: 4,
                pitch: 0.00,
                bearing: 0.00,
                speed:10
            },
            onChapterEnter: [
                {
                    layer: '',
                    opacity: 0.5
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
            id: '514',
            hidden:'true',
            alignment: 'right',
            title: '514',
            image: '',
            description: '',
            location: {
                center: [-25, 40],
                zoom: 3,
                pitch: 0.00,
                bearing: 0.00,
                speed:10
            },
            onChapterExit: [
                {
                    layer: 'us',
                    opacity: 0
                },
                {
                    layer: 'us-label',
                    opacity: 0
                },
                {
                    layer: 'us-voie',
                    opacity: 0
                },
            ],
        },
        {
            id: '611',
            hidden:'',
            alignment: 'right',
            title: '611',
            image: 'laperouse/Louis 16-Lapérouse.jpg',
            description: 'La préparation au départ 1/3',
            location: {
                center: [-25, 40],
                zoom: 2,
                pitch: 0.00,
                bearing: 0.00,
                speed:1
            },
        },
        {
            id: '611b',
            hidden:'true',
            alignment: 'right',
            title: '',
            image: '',
            description: '',
            location: {
                center: [-90, 5],
                zoom: 2,
                pitch: 0.00,
                bearing: 0.00,
                speed:1
            },
            onChapterEnter: [
                {
                    layer: 'plan-point-label',
                    opacity: 0.9
                },
                {
                    layer: 'plan-point',
                    opacity: 0.9
                },
                {
                    layer: 'plan',
                    opacity: 0.7
                },
            ],
            onChapterExit: [
                {
                    layer: 'plan-point-label',
                    opacity: 0
                },
                {
                    layer: 'plan-point',
                    opacity: 0
                },
                {
                    layer: 'plan',
                    opacity: 0
                },
            ],
        },
        {
            id: '612',
            hidden:'',
            alignment: 'right',
            title: '612',
            image: 'laperouse/boussole.png',
            description: 'La préparation au départ 2/3',
            location: {
                center: [5, 46.50441],
                zoom: 5.24,
                pitch: 0.00,
                bearing: 0.00,
                speed:10
            },
            onChapterEnter: [
                {
                    layer: '',
                    opacity: 0.5
                },
            ]
        },
        {
            id: '613',
            hidden:'',
            alignment: 'right',
            title: '613',
            image: 'laperouse/médaille.png',
            description: 'La préparation au départ 3/3',
            location: {
                center: [5, 46.50441],
                zoom: 5.24,
                pitch: 0.00,
                bearing: 0.00,
                speed:10.35
            },
            onChapterEnter: [
                {
                    layer: '',
                    opacity: 0.5
                },
            ]
        },
        {
            id: '711',
            hidden:'',
            alignment: 'right',
            title: '711',
            image: '',
            description: 'Brest - Conception',
            location: {
                center: [-30, 0],
                zoom: 2,
                pitch: 0.00,
                bearing: 0.00,
                speed:10.35
            },
            onChapterEnter: [
                {
                    layer: '944-1',
                    opacity: 0.6
                },
                {
                    layer: 'poi-exp1',
                    opacity: 0.6
                },
                {
                    layer: 'poi-exp1-label',
                    opacity: 1
                },
            ],
            onChapterExit: [
                {
                    layer: '944-1',
                    opacity: 0.2
                },
                {
                    layer: 'poi-exp1',
                    opacity: 0
                },
                {
                    layer: 'poi-exp1-label',
                    opacity: 0
                },
            ]
        },
        {
            id: '721',
            hidden:'',
            alignment: 'right',
            title: '721',
            image: '',
            description: 'Conception - Monterey',
            location: {
                center: [-100, 0],
                zoom: 2,
                pitch: 0.00,
                bearing: 0.00,
                speed:0.35
            },
            onChapterEnter: [
                {
                    layer: '944-2',
                    opacity: 0.6
                },
                {
                    layer: 'poi-exp2',
                    opacity: 0.6
                },
                {
                    layer: 'poi-exp2-label',
                    opacity: 1
                },
            ],
            onChapterExit: [
                {
                    layer: '944-2',
                    opacity: 0
                },
                {
                    layer: 'poi-exp2',
                    opacity: 0
                },
                {
                    layer: 'poi-exp2-label',
                    opacity: 0
                },
            ]  
        },
        {
            id: '722',
            hidden:'',
            alignment: 'left',
            title: '722',
            image: '',
            description: '<center><span class="image main"><img src="laperouse/paques.png" alt=""  style="width:554.9px;height:400px;" /></span><p>Relevé de l\'île de Pâques</p>',
            location: {
                center: [-109.49337, -27.11727],
                zoom: 11,
                pitch: 0.00,
                bearing: 0.00,
                speed:10.35
            },
            onChapterEnter: [
                {
                    layer: '',
                    opacity: 0.5
                },
            ],
            onChapterExit: [
                {
                    layer: '944-2',
                    opacity: 0.6
                },
                {
                    layer: 'poi-exp2',
                    opacity: 0.6
                },
                {
                    layer: 'poi-exp2-label',
                    opacity: 1
                },
                {
                    layer: '944-1',
                    opacity: 0.2
                },
            ]  
        },
        {
            id: '723',
            hidden:'true',
            alignment: 'full',
            title: '723',
            image: '',
            description: '<center><span class="image main"><img src="laperouse/portdesfrançais.png" alt=""  style="width:882.1px;height:600px;" /></span><p>Drame de navigation au Port des français, 13 juillet 1786</p>',
            location: {
                center: [-134.10233, 52.89148],
                zoom: 4.41,
                pitch: 70.00,
                bearing: 145,
                speed:10
            },
            onChapterExit: [
                {
                    layer: '944-2',
                    opacity: 0.2
                },
                {
                    layer: 'poi-exp2',
                    opacity: 0
                },
                {
                    layer: 'poi-exp2-label',
                    opacity: 0
                },
            ]
        },  
        {
            id: '723',
            hidden:'',
            alignment: 'full',
            title: '723',
            image: '',
            description: '<center><span class="image main"><img src="laperouse/portdesfrançais.png" alt=""  style="width:882.1px;height:600px;" /></span><p>Drame de navigation au Port des français, 13 juillet 1786</p>',
            location: {
                center: [-134.10233, 52.89148],
                zoom: 4.41,
                pitch: 70.00,
                bearing: 145,
                speed:5
            },
            onChapterEnter: [
                {
                    layer: '',
                    opacity: 0.5
                },
            ]
        },                
        {
            id: '731',
            hidden:'',
            alignment: 'right',
            title: '731',
            image: '',
            description: 'Monterey - St Pierre St Paul',
            location: {
                center: [-145, 0],
                zoom: 2,
                pitch: 0.00,
                bearing: 0.00,
                speed:10.35
            },
            onChapterEnter: [
                {
                    layer: '944-3',
                    opacity: 0.6
                },
                {
                    layer: 'poi-exp3',
                    opacity: 0.6
                },
                {
                    layer: 'poi-exp3-label',
                    opacity: 1
                },
                {
                    layer: 'poi-exp2-label',
                    opacity: 0
                },
            ]
        },
        {
            id: '732',
            hidden:'',
            alignment: 'right',
            title: '732',
            image: '',
            description: 'Le détroit de Tartarie',
            location: {
                center: [155, 50],
                zoom: 4,
                pitch: 0.00,
                bearing: 0.00,
                speed:10.35
            },
            onChapterEnter: [
                {
                    layer: 'poi-exp3',
                    opacity: 0
                },
                {
                    layer: '',
                    opacity: 0.5
                },
            ],
            onChapterExit: [
                {
                    layer: 'poi-exp3',
                    opacity: 0
                },
            ]
        },
        {
            id: '733',
            hidden:'',
            alignment: 'right',
            title: '733',
            image: '',
            description: '<center><span class="image main"><img src="laperouse/lesseps.png" alt=""  style="width:177.8px;height:300px;" /></span><p>Le voyage retour de Lesseps<p>',
            location: {
                center: [120, 30],
                zoom: 2.24,
                pitch: 8.00,
                bearing: 0,
                speed:10.35
            },
            onChapterEnter: [
                {
                    layer: 'lesseps',
                    opacity: 0.9
                },
                {
                    layer: '944-1',
                    opacity: 0
                },
                {
                    layer: 'poi-exp1',
                    opacity: 0
                },
                {
                    layer: 'poi-exp1-label',
                    opacity: 0
                },
                {
                    layer: '944-2',
                    opacity: 0
                },
                {
                    layer: 'poi-exp2',
                    opacity: 0
                },
                {
                    layer: 'poi-exp2-label',
                    opacity: 0
                },
                {
                    layer: '944-3',
                    opacity: 0
                },
                {
                    layer: 'poi-exp3',
                    opacity: 0
                },
                {
                    layer: 'poi-exp3-label',
                    opacity: 0
                },
            ],
            onChapterExit: [
                {
                    layer: 'lesseps',
                    opacity: 0
                },
                {
                    layer: '944-1',
                    opacity: 0.2
                },
                {
                    layer: '944-2',
                    opacity: 0.2
                },
                {
                    layer: '944-3',
                    opacity: 0.2
                },
            ]
        },
        {
            id: '741',
            hidden:'',
            alignment: 'right',
            title: '741',
            image: '',
            description: 'St Pierre St Paul - Botany Bay',
            location: {
                center: [-145, 0],
                zoom: 2,
                pitch: 0.00,
                bearing: 0.00,
                speed:10.35
            },
            onChapterEnter: [
                {
                    layer: '944-4',
                    opacity: 0.6
                },
                {
                    layer: 'poi-exp4',
                    opacity: 0.6
                },
                {
                    layer: 'poi-exp4-label',
                    opacity: 1
                },
            ]
        },
        {
            id: '751',
            hidden:'',
            alignment: 'right',
            title: '751',
            image: '',
            description: 'Après Botany bay',
            location: {
                center: [175, -19.99140],
                zoom: 3,
                pitch: 0.00,
                bearing: 0.00,
                speed:10.35
            },
            onChapterEnter: [
                {
                    layer: 'vanikoro',
                    stroke: 0.5
                },
            ],
            onChapterExit: [
                {
                    layer: 'vanikoro',
                    stroke: 0
                },
            ]
        },
        {
            id: '752',
            hidden:'',
            alignment: 'right',
            title: '752',
            image: '',
            description:'Jusqu\'à Vanikoro',
            location: {
                center: [167, -11.65377],
                zoom: 10.56,
                pitch: 0.00,
                bearing: 0.00,
                speed:0.35
            },
            onChapterEnter: [
                {
                    layer: 'trajet-vanikoro',
                    opacity: 0.5
                },
                {
                    layer: 'poi-exp5',
                    opacity: 0.5
                },
            ]
        },
        {
            id: '753',
            hidden:'true',
            alignment: 'right',
            title: '753',
            image: '',
            description:'et des récifs',
            location: {
                center: [167, -11.65377],
                zoom: 10.56,
                pitch: 0.00,
                bearing: 0.00,
                speed:0.35
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
                {
                    layer: 'epaves',
                    stroke: 0.5
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
                {
                    layer: 'epaves',
                    opacity: 0
                },
            ]  
        },
        {
            id: '811',
            alignment: 'full',
            title: '811',
            image: 'laperouse/Chronologie.png',
            description:'',
            location: {
                center: [-50, 15],
                zoom: 1.8,
                pitch: 0.00,
                bearing: 0.00
            },
        },
        {
            id: '812',
            alignment: 'right',
            title: '812',
            image: '',
            description:'<left><span class="image main"><img src="laperouse/laperouse.jpg" alt=""  style="width:117.1px;height:200px;" /> </span></left><left><span class="image main"><img src="laperouse/expedition.jpg" alt=""  style="width:157.8px;height:200px;" /></span></left> <span class="image main"><img src="laperouse/memoires.jpg" alt=""  style="width:131.58px;height:200px;" /></span></left>',
            location: {
                center: [-175, 15],
                zoom: 1,
                pitch: 0.00,
                bearing: 0.00
            },
        },
        {
            id: '813',
            alignment: 'right',
            title: '812',
            image: 'laperouse/laperouse_multi.png',
            description:'Sources',
            location: {
                center: [-175, 15],
                zoom: 1,
                pitch: 0.00,
                bearing: 0.00
            },
        },                      
    ]
};
