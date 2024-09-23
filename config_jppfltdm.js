var config = {
    style: 'mapbox://styles/josephbenita/cm1eqamys02m301qy6ytvgt3v',
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
            description: '<left><span class="image main"><img src="images/asm_ad/Sarah.png" alt=""  style="width:100px;height:100px;" /></span></left><left><span class="image main"><img src="images/asm_ad/Manon.png" alt=""  style="width:100px;height:100px;" /></span></left>  <p>This tutorial demonstrates how to use <a href="https://github.com/mapbox/storytelling">Mapbox Storytelling</a> with our previous web mapping example. </p>',
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
            id: '2',
            alignment: 'left',
            title: 'Global situation',
            image: '',
            imageCredit:'iMMAP',
            description: '<left><span class="image main"><img src="images/asm_ad/Figure_SVG.svg" alt=""  style="width:50%;height:50%;" /></span></left>',
            location: {
                center: [-37.19374, 26.71602],
                zoom: 1.52,
                pitch: 0,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'cliwoc-all',
                    opacity: 0.1
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
            id: '3',
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
        
        ]
};
