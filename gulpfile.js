var gulp = require( 'gulp' );
var stylus = require('gulp-stylus');
var koutoSwiss = require( "kouto-swiss" );

// ----------------------------------------------------------------------------
gulp.task( 'stylus', function() {
    return gulp.src( './src/css/*.styl' )
        .pipe( stylus({
            errors: true, 
            use:koutoSwiss()
        }))
        .pipe( gulp.dest( './bin/css' ) );
});

// ----------------------------------------------------------------------------
gulp.task( 'watch' , function() {
    gulp.watch( './src/css/*.styl', ['stylus'] );
});

// ----------------------------------------------------------------------------
gulp.task( 'default', ['stylus'] );