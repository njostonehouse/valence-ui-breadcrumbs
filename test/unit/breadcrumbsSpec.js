( function() {
	'use strict';

	describe( 'vui', function() {

		var node, b1, b2, b3;

		beforeEach( function () {
			jasmine.addMatchers( d2l.jasmine.matchers );
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
				b2 = node.appendChild( document.createElement( 'li' ) );
				b3 = node.appendChild( document.createElement( 'li' ) );
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
					expect( b1 ).toHaveAfterElementContent( 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAPCAYAAADZCo4zAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3QsMEBcXxQSJ2QAAAAd0RVh0QXV0aG9yAKmuzEgAAAAMdEVYdERlc2NyaXB0aW9uABMJISMAAAAKdEVYdENvcHlyaWdodACsD8w6AAAADnRFWHRDcmVhdGlvbiB0aW1lADX3DwkAAAAJdEVYdFNvZnR3YXJlAF1w/zoAAAALdEVYdERpc2NsYWltZXIAt8C0jwAAAAh0RVh0V2FybmluZwDAG+aHAAAAB3RFWHRTb3VyY2UA9f+D6wAAAAh0RVh0Q29tbWVudAD2zJa/AAAABnRFWHRUaXRsZQCo7tInAAAAdElEQVQYlX2PQQqEQBADo1+aq7Aw/mtA/+Ve9pq8KV5ExrF7Aw0NVQQy2ca/zAAgaUkFSRXAT1ILDdsguZE0yWYb/d1PJj3sSMJYOUpTNFPSAaACWOcAtgvupZTvWN+u+i1a8YK3kEHbAMmawb7hE8F0Zp8TqrDyyH7mhFwAAAAASUVORK5CYII=)' );
				} );

			} );

			describe( 'last breadcrumb', function() {

				it( 'has green color', function() {
					expect( b3 ).toHaveColor( 'rgb(0, 128, 0)' );
				} );

				it( 'has after pseudo-element with display none', function() {
					expect( b3 ).toHaveAfterElementDisplay( 'none' );
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
					expect( b1 ).toHaveAfterElementContent( 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAPCAYAAADZCo4zAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3QsMEBgQ3PgAtQAAAAd0RVh0QXV0aG9yAKmuzEgAAAAMdEVYdERlc2NyaXB0aW9uABMJISMAAAAKdEVYdENvcHlyaWdodACsD8w6AAAADnRFWHRDcmVhdGlvbiB0aW1lADX3DwkAAAAJdEVYdFNvZnR3YXJlAF1w/zoAAAALdEVYdERpc2NsYWltZXIAt8C0jwAAAAh0RVh0V2FybmluZwDAG+aHAAAAB3RFWHRTb3VyY2UA9f+D6wAAAAh0RVh0Q29tbWVudAD2zJa/AAAABnRFWHRUaXRsZQCo7tInAAAAd0lEQVQYlX2QQQrDMBADx/3SXguF5F8G91/NC7RvUi6h2MSOwKcRslbFNk96rUBmvgHKLCEzK9CAHdvDk1QlWVKzzSMcDDP4N6ygbYqkDfgBR0TstzMj4gC+wHa1H9V1aNc39dbhyTTbYTCtlmxAnS7ZJX2WCb1OE7rgO13/FnUAAAAASUVORK5CYII=)' );
				} );

				it( 'has after pseudo-element with display none', function() {
					expect( b3 ).toHaveAfterElementDisplay( 'none' );
				} );

			} );

		} );

	} );

} )();