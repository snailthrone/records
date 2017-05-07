// Gulp Dependencies
process.argv.push('--silent');
var gulp = require('gulp');
<<<<<<< HEAD
=======
var babel = require('gulp-babel');
>>>>>>> refs/remotes/origin/master
var concat = require('gulp-concat');
var gutil = require('gulp-util');
var gif = require('gulp-if');
var args = require('yargs').argv;
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var runSequence = require('run-sequence');
var sourcemaps = require('gulp-sourcemaps');
var util = require('gulp-util');

// HTML Dependencies
var htmlmin = require('gulp-htmlmin');

// CSS Dependencies
var less = require('gulp-less');
var cleancss = require('gulp-clean-css');
var autoprefixer = require('gulp-autoprefixer');

// JavaScript Dependencies
var browserify = require('browserify');
var babelify = require('babelify');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var stripDebug = require('gulp-strip-debug');

// LiveReload Dependencies
var livereload = require('gulp-livereload');
var live = 'livereload()';

gulp.task('default', function () {
  runSequence('livereload');
  runSequence('watch');
});

gulp.task('livereload', function () {
  live = 'livereload()';
  livereload.listen();
});

gulp.task('watch', function () {
  
  // Watch HTML.
  gulp.watch('index.html', function (file) {
    runSequence('build-html');
  }).on('error', function (err) {
    gutil.log(err);
  });

  // Watch CSS.
  gulp.watch('css/styles.less', function (file) {
    runSequence('build-css');
  }).on('error', function (err) {
    gutil.log(err);
  });

  // Watch JS.
  gulp.watch('js/*.js', function (file) {
    runSequence('build-js');
  }).on('error', function (err) {
    gutil.log(err);
  });

  //Watch JSX
<<<<<<< HEAD
  gulp.watch('js/Components/*.jsx', function (file) {
=======
  gulp.watch('js/components/*.jsx', function (file) {
>>>>>>> refs/remotes/origin/master
    runSequence('build-js');
  }).on('error', function (err) {
    gutil.log(err);
  });
});

// Build all.
gulp.task('build', function() {
  runSequence('build-html');
  runSequence('build-css');
  runSequence('build-js');
});

// Build Html.
gulp.task('build-html', function() {
  return gulp.src(['./index.html'])
    .pipe(htmlmin({
      collapseWhitespace:true
    }))
<<<<<<< HEAD
    .pipe(gulp.dest('./public'))
=======
    .pipe(gulp.dest('./prod'))
>>>>>>> refs/remotes/origin/master
    .pipe(eval(live));
});

// Build CSS.
gulp.task('build-css', function() {
  return gulp.src(['./css/styles.less'])
    .pipe(sourcemaps.init())
    .pipe(less()).on('error', function (err) {
      gutil.log(err);
      this.emit('end');
    })
    .pipe(autoprefixer({
      browsers:['last 2 versions'],
      cascade:false
    }))
    .pipe(cleancss())
    .pipe(concat('styles.min.css'))
    .pipe(sourcemaps.write('.'))
<<<<<<< HEAD
    .pipe(gulp.dest('./public/css')).on('error', gutil.log)
=======
    .pipe(gulp.dest('./prod/css')).on('error', gutil.log)
>>>>>>> refs/remotes/origin/master
    .pipe(gif('*.css', eval(live)));
});
// Build JS.
gulp.task('build-js', ['lint'], function () {
    var b = browserify({
      entries: './js/main.js', 
      debug: true, 
      transform: [babelify.configure({
        presets: ['react', 'es2015']
      })]
    });
    return b.bundle()
      .pipe(source('./js/main.js'))
      .pipe(buffer())
<<<<<<< HEAD
      .pipe(uglify({
        compress:true,
        mangle:true
      }))
      .pipe(sourcemaps.init( {loadMaps: true }))
      .pipe(concat('index.min.js'))
        .on('error', util.log)
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('./public/js')).on('error', gutil.log)
=======
      .pipe(sourcemaps.init( {loadMaps: true }))
      .pipe(concat('index.js'))
        .on('error', util.log)
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('./prod/js')).on('error', gutil.log)
>>>>>>> refs/remotes/origin/master
      .pipe(gif('*.js', eval(live)))
});

// Linting.
gulp.task('lint', function () {
  return gulp.src('./js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

