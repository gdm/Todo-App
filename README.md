# To-do App
A To-do app using Nodejs , express , mangodb , googleauth

This repository contains code for To-do App using Nodejs , express , mangodb , googleauth

Technology used : -Nodejs -express 

# Dependencies 

```
Nodejs
express
express-session
method-override
mongoose
dotenv
connect-mongo
passport
passport-google-oauth20
path
```

# Demo
Setup DNS, HTTPS host (nginx):
```
    server {
        listen       443 ssl http2 default_server;
        listen       [::]:443 ssl http2 default_server;
        server_name  coding-assesment.savesources.com;
        root         /usr/share/nginx/html;

        ssl_certificate "/etc/letsencrypt/live/coding-assesment.savesources.com/fullchain.pem";
        ssl_certificate_key "/etc/letsencrypt/live/coding-assesment.savesources.com/privkey.pem";
        ssl_session_cache shared:SSL:1m;
        ssl_session_timeout  10m;
        ssl_ciphers HIGH:!aNULL:!MD5;
        ssl_prefer_server_ciphers on;

        # Load configuration files for the default server block.
        include /etc/nginx/default.d/*.conf;

        location / {
          #proxy_set_header   Host             $host;
          proxy_pass_request_headers on;
          proxy_pass http://127.0.0.1:3000;
        }

        error_page 404 /404.html;
            location = /40x.html {
        }

        error_page 500 502 503 504 /50x.html;
            location = /50x.html {
        }
    }

```

Run ``` npm install ``` for installing dependency (tested with nodejs v14.19.0 under nvm).

Register application('project) in Google Console https://console.developers.google.com/ , then generate CLIENT_ID and CLIENT_SECRET (Credentials->OAuth 2.0 Client ID).

Create MongoDB database and get connection string (https://cloud.mongodb.com/ )

Copy the config/config.env.template to config/config.env and update with MONGO_URI , GOOGLE_CLIENT_ID , GOOGLE_CLIENT_SECRET and APP_DOMAIN.

Run test db connection by ``` npm test ```

Run application ``` npm run dev  ```

[VIEW DEMO](https://coding-assesment.savesources.com/)

