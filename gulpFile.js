(function() {
	'use strict';

	var gulp = require('gulp'),
		watch = require('gulp-watch'),
		jshint = require('gulp-jshint'),
		livereload = require('gulp-livereload'),
		gls = require('gulp-live-server'),
		_paths = ['server/**/*.js', 'public/js/*.js'];

		gulp.task('serve', function () {
			var server = gls.new('bin/www');
			server.start();
		});

		gulp.task('watch', function () {
			livereload.listen();
			gulp.src(_paths, {
				read: false
			})
			.pipe(watch({
				emit: 'all'
			}))
			.pipe(jshint())
			.pipe(jshint.reporter('default'));
			watch(_paths, livereload.changed);
		});

		gulp.task('lint', function() {
			gulp.src(_paths)
			.pipe(jshint())
			.pipe(jshint.reporter('default'));
		});

		gulp.task('default', ['lint','watch']);
	}());
