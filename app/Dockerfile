############################################################
# Dockerfile to build Python WSGI Application Containers
# Based on Debian
#
# sudo docker build -t spiderlogic/spider-thu .
############################################################

# Set the base image to Debian
FROM spiderlogic/mean-base

# File Author / Maintainer
MAINTAINER Rick Sperko

COPY public /app/public
COPY server /app/server
COPY package.json /app/package.json

WORKDIR /app

CMD ["/usr/bin/node", "/app/server/server.js"]