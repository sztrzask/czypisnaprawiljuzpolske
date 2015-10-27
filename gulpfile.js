// Less configuration
var gulp = require('gulp');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('less', function() {
    gulp.src('*/*.less')
        .pipe(less())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest(function(f) {
            return f.base;
        }))
});

gulp.task('default', function() {
    gulp.watch('*/*.less', ['less']);
})