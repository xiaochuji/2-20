var gulp = require("gulp");
var sass = require("gulp-sass");
var concat = require("gulp-concat");
var clean = require("gulp-clean-css");
var uglify = require("gulp-uglify");
var babel = require("gulp-babel");
var server = require("gulp-server");

gulp.task("sass",function(){
    return gulp.src("./src/scss/*.scss")
           .pipe(sass())
           .pipe(concat("all.css"))
           .pipe(clean())
           .pipe(gulp.dest("./src/css"))
})

gulp.task("uglify",function(){
    return gulp.src("./src/libs/*.js")
           .pipe(concat("all.js"))
           .pipe(babel({
               presets:['es2015']
           }))
           .pipe(uglify())
           .pipe(gulp.dest("./src/js/"))
})

gulp.task("watch",function(){
    gulp.watch("./src/scss/*.scss",gulp.series("sass","uglify"))
})