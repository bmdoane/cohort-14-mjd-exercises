// Look in node_modules folder and require these packages
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var watch = require('gulp-watch');

// What happens when you type in just gulp - run lint task and watch task
// run lint once, then watch (which will run lint subsequently as seen below)
gulp.task('default', ['lint', 'watch']);

// Constantly monitors your code - where to watch(folder path), run lint
gulp.task('watch', function() { 
	gulp.watch('./javascripts/**/*.js', ['lint']);
 });

gulp.task('lint', function() { 
	return gulp.src('./javascripts/**/*.js')
	// jshint scoures code and finds all syntax errors 
	.pipe(jshint()) 
	// jshint-stylish formats error code so easier to read
	.pipe(jshint.reporter('jshint-stylish')); 
});