heroku run rake db:setup

heroku pg:copy pacific-fortress-75674::DATABASE_URL DATABASE_URL -a wedding-comments