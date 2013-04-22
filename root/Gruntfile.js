'use strict';

module.exports = function( grunt ) {

	// Project configuration
	grunt.initConfig( {
		pkg:    grunt.file.readJSON( 'package.json' ),
		concat: {
			options: {
				stripBanners: true,
				banner: '/*! <%= pkg.title %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n' +
					' * <%= pkg.homepage %>\n' +
					' * Copyright (c) <%= grunt.template.today("yyyy") %>;' +
					' * Licensed GPLv2+' +
					' */\n'
			},
			{%= js_safe_name %}: [
				src: [
					'js/src/{%= js_safe_name %}.js'
				],
				dest: 'js/{%= js_safe_name %}.src.js'
			]
		},
		jshint: {
			all: [
				'Gruntfile.js',
				'js/src/**/*.js',
				'js/test/**/*.js'
			],
			options: {
				curly:   true,
				eqeqeq:  true,
				immed:   true,
				latedef: true,
				newcap:  true,
				noarg:   true,
				sub:     true,
				undef:   true,
				boss:    true,
				eqnull:  true,
				globals: {
					exports: true,
					module:  false
				}
			}		
		},
		uglify: {
			all: {
				files: {
					'js/{%= js_safe_name %}.min.js': ['js/{%= js_safe_name %}.src.js']
				},
				options: {
					banner: '/*! <%= pkg.title %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n' +
						' * <%= pkg.homepage %>\n' +
						' * Copyright (c) <%= grunt.template.today("yyyy") %>;' +
						' * Licensed GPLv2+' +
						' */\n'
					mangle: {
						except: ['jQuery']
					}
				}
			}
		},
		test:   {
			files: ['test/**/*.js']
		},
		watch:  {
			scripts: {
				files: ['js/src/**/*.js', 'js/vendor/**/*.js'],
				tasks: ['jshint', 'concat', 'uglify'],
				options: {
					debounceDelay: 500
				}
			},
			sass: {
				files: ['css/sass/*.scss'],
				tasks: ['sass'],
				options: {
					debounceDelay: 500
				}
			},
			less: {
				files: ['css/less/*.less'],
				tasks: ['less'],
				options: {
					debounceDelay: 500
				}
			}	
		},
		sass:   {
			all: {
				files: {
					'css/s{%= js_safe_name %}.css': 'css/sass/{%= js_safe_name %}.scss'
				}
			}
		},
		less:   {
			all: {
				files: {
					'css/l{%= js_safe_name %}.css': 'css/less/{%= js_safe_name %}.less'
				}
			}		
		}
	} );
	
	// Load other tasks
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	
	// Default task.
	grunt.registerTask( 'default', ['jshint', 'concat', 'uglify', 'sass', 'less'] );

	grunt.util.linefeed = '\n';
};