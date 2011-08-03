// This is a manifest file that'll be compiled into including all the files listed below.
// Add new JavaScript/Coffee code in separate files in this directory and they'll automatically
// be included in the compiled file accessible from http://example.com/assets/application.js
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
//= require jquery
//= require jquery_ujs
//= require jquery.validate/jquery.validate.min
<%- if additions_for_gemfile.keys.any? { |name| %w{spree spree_core}.include? name.to_s } -%>
//= require store/spree_core
<%- end -%>
//= require_tree .
