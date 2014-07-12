var gulp = require( 'gulp' );
var stylus = require( 'gulp-stylus' );
var minifyCSS = require( 'gulp-minify-css' );
var koutoSwiss = require( 'kouto-swiss' );

// ----------------------------------------------------------------------------
gulp.task( 'stylus', function() {
    return gulp.src( './src/css/*.styl' )
        .pipe( stylus({
            errors: true, 
            use:koutoSwiss()
        }))
        .pipe( minifyCSS() )
        .pipe( gulp.dest( './bin/css' ) );
});

// ----------------------------------------------------------------------------
gulp.task( 'html', function() {
    return gulp.src( './src/*.html')
        .pipe(gulp.dest('./bin/'));
});

// ----------------------------------------------------------------------------
gulp.task( 'watch' , function() {
    gulp.watch( './src/css/*.styl', ['stylus'] );
    gulp.watch( './src/*.html', ['html'] );
});

// ----------------------------------------------------------------------------
gulp.task( 'default', ['stylus', 'html'] );