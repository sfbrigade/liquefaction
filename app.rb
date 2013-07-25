require 'sinatra'
require 'erb'
require 'coffee-script'
require 'sass'

set :root, File.dirname(__FILE__)

#Needed for Coffeescript and SCSS
# get '/js/:script.js' do |script|
#   coffee :"coffee/#{script}"
# end

# get '/vendor/bootstrap/js/bootstrap.min.js' do |script|
#   coffee :"coffee/#{script}"
# end

configure do
  set :public_folder, Proc.new { File.join(root, "public") }
end

# get '/css/:stylesheet.css' do |stylesheet|
#   scss :"scss/#{stylesheet}"
# end

#Starting actual application
get '/' do
  erb :index
end
