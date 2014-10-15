var gulp = require( 'gulp' ),
	del = require( 'del' ),
	vui = require( 'vui-helpers' );

gulp.task( 'clean', function( cb ) {
	del([ 'breadcrumbs.css' ], cb);
} );

gulp.task( 'css', function () {
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
