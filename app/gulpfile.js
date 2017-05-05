var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var notify = require("gulp-notify");
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');
const babel = require('gulp-babel');
var cssmin = require('gulp-cssmin');

// COMPILAR DE SASS PARA CSS
gulp.task('sass', function () {
    return gulp.src('./_assets/sass/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .on('error', notify.onError({
        title: 'Erro ao compilar o css',
        message: '<%= error.message %>'
    }))
    .pipe(gulp.dest('./webroot/css'));
});


// MINIFICAR JS
gulp.task('minificar-js', function () {
    return gulp.src('./_assets/js/**/*.js')
        .pipe(uglify())
        .on('error', notify.onError({
            title: 'Script Error!',
            message: '<%= error.message %>'
        }))
        .pipe(gulp.dest('./webroot/js'));
});


//MINIFICAR LIBS
gulp.task('build-js', function(){
    return gulp.src([
        './_assets/components/jquery/dist/jquery.min.js',
        './_assets/components/tether/dist/js/tether.js',
        './_assets/components/bootstrap/dist/js/bootstrap.min.js',
    ]).pipe(concat('libs.js')).pipe(uglify()).pipe(gulp.dest('./webroot/js/libs'))
});


//MOVER FONTES
gulp.task('move-fonts', function(){
	return gulp.src('./_assets/components/Ionicons/fonts/**')
	.pipe(gulp.dest('./webroot/fonts/'))
});

// gulp.task('build-css', function () {
//     gulp.src([
//         './assets/components/animate.css/animate.min.css',
//       ]).pipe(cssmin()).pipe(concat('libs.css')).pipe(gulp.dest('./webroot/css/libs'));
// });


// AQUI É O GULP WATCH
gulp.task('watch', function () {
    gulp.watch('./_assets/sass/**/*.scss', ['sass']);
    gulp.watch('./_assets/js/**/*.js', ['minificar-js']);
});


gulp.task('default', ['minificar-js', 'sass', 'watch'], function () {});
