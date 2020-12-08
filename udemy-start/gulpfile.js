const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer'); 

function css() {
    return gulp
        .src('scss/app.scss')
        .pipe(autoprefixer({
            browsers: ['last 2 versions']
        }))
        .pipe(sass({outputStyle: 'expanded'}))
        .pipe(gulp.dest('css'))
}

function watchFiles() {
    gulp.watch('scss/*.scss', css) //watch for changes to any file that ends in scss
    gulp.watch('index.html')
}

// tasks 
gulp.task('css', css); 
gulp.task('watch', gulp.parallel(watchFiles)) //so we can call this in terminal to watch any changes