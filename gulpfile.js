var gulp = require( 'gulp' );
var gutil = require( 'gulp-util' );
var rimraf = require('gulp-rimraf');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var stylus = require( 'gulp-stylus' );
var coffee = require( 'gulp-coffee' );
var jade = require('gulp-jade');
var koutoSwiss = require( 'kouto-swiss' );

// ----------------------------------------------------------------------------
gulp.task( 'clean', function() {
    var clearFiles = [
        'public/*.html',
        'public/assets/**/*.css',
        'public/assets/**/*.js'
    ]; 

    return gulp.src( clearFiles, { read: false } )
        .pipe( rimraf() )
        .on( 'error', gutil.log );
});

// ----------------------------------------------------------------------------
gulp.task( 'stylus', function() {
    return gulp.src( 'src/styles/*.styl' )
        .pipe( stylus({
            compress: true,
            use: [ koutoSwiss() ]
        }) )
        .on( 'error', gutil.log )
        .pipe( gulp.dest( 'public/assets' ) );
});

// ----------------------------------------------------------------------------
gulp.task( 'scripts', function() {
    return gulp.src( 'src/scripts/*.js' )
        .pipe( concat( 'app.js' ) )
        .pipe( gulp.dest( 'public/assets' ))
        .pipe( rename( 'app.min.js' ) )
        .pipe( uglify() )
        .pipe( gulp.dest( 'public/assets' ))
});

// ----------------------------------------------------------------------------
gulp.task( 'coffee', function() {
    return gulp.src( 'src/scripts/*.coffee' )
        .pipe( coffee() )
        .on( 'error', gutil.log )
        .pipe( concat( 'app.js' ) )
        .pipe( gulp.dest( 'public/assets' ))
        .pipe( rename( 'app.min.js' ) )
        .pipe( uglify() )
        .pipe( gulp.dest( 'public/assets' ))
});

// ----------------------------------------------------------------------------
gulp.task( 'jade', function() {
    return gulp.src( 'src/templates/*.jade' )
        .pipe( jade() )
        .on( 'error', gutil.log )
        .pipe( gulp.dest( 'public/' ) )
});

// ----------------------------------------------------------------------------
gulp.task( 'watch' , function() {
    gulp.watch( 'src/styles/*.styl', ['stylus']);
    //gulp.watch( 'src/scripts/*.js', ['scripts']);
    gulp.watch( 'src/scripts/*.coffee', ['coffee']);
    gulp.watch( 'src/templates/*.jade', ['jade']);
});

// ----------------------------------------------------------------------------
gulp.task( 'default', ['clean', 'stylus', 'coffee', 'jade'] );