## Install MongoDB

To start a MongoDB instance without an external volume mounted:
```
docker run -d -p 27017:27017 -p 28017:28017 --name mongodb dockerfile/mongodb
```

With an external volume:
```
docker run -d -p 127017:27017 -p 128017:28017 -v /docker_volumes/mongodb/data:/data/db --name mongodb dockerfile/mongodb
```

## Build mean-base

By building up the base image first it makes it much faster to build the application on it. This Dockerfile starts with a bare Debian image installs curl and build-essential, then installs nodejs and many of the common node modules into an /app directory. That is where our application should be installed to take advantage of the pre-building.
```
cd mean-base && docker build -t spiderlogic/mean-base .
```


## Build app 
Two steps here, one to build the application image and another to start the application container. Note the --link argument which causes it to be linked to the already running MongoDB container.
```
docker build -t spiderlogic/spider-thu .
docker run -d -p 3000:3000 --name=spider-thu --link mongodb:mongodb spiderlogic/spider-thu
```

## Accessing
The ip address below came from "boot2docker ip"

```
http://192.168.59.103:3000/index.html
```

## Attach for Troublshooting
```
docker exec -it spider-thu bash
```
