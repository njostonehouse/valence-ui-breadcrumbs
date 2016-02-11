( function() {
	'use strict';

	describe( 'vui-breadcrumbs', function() {

		var node, b1, b2, b3, text1, text2, text3;

		beforeEach( function () {
			jasmine.addMatchers( vui.jasmine.dom.matchers );
		} );

		describe( 'selectors', function() {

			it( 'defines a ".vui-breadcrumbs" selector', function() {
				expect( document ).toHaveCssSelector( '.vui-breadcrumbs' );
			} );

			it( 'defines breadcrumb selectors', function() {
				expect( document ).toHaveCssSelector( '.vui-breadcrumbs > li' );
				expect( document ).toHaveCssSelector( '.vui-breadcrumbs > div' );
				expect( document ).toHaveCssSelector( '.vui-breadcrumbs > span' );
			} );

			it( 'rtl selectors breadcrumb selectors', function() {
				expect( document ).toHaveCssSelector( '[dir="rtl"] .vui-breadcrumbs > li:last-child::after' );
				expect( document ).toHaveCssSelector( '[dir="rtl"] .vui-breadcrumbs > div:last-child::after' );
				expect( document ).toHaveCssSelector( '[dir="rtl"] .vui-breadcrumbs > span:last-child::after' );
			} );

		} );

		describe( 'ol breadcrumbs', function() {

			beforeEach( function () {

				node = document.body.appendChild( document.createElement( 'ol' ) );
				node.className = 'vui-breadcrumbs';
				node.style.color = 'green';

				b1 = node.appendChild( document.createElement( 'li' ) );
				text1 = b1.appendChild( document.createElement( 'a' ) );
				text1.appendChild( document.createTextNode( 'crumb1' ) );

				b2 = node.appendChild( document.createElement( 'li' ) );
				text2 = b2.appendChild( document.createElement( 'a' ) );
				text2.appendChild( document.createTextNode( 'crumb2' ) );

				b3 = node.appendChild( document.createElement( 'li' ) );
				text3 = b3.appendChild( document.createElement( 'span' ) );
				text3.appendChild( document.createTextNode( 'crumb3' ) );

			} );

			afterEach( function() {
				document.body.removeChild( node );
			} );

			describe( 'breadcrumbs', function() {

				it( 'has 0 padding', function() {
					expect( node ).toHavePadding( '0px' );
				} );

				it( 'has 0 margin', function() {
					expect( node ).toHaveMargin( '0px' );
				} );

				it( 'has list-style-type of none', function() {
					expect( node ).toHaveListStyleType( 'none' );
				} );

			} );

			describe( 'first breadcrumb', function() {

				it( 'has transparent background-color', function() {
					expect( b1 ).toHaveBackgroundColor( 'rgba(0, 0, 0, 0)' );
				} );

				it( 'has green color', function() {
					expect( b1 ).toHaveColor( 'rgb(0, 128, 0)' );
				} );

				it( 'has display of inline-block', function() {
					expect( b1 ).toHaveDisplay( 'inline-block' );
				} );

				it( 'has list-style-type of none', function() {
					expect( b1 ).toHaveListStyleType( 'none' );
				} );

				it( 'has after pseudo-element with display inline', function() {
					expect( b1 ).toHaveAfterElementDisplay( 'inline-block' );
				} );

				it( 'has seperator with icon content', function() {
					expect( b1 ).toHaveAfterElementContent( 'url(data:image/svg+xml,%3Csvg%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M11%209L7%203m4%206l-4%206%22%20stroke-linecap%3D%22round%22%20stroke%3D%22%23B9C2D0%22%20stroke-linejoin%3D%22round%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E)' );
				} );

				it( 'text has link color', function() {
					expect( text1 ).toHaveColor( 'rgb(0, 111, 191)' );
				} );

			} );

			describe( 'last breadcrumb', function() {

				it( 'has green color', function() {
					expect( b3 ).toHaveColor( 'rgb(0, 128, 0)' );
				} );

				it( 'has after pseudo-element with display none', function() {
					expect( b3 ).toHaveAfterElementDisplay( 'none' );
				} );

				it( 'text has green color', function() {
					expect( text3 ).toHaveColor( 'rgb(0, 128, 0)' );
				} );

			} );

			describe( 'rtl', function() {

				beforeEach( function () {
					document.body.setAttribute( 'dir', 'rtl' );
				} );

				it( 'has seperator with icon content', function() {
					expect( b1 ).toHaveAfterElementContent( 'url(data:image/svg+xml,%3Csvg%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M7%209l4-6M7%209l4%206%22%20stroke-linecap%3D%22round%22%20stroke%3D%22%23B9C2D0%22%20stroke-linejoin%3D%22round%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E)' );
				} );

				it( 'has after pseudo-element with display none', function() {
					expect( b3 ).toHaveAfterElementDisplay( 'none' );
				} );

			} );

		} );

	} );

} )();
