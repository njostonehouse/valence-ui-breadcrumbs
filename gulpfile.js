var gulp = require( 'gulp' ),
	del = require( 'del' ),
	vui = require( 'vui-helpers' ),
	imagesToLess = require( 'images-to-less-variables' );

gulp.task( 'clean', function( cb ) {
	del([ 'breadcrumbs.css' ], cb);
} );

gulp.task( 'iconsLess', function ( done ) {
	imagesToLess( '*.png', {
		dest: 'breadcrumbs-icons.less',
		prefix: 'vui-'
	} ).then( function() {
		done();
	} );
} );

gulp.task( 'css', [ 'iconsLess' ],  function () {
	return vui.makeCss( 'breadcrumbs.css.less', 'breadcrumbs.css' );
} );

gulp.task( 'default', [ 'clean' ], function() {
	gulp.start( 'css' );
} );

gulp.task( 'test', function () {
	return vui.test( {
		files: [
			'test/unit/**/*Spec.js',
			'breadcrumbs.css'
		]
	} ) ;
} );
