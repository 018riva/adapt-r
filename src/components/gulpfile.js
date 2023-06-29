const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

gulp.task('start', sass1);

function sass1(){
    return gulp.src('./*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./gulp styles'))
}

gulp.task('watch', function(){
    gulp.watch('./*.scss', sass1)
})