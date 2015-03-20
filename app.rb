require 'sinatra'

get '/' do
  haml :index
end

get '/style.css' do
  scss 'style/style'.to_sym
end
