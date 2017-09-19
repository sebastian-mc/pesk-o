var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app = express();

app.get('/scannearPeces', function (req, res) {
    let peces = [];
    nombresTodos.forEach((nombre, index) => {
        url = 'https://acuarioadictos.com/' + nombre + '/';
        request(url, function (error, response, html) {
            if (!error) {
                var $ = cheerio.load(html);

                var pez = {
                    nombre: "",
                    descripcion: "",
                    tipo: "Mar",
                    estado: "Normal",
                    url: "",

                }
                $('.entry-title').filter(function () {
                    var data = $(this);
                    nombre = data.text().trim();
                    pez.nombre = nombre;
                })
                $('.entry.content.entry-content.entry_full').filter(function () {
                    var data = $(this);
                    data.children('p').first().children('strong').first().remove();
                    descripcion = data.children('p').first().text();
                    pez.descripcion = descripcion;
                })
                $('.image_size_medium.image_no_link').filter(function () {
                    var data = $(this);
                    url = data.children('img').first().attr('src');
                    pez.url = url;
                    if(index >=80){
                        fs.writeFile('output.json', JSON.stringify(peces, null, 4), function (err) {
                            console.log('File successfully written! - Check your project directory for the output.json file');
                        })
                    }
                })
                peces.push(pez);
                console.log(JSON.stringify(pez)+',');
            }
        })
    })
    res.send('Check your console!')
})

app.get('/scanearPecesLocal', function (req, res) {
    // Let's scrape Anchorman 2
    url = 'http://localhost:8080/index';

    request(url, function (error, response, html) {
        if (!error) {
            var $ = cheerio.load(html);

            var nombres = [];
            var json = {nombres: []};

            $('.portfolio_title.entry-title').filter(function () {
                var data = $(this);
                nombre = data.text().trim().toLowerCase().toString().split(' ').join('-');
                nombres.push(nombre);
            })

        }
        json.nombres = nombres;
        fs.writeFile('output.json', JSON.stringify(json, null, 4), function (err) {
            console.log('File successfully written! - Check your project directory for the output.json file');
        })

        res.send('Check your console!')
    })
})

app.get('/scannearPez', function (req, res) {
    url = 'https://acuarioadictos.com/acanthurus-leucosternon/';
    request(url, function (error, response, html) {

        if (!error) {
            var $ = cheerio.load(html);

            var pez = {
                nombre: "",
                descripcion: "",
                tipo: "Mar",
                estado: "",
                urlFoto: "",

            }
            $('.entry-title').filter(function () {
                var data = $(this);
                nombre = data.text().trim();
                pez.nombre = nombre;
            })
            $('.entry.content.entry-content.entry_full').filter(function () {
                var data = $(this);
                data.children('p').first().children('strong').first().remove();
                descripcion = data.children('p').first().text();
                pez.descripcion = descripcion;
            })
            $('.image_size_medium.image_no_link').filter(function () {
                var data = $(this);
                urlFoto = data.children('img').first().attr('src');
                console.log(urlFoto);
                pez.urlFoto = urlFoto;
            })
            console.log(JSON.stringify(pez));
        }
    })
})

//sé que este es el esqueleto, pero no va
app.get('/scrape', function (req, res) {
    // Let's scrape Anchorman 2
    url = 'http://www.imdb.com/title/tt1229340/';

    request(url, function (error, response, html) {
        if (!error) {
            var $ = cheerio.load(html);

            var title, release, rating;
            var json = {title: "", release: "", rating: ""};

            $('.title_wrapper').filter(function () {
                var data = $(this);
                title = data.children().first().text().trim();
                release = data.children().last().children().last().text().trim();

                json.title = title;
                json.release = release;
            })

            $('.ratingValue').filter(function () {
                var data = $(this);
                rating = data.text().trim();

                json.rating = rating;
            })
        }

        fs.writeFile('output.json', JSON.stringify(json, null, 4), function (err) {
            console.log('File successfully written! - Check your project directory for the output.json file');
        })

        res.send('Check your console!')
    })
})
app.get('/scanearUrlRecetas', function (req, res) {
    // Let's scrape Anchorman 2
    url = 'https://cookpad.com/co/buscar/pescado%20de%20mar?page=2';

    request(url, function (error, response, html) {
        if (!error) {
            var $ = cheerio.load(html);

            var urlRecetas = [];
            var json = {urlRecetas: []};

            $('.media').filter(function () {
                var data = $(this);
                url = 'https://cookpad.com'+data.attr('href');
                urlRecetas.push(url);
            })

        }
        json.urlRecetas = urlRecetas;
        fs.writeFile('urlRecetas.json', JSON.stringify(json, null, 4), function (err) {
            console.log('File successfully written! - Check your project directory for the output.json file');
        })

        res.send('Check your console!')
    })
})
app.get('/scannearRecetas', function (req, res) {
    let recetasCompletas = [];
    recetas.forEach((receta, index) => {
        url = receta;
        request(url, function (error, response, html) {
            if (!error) {
                var $ = cheerio.load(html);

                var receta = {
                    nombre: "",
                    ingredientes: [],
                    preparacion: []
                }
                $('.recipe-show__title.recipe-title.strong.field-group--no-container-xs').filter(function () {
                    var data = $(this);
                    nombre = data.text().trim();
                    receta.nombre = nombre;
                })
                $('.ingredient__details').filter(function () {
                    var data = $(this);
                    data.children('span').remove();

                    receta.ingredientes.push(data.text().trim());

                })
                $('.step__text').filter(function () {
                    var data = $(this);
                    receta.preparacion.push(data.text().trim());
                })

                recetasCompletas.push(receta);

                console.log(JSON.stringify(receta)+',');
                if(recetasCompletas.length >=40){
                    fs.writeFile('recetas.json', JSON.stringify(recetasCompletas, null, 4), function (err) {
                        console.log('File successfully written! - Check your project directory for the output.json file');
                    })
                }
            }
        })
    })
    res.send('Check your console!')
})
const nombresTodos = [
    "acanthurus-achilles",
    "acanthurus-japonicus",
    "acanthurus-leucosternon",
    "acanthurus-lineatus",
    "acanthurus-nigricans",
    "acanthurus-pyroferus",
    "acanthurus-sohal",
    "acanthurus-triostegus",
    "aeoliscus-strigatus",
    "amblyeleotris-randalli",
    "amphiprion-ocellaris",
    "amphiprion-perideraion",
    "anampses-femininus",
    "anampses-meleagrides",
    "antennarius-maculatus",
    "arothron-nigropunctatus",
    "assessor-macneilli",
    "acanthurus-tennentii",
    "acreichthys-tomentosus",
    "balistapus-undulatus",
    "bodianus-anthioides",
    "canthigaster-solandri",
    "canthigaster-valentini",
    "centropyge-acanthops",
    "centropyge-bicolor",
    "centropyge-bispinosa",
    "centropyge-eibli",
    "centropyge-ferrugata",
    "centropyge-loricula",
    "chaetodon-auriga",
    "chaetodon-collare",
    "chaetodon-semilarvatus",
    "chaetodon-xanthurus",
    "chelmon-rostratus",
    "choerodon-fasciatus",
    "chromis-viridis",
    "chrysiptera-parasema",
    "cirrhilabrus-exquisitus",
    "cirrhilabrus-rubripinnis",
    "cirrhitichthys-falco",
    "coris-formosa",
    "coris-julis",
    "cryptocentrus-cinctus",
    "cryptocentrus-leptocephalus",
    "ctenochaetus-strigosus",
    "ctenochaetus-tominiensis",
    "dascyllus-aruanus",
    "dendrochirus-brachypterus",
    "diademichthys-lineatus",
    "doryrhamphus-dactyliophorus",
    "echidna-nebulosa",
    "ecsenius-bicolor",
    "ecsenius-stigmatura",
    "forcipiger-flavissimus",
    "genicanthus-bellus",
    "gramma-loreto",
    "gobiodon-citrinus",
    "halichoeres-chloropterus",
    "halichoeres-chrysus",
    "halichoeres-garnoti",
    "halichoeres-marginatus",
    "heniochus-acuminatus",
    "hippocampus-reidi",
    "hoplolatilus-fourmanoiri",
    "labroides-dimidiatus",
    "lactoria-cornuta",
    "lythrypnus-dalli",
    "macropharyngodon-bipartitus",
    "meiacanthus-grammistes",
    "meiacanthus-smithi",
    "myripristis-murdjan",
    "naso-elegans",
    "naso-lituratus",
    "nemateleotris-magnifica",
    "neocirrhites-armatus",
    "odonus-niger",
    "oxycirrhites-typus",
    "oxymonacanthus-longirostris",
    "paracanthurus-hepatus",
    "paracheilinus-mccoskeri",
    "parupeneus-barberinoides",
    "pictichromis-porphyreus",
    "platax-pinnatus",
    "pseudocheilinus-hexataenia",
    "pomacanthus-imperator",
    "premnas-biaculeatus",
    "pseudanthias-parvirostris",
    "pseudanthias-squamipinnis",
    "pseudochromis-fridmani",
    "pseudochromis-paccagnellae",
    "pterapogon-kauderni",
    "pterois-volitans",
    "pygoplites-diacanthus",
    "rhinecanthus-aculeatus",
    "rhinecanthus-rectangulus",
    "rhinomuraena-quaesita",
    "salarias-fasciatus",
    "salarias-ramosus",
    "serranus-baldwini",
    "serranus-tortugarum",
    "siganus-guttatus",
    "siganus-magnificus",
    "siganus-vulpinus",
    "signigobius-biocellatus",
    "sphaeramia-nematoptera",
    "synchiropus-ocellatus",
    "synchiropus-picturatus",
    "synchiropus-splendidus",
    "taenianotus-triacanthus",
    "valenciennea-sexguttata",
    "zanclus-cornutus",
    "zebrasoma-desjardinii",
    "zebrasoma-flavescens",
    "zebrasoma-scopas",
    "zebrasoma-veliferum",
    "zebrasoma-xanthurum"
]
//podría haber sido un json para evitar el acoplamiento
recetas= [
    "https://cookpad.com/co/recetas/1998479-pescado-con-coco-ensalada-y-arroz-con-uvas-pasas",
    "https://cookpad.com/co/recetas/591975-pescado-en-salsa-de-coco",
    "https://cookpad.com/co/recetas/3133424-salmon-frutos-del-mar",
    "https://cookpad.com/co/recetas/3246318-croquetas-de-arroz-y-atun-al-horno",
    "https://cookpad.com/co/recetas/1014617-pastas-con-tomates-anchoas-y-guindilla",
    "https://cookpad.com/co/recetas/3217756-alino-para-pescado-de-mar",
    "https://cookpad.com/co/recetas/771312-sierra-en-leche-de-coco",
    "https://cookpad.com/co/recetas/2607204-pescado-con-salsa-de-soja-miel-y-wasabi",
    "https://cookpad.com/co/recetas/2165799-pescado-en-salsa-de-soja",
    "https://cookpad.com/co/recetas/1458537-pescado-a-la-gallega",
    "https://cookpad.com/co/recetas/537720-pescado-al-limon",
    "https://cookpad.com/co/recetas/287895-chorizos-de-mar-o-de-pescado-o-chorimar",
    "https://cookpad.com/co/recetas/3024258-palometa-de-mar-a-la-parrilla-en-la-playa",
    "https://cookpad.com/co/recetas/2160113-chupin-corvina-de-mar",
    "https://cookpad.com/co/recetas/909892-omelett-salpicado-con-mar-y-bacalao-frito-en-bolainas",
    "https://cookpad.com/co/recetas/902186-trucha-fresquita-sacada-del-mar",
    "https://cookpad.com/co/recetas/543343-abadejo-mar-y-tierra-con-guarnicion-timbal-de-arroz",
    "https://cookpad.com/co/recetas/3266726-spaguetis-y-frutos-de-mar",
    "https://cookpad.com/co/recetas/1482212-sofrito-de-pescado-a-la-puertorriquena",
    "https://cookpad.com/co/recetas/2284050-salsa-de-frutos-de-mar-con-fideos",
    "https://cookpad.com/co/recetas/2229889-salmon-blanco-en-sus-jugos-al-champignon-con-frutos-de-mar",
    "https://cookpad.com/co/recetas/832512-risotto-de-mar",
    "https://cookpad.com/co/recetas/796115-bucatini-y-frutos-de-mar",
    "https://cookpad.com/co/recetas/666033-paella-de-mar",
    "https://cookpad.com/co/recetas/659858-pasta-frutos-del-mar-luisfy",
    "https://cookpad.com/co/recetas/569236-arroz-del-pescador-con-agua-de-mar",
    "https://cookpad.com/co/recetas/122501-risotto-con-frutos-de-mar-y-tinta-de-calamar",
    "https://cookpad.com/co/recetas/3195749-ensalada-de-arroz-y-caballa",
    "https://cookpad.com/co/recetas/1872235-salmon-en-costra-de-ajonjoli-con-arroz-de-coliflor-y-verduras",
    "https://cookpad.com/co/recetas/908152-corvina-a-las-hierbas",
    "https://cookpad.com/co/recetas/893612-pasticho-de-arenque",
    "https://cookpad.com/co/recetas/793534-abadejo-cam",
    "https://cookpad.com/co/recetas/542343-salmon-a-la-mostaza-y-pimientos-rellenos",
    "https://cookpad.com/co/recetas/474736-filet-de-merluza-en-crema-de-roquefort",
    "https://cookpad.com/co/recetas/307836-asado-a-la-parrilla-de-salmon-rosado-con-salsa-de-queso",
    "https://cookpad.com/co/recetas/298664-salmon-rosado-al-papel",
    "https://cookpad.com/co/recetas/130485-causa-limena-de-atun",
    "https://cookpad.com/co/recetas/2237548-chupin-de-pescado",
    "https://cookpad.com/co/recetas/1292758-escabeche-de-mar",
    "https://cookpad.com/co/recetas/798178-cazuela-de-pescado-chupin-a-la-uruguaya"

]

app.listen('8081')
console.log('Magic happens on port 8081');
exports = module.exports = app;
