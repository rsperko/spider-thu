############################################################
# Dockerfile to build Python WSGI Application Containers
# Based on Debian
#
# sudo docker build -t spiderlogic/mean-base .
############################################################

# Set the base image to Debian
FROM debian:wheezy

# File Author / Maintainer
MAINTAINER Rick Sperko

# Update the sources list
RUN apt-get update

RUN apt-get -y install build-essential curl

# Install Node
RUN curl -sL https://deb.nodesource.com/setup | bash -
RUN apt-get -y install nodejs

# Install mean

# Set up the app directory
RUN mkdir /app

COPY package.json /app/package.json

WORKDIR /app
RUN npm install