const HtmlWebpackPlugin = require('html-webpack-plugin');
const fs = require('fs');
const cheerio = require('cheerio');
const handlebears = require('handlebars');

let games = JSON.parse(fs.readFileSync('./games.json'));
let authors = JSON.parse(fs.readFileSync('./authors.json'));
let regions = JSON.parse(fs.readFileSync('./regions.json'));
let external = JSON.parse(fs.readFileSync("./externals.json"));
let externalbuilded = [];
for ( let url in external) {
    externalbuilded.push({src: url,title: external[url]});
}/*
games.forEach(game => {
    game.games.forEach( subgame => {
        subgame.gosrc = subgame.src.replace(".html", "-design.html");
    });
});
authors.forEach(game => {
    game.games.forEach( subgame => {
        subgame.gosrc = subgame.src.replace(".html", "-design.html");
    });
});
regions.forEach(game => {
    game.games.forEach( subgame => {
        subgame.gosrc = subgame.src.replace(".html", "-design.html");
    });
});*/
handlebears.registerPartial('header', fs.readFileSync("./src/header.handlebars").toString('utf-8'));
handlebears.registerPartial('sidebar', fs.readFileSync("./src/sidebar.handlebars").toString('utf-8'));
let renderPages = [];

function renderPage(options) {
    const template = fs.readFileSync(options.template);
    const hb = handlebears.compile(template.toString('utf-8'));
    fs.writeFileSync("./"+options.filename, hb(options));
}

renderPage({
    title:'DAGAZ',
    template:'./src/index.handlebars',
    filename:'design.html',
    language:'en',
    games:games,
    authors:authors,
    regions:regions,
    externallinks:externalbuilded,
    inject:false,
    minify:false,
    cache:false,

});

function beeToName(nn) {
    let names = nn.split("-");
    let out = [];
    names.forEach(name => {
        if(name.length>0) {
            out.push(name.substr(0,1).toUpperCase() + name.substr(1).toLowerCase());
        }
    });
    return out.join(" ");
}
//render game pages
games.forEach(game => {
    let title = game.title;
    game.games.forEach( subgame => {
        let src = subgame.src;
        let subtitle = subgame.title;
        //check description
        //check rules
        //load game content
        let rules = null;
        let content = null;
        let game = null;
        if(fs.existsSync("./"+src.replace('.html','.rules'))) {
            rules = fs.readFileSync("./"+src.replace('.html','.rules'));
        }
        if(fs.existsSync("./"+src.replace('.html','.md'))) {
            content = fs.readFileSync("./"+src.replace('.html','.md'));
        }

        let load = null;
        console.log("."+src.replace("-design.html",".htm"));
        if(fs.existsSync("."+src.replace("-design.html",".htm"))) {
            load = "."+src.replace("-design.html",".htm");
        }
        if(fs.existsSync("."+src.replace("-design.html",".html"))) {
            load = "."+src.replace("-design.html",".html");
        }

        console.log(load);
        let addition = [];

        if(load!=null) {
            //clean load to directory and name only
            let parts = load.split("/");
            let path = parts.reverse().slice(1).reverse().join("/");
            let filename = parts.slice(0,1).join("");
            console.log(parts,path,filename);
            let partname = filename.replace(".html","").replace(".htm","");
            let regexp = new RegExp(partname+"(.*)","gi");
            let files = fs.readdirSync(path);
            console.log(files);

            files.forEach(file => {
                if(regexp.test(file)) {
                    if(beeToName(file.replace(partname,"").replace(".html","").replace(".htm","")).length) {
                        addition.push({
                            title: beeToName(file.replace(partname, "").replace(".html", "").replace(".htm", "")),
                            src: path.replace("./", "/") + "/" + file
                        });
                    }
                }
            });
            const $ = cheerio.load(fs.readFileSync(load));
            game = $("body").html();
        }else{
            return
        }

        renderPage({
            title:'DAGAZ - ' + title + " - " + subtitle,
            template:'./src/game.handlebars',
            filename:'.' + src,
            language:'en',
            games:games,
            authors:authors,
            regions:regions,
            externallinks:externalbuilded,
            gamename: subtitle,
            gameurl:  src,
            game:game,
            rules:rules,
            addition:addition,
            content:content,
            inject:false,
            minify:false,
            cache:false,

        });
    });
});


module.exports = {
    entry:'./index.js',
    output: {
        path: __dirname ,
        filename: 'bundle.js'
    },
    module: {
        rules: [
            { test: /\.handlebars/, loader: "handlebars-loader" }
        ]
    },
    plugins:renderPages
};