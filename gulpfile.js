// Less configuration
var gulp = require('gulp');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');

gulp.task('less', function () {
    gulp.src('*/*.less')
        .pipe(less())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest(function (f) {
            return f.base;
        }))
     
});

gulp.task('css', function () {
    gulp.src(['styles/layout.css', 'styles/header.css', 'styles/features.css', 'styles/card.css'])
        .pipe(concat('styles.css'))
        .pipe(gulp.dest(function (f) {
            return f.base;
        }))
});


gulp.task('default', function () {
    gulp.watch('*/*.less', ['less']);
    gulp.watch('*/*.css', ['css']);
})