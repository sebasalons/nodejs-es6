let gulp = require('gulp');
let mocha = require('gulp-mocha');

gulp.task('test', function(){

    let error = false;

    gulp
        .src(['./test/*.js'])
        .pipe(mocha())
        .on('error', function(){
            error = true;
        })
        .on('end', function(){
            if (error) {
                console.log('Tests failed!');
                return;
            }
            console.log('Tests successful');
        });
});

gulp.task('watch', function(){
    gulp.watch(['./test/*.js', './src/**/*.js'], ['test']);
});

