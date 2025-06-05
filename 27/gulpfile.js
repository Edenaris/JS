const cleanCSS = require('gulp-clean-css');
const gulp = require('gulp');

function defaultTask(cb) {
  console.log('hello test123');
  cb();
}
function styles() {
    return gulp.src('./src/**/*.css')
        .pipe(cleanCSS())
        .pipe(gulp.dest('./dist/'));
}

exports.styles = styles;
exports.default = defaultTask