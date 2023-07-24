FROM nginx

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/conf.d/nginx.conf

COPY build/ /usr/share/nginx/html

#   commands
#   npm run build
#   docker image build --tag react-app .
#   docker container run --detach --name react-app-container --publish 8080:80 react-app

#   Open localhost:8080 in the browser