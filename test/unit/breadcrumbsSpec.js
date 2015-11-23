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
					expect( b1 ).toHaveAfterElementDisplay( 'inline' );
				} );

				it( 'has after pseudo-element with base-64 icon seperator', function() {
					expect( b1 ).toHaveAfterElementBase64Image();
				} );

				it( 'has seperator with icon content', function() {
					expect( b1 ).toHaveAfterElementContent( 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAPBAMAAAArJJMAAAAAGFBMVEX////MzMzMzMzMzMzMzMzMzMzMzMzMzMzp9kNTAAAAB3RSTlMAPD9CfoG9/ZexDgAAACtJREFUCNdjYAABRhBh7gAkWEtAzHA0JlsxkHAPYGBgKUVmmAMZDEwMUAAA1JAFu/qZoCgAAAAASUVORK5CYII=)' );
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

				it( 'has after pseudo-element with base-64 icon seperator', function() {
					expect( b1 ).toHaveAfterElementBase64Image();
				} );

				it( 'has seperator with icon content', function() {
					expect( b1 ).toHaveAfterElementContent( 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAPBAMAAAArJJMAAAAAGFBMVEX////MzMzMzMzMzMzMzMzMzMzMzMzMzMzp9kNTAAAAB3RSTlMAPD9CfoG9/ZexDgAAACpJREFUCNdjYIACASBmKQYS7gFARikywzwBSLCWgFSFO6AxQToYFMAmAADbqgX3+tMKZQAAAABJRU5ErkJggg==)' );
				} );

				it( 'has after pseudo-element with display none', function() {
					expect( b3 ).toHaveAfterElementDisplay( 'none' );
				} );

			} );

		} );

	} );

} )();
