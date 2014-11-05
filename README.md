## Install MongoDB

With a volume:
docker run -d -p 127017:27017 -p 128017:28017 -v /docker_volumes/mongodb/data:/data/db --name mongodb dockerfile/mongodb

Without a volume:
docker run -d -p 27017:27017 -p 28017:28017 --name mongodb dockerfile/mongodb

## Build mean-base

cd mean-base && docker build -t sparkedsys/mean-base .


## Build app 
docker build -t sparkedsys/spider-thu .
docker run -d -p 3000:3000 --name=spider-thu --link mongodb:mongodb sparkedsys/spider-thu