var gulp = require("gulp"); //chama os modulos instalados no node
var html = require("gulp-htmlmin");
var uglify = require("gulp-uglify");
var uglifycss = require("gulp-uglifycss");
var concat = require("gulp-concat");

gulp.task("html",function(){ //cria a task para rodar no node
    console.log("optimize html files...");
    gulp
        .src("Dev/*.html") //pasta de busca de arquivos
        .pipe(html({collapseWhitespace:true})) //chama a variavel e passa o parametro
        .pipe(gulp.dest("Prod")); //pasta de destino //cada pipe é uma etapa
});

gulp.task("js",function(){
    console.log("optimize js files...");
    gulp
        .src("Dev/*.js")
        .pipe(uglify()).pipe(concat("tudo.min.js"))
        .pipe(gulp.dest("Prod"));
});

gulp.task("css",function(){
    console.log("optimize css files...");
    gulp
        .src("Dev/*.css")
        .pipe(uglifycss()).pipe(concat("tudo.min.css"))
        .pipe(gulp.dest("Prod"));
});

module.exports.default = gulp.parallel("css","html","js");