( function() {
	'use strict';

	describe( 'vui-breadcrumbs', function() {

		var node;

		beforeEach( function () {
			jasmine.addMatchers( d2l.jasmine.matchers );
			node = document.body.appendChild( document.createElement( 'div' ) );
			node.className = 'vui-breadcrumbs';
		} );

		afterEach( function() {
			document.body.removeChild( node );
		} );

		it( 'defines a ".vui-breadcrumbs" selector', function() {
			expect( document ).toHaveCssSelector( '.vui-breadcrumbs' );
		} );

	} );

} )();