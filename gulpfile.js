var gulp = require( 'gulp' );
var stylus = require( 'gulp-stylus' );
var jade = require('gulp-jade');
var minifyCSS = require( 'gulp-minify-css' );
var koutoSwiss = require( 'kouto-swiss' );

// ----------------------------------------------------------------------------
gulp.task( 'stylus', function() {
    return gulp.src( './src/styles/*.styl' )
        .pipe( stylus({
            errors: true, 
            use:koutoSwiss()
        }))
        .pipe( minifyCSS() )
        .pipe( gulp.dest( './bin/styles' ) );
});

// ----------------------------------------------------------------------------
gulp.task( 'html', function() {
    return gulp.src( './src/*.html' )
        .pipe( gulp.dest( './bin/' ) );
});

// ----------------------------------------------------------------------------
gulp.task( 'jade', function() {
    console.log("Update jade file")
    return gulp.src( './src/templates/*.jade' )
        .pipe( jade() )
        .pipe( gulp.dest( './bin/' ) )
});

// ----------------------------------------------------------------------------
gulp.task( 'watch' , function() {
    gulp.watch( 'src/styles/*.styl', ['stylus'] );
    gulp.watch( 'src/templates/*.jade', ['jade'] );
});

// ----------------------------------------------------------------------------
gulp.task( 'default', ['stylus', 'watch'] );