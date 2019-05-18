//obs em https://nxh101.wordpress.com/2017/11/04/concatenando-e-minificando-arquivos-javascript-com-gulp/
//https://codehangar.io/concatenate-and-minify-javascript-with-gulp/
//http://frontenddevelopmenttutorial.com/minification-concatenation-process-using-gulp-js/
//https://brenohq.github.io/Usando-Gulp-js-em-um-Site-Estatico/
var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');
var htmlmin = require('gulp-html-minifier');
var del = require("del");
var async = require('async');
var runSequence = require('run-sequence');
var imagemin = require('gulp-imagemin');
var jsdoc = require('gulp-jsdoc3');


gulp.task('clean', function (cb) {
 (async () => {
  //const deletedPaths = await del(['public_html/dist/**', 'public_html/resources/components/MCssVue.js'], {force: true});
  const deletedPaths = del.sync(['public_html/dist/**', 'public_html/resources/components/MCssVue.js'], {force: true});
  console.log('Deleted files and folders:\n', deletedPaths.join('\n'));
  cb();
 })();
 //return del('public_html/dist/**', {force: true});
});

gulp.task('imagemin', function () {
 gulp.src('public_html/resources/img/*')
         .pipe(imagemin())
         .pipe(gulp.dest('public_html/resources/img/dist'));
});

gulp.task('doc', function (cb) {
 gulp.src(['README.md', 'public_html/resources/js/**/*.js', 'public_html/resources/components/**/*.js'],
         {
          read: false,
          allowEmpty: true
         })
         .pipe(jsdoc(cb));
});

gulp.task('compile', function (cb) {
 async.series([
  function (next) {
   gulp.src([
    'public_html/resources/components/**/*.js'
   ])
           .pipe(concat('MCssVue.js'))
           .pipe(uglify())
           .pipe(gulp.dest('public_html/resources/components'))
           .on('end', next);
  },
  function (next) {
   gulp.src([
    'public_html/resources/components/MCssVue.js'
   ])
           .pipe(gulp.dest('public_html/dist/resources/components'))
           .on('end', next);
  },
  function (next) {
   gulp.src([
    'public_html/resources/css/**/*.css'
   ])
           //.pipe(concat('custom.css'))
           .pipe(cleanCSS({compatibility: 'ie8'}))
           .pipe(gulp.dest('public_html/dist/resources/css'))
           .on('end', next);
  },
  function (next) {
   gulp.src([
    'public_html/resources/js/**/*.js'
   ])
           //.pipe(concat('custom.js'))
           .pipe(uglify())
           .pipe(gulp.dest('public_html/dist/resources/js'))
           .on('end', next);
  },
  function (next) {
   gulp.src('public_html/**/*.html')
           .pipe(htmlmin({
            collapseWhitespace: true,
            ignorePath: ['/dist','/resources'],
            minifyCSS: true,
            minifyJS: true,
            removeComments: true
           }))
           .pipe(gulp.dest('public_html/dist'))
           .on('end', next);
  },
  function (next) {
   gulp.src(['public_html/resources/fonts/**/*']).pipe(gulp.dest('public_html/dist/resources/fonts'))
           .on('end', next);
  },
  function (next) {
   gulp.src(['public_html/resources/vendor/**/*']).pipe(gulp.dest('public_html/dist/resources/vendor'))
           .on('end', next);
  },
  function (next) {
   gulp.src(['public_html/resources/img/**/*']).pipe(gulp.dest('public_html/dist/resources/img'))
           .on('end', next);
  }
 ], cb);
});

gulp.task('default', gulp.series('clean', 'compile', function (done) {
 done();
}));
