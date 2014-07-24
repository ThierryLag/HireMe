var gulp = require( 'gulp' );
var gutil = require( 'gulp-util' );
var rimraf = require('gulp-rimraf');
var stylus = require( 'gulp-stylus' );
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
gulp.task( 'jade', function() {
    return gulp.src( 'src/templates/*.jade' )
        .pipe( jade() )
        .on( 'error', gutil.log )
        .pipe( gulp.dest( 'public/' ) )
});

// ----------------------------------------------------------------------------
gulp.task( 'watch' , function() {
    gulp.watch( 'src/styles/*.styl', ['stylus']);
    gulp.watch( 'src/templates/*.jade', ['jade']);
});

// ----------------------------------------------------------------------------
gulp.task( 'default', ['clean', 'stylus', 'jade'] );