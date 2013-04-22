<?php
/**
 * Plugin Name: {%= name %}
 * Plugin URI:  {%= homepage %}
 * Description: {%= description %}
 * Version:     0.1.0
 * Author:      {%= author_name %}
 * Author URI:  {%= author_url %}
 * License:     GPLv2+
 */
?>

<?php
/** 
 * Copyright {%= grunt.template.today('yyyy') %}  {%= author_name %}  (email : {%= author_email %})
 * 
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License, version 2 or, at
 * your discretion, any later version, as published by the Free
 * Software Foundation.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
 */
 
// Useful global constants
define( '{%= js_safe_name_caps %}_VERSION', '0.1.0' );
define( '{%= js_safe_name_caps %}_URL',     plugin_dir_url( __FILE__ ) );
define( '{%= js_safe_name_caps %}_PATH',    dirname( __FILE__ ) . '/' );

/**
 * Default initialization for the plugin:
 * - Registers the default textdomain.
 */
function {%= js_safe_name %}_init() {
	load_plugin_textdomain( '{%= js_safe_name %}_translate', false, dirname( dirname( plugin_basename( __FILE__ ) ) ) . '/lang' );
}

/**
 * Activate the plugin
 */
function {%= js_safe_name %}_activate() {
	// First load the init scripts in case any rewrite functionality is being loaded
	{%= js_safe_name %}_init();

	flush_rewrite_rules();
}
register_activation_hook( __FILE__, '{%= js_safe_name %}_activate' );

/**
 * Deactivate the plugin
 */
function {%= js_safe_name %}_deactivate() {

}
register_deactivation_hook( __FILE__, '{%= js_safe_name %}_deactivate' );

// Wireup actions
add_action( 'init',           '{%= js_safe_name %}_init' );

// Wireup filters

// Wireup shortcodes
?>