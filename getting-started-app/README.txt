--- Commands Docker Image Created:

*Basic Commands*
docker build -t app .
docker build -t app:v1.0.0 .
docker image remove app:v1.0.0 
docker images

*Rename Image Tag*
docker image tag app:latest app:v1.0.0

*Repository*
docker login
docker push alanarocha/app:v1

*Create a new Docker image in the repository*
The push refers to repository [docker.io/alanarocha/app]

*Save and loading docker images*
Save archive with .tar - Back up without needing a connection to Docker Hub or other registries.
docker image save -o appv2.tar app:v2

*Upload Repository*
docker image load -i appv2.tar

--- Commands Docker Container Created:

*View containers*
docker ps

*Create container*
docker run -d [container name]

*Rename containers*
docker run -d --name containerapp2 app:v2

*Checking event logs*
docker logs -n {10} [container id]
...[OPTIONS]

--see all logs in container
docker logs [container id]

--see timestamps in container
docker logs -t [container id]

*Public acess port*
docker run -d -p 80:3000 --name [new container name] [repository:tag]
docker run -d -p host:docker

*ls in docker*
docker exec [container name] ls

*Stop container*
docker stop [container name]

*Start container*
docker start [container name]

*Remove container*
docker rm [container name]
docker rm -f [container name]

--- Create volumes

docker volume create [volume name]

docker volume inspect [volume name] -- return object json

*Create container with volume*

docker run -d -p 3000:3000 --name [new container name] -v [volume name]:/app/dados [image name]

*extra*
echo hi docker > docker.txt
cat docker.txt

*Copy archive from my local machine*

docker -> local machine
docker cp [container name]:/getting-started-app/teste.txt .

local machine -> docker
docker cp [file/archive/etc...] container3_v3:getting-started-app/