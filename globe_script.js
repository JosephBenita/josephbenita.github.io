// Dimensions du globe
const width = 600;
const height = 600;
const radius = width / 2;

// Projections et configurations
const projection = d3.geoOrthographic()
    .scale(radius - 10)
    .translate([width / 2, height / 2])
    .clipAngle(90);

const path = d3.geoPath(projection);

projection.rotate([0, 0]);


// Crée le SVG
const svg = d3.select("#globe")
    .attr("width", width)
    .attr("height", height);

// Ajoute une sphère représentant la Terre
svg.append("circle")
    .attr("cx", width / 2)
    .attr("cy", height / 2)
    .attr("r", radius)
    .attr("fill", "#0e1a35");

// Chargement des données GeoJSON (par ex. un fichier 'world.geojson')
d3.json("WB_land.geojson").then(function(geoData) {
    console.log(geoData);  // Debug: Vérifie si les données GeoJSON sont bien chargées
    svg.append("g")
        .selectAll("path")
        .data(geoData.features)
        .enter()
        .append("path")
        .attr("d", path)
        .attr("fill", "#69b3a2")
        .attr("stroke", "#fff")
        .attr("stroke-width", 0.5);
}).catch(function(error) {
    console.error("Erreur de chargement du GeoJSON :", error);
});
