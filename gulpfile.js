var gulp = require( 'gulp' );
var stylus = require( 'gulp-stylus' );
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
    return gulp.src( './src/*.html')
        .pipe(gulp.dest('./bin/'));
});

// ----------------------------------------------------------------------------
gulp.task( 'watch' , function() {
    gulp.watch( './src/styles/*.styl', ['stylus'] );
    gulp.watch( './src/*.html', ['html'] );
});

// ----------------------------------------------------------------------------
gulp.task( 'default', ['stylus', 'html'] );