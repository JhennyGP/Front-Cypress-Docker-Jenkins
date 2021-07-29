# Front-Cypress-Docker-Jenkins
Projeto de front em Cypress (Cucumber, Gherkin etc) usando o docker e Jenkis

docker network create jenkins
d0c7b0d118351b4b88f63613b0536e2a8e0204b8dea28b6b3a064f51e084c50d - docker


a4d36e09ce72059132d79cab3076922d795602a00068ba5b0352790e6f4db757 - jenkinss

docker container run  --name jenkins-blueocean --rm --detach ^
  --network jenkins --env DOCKER_HOST=tcp://docker:2376 ^
  --env DOCKER_CERT_PATH=/certs/client --env DOCKER_TLS_VERIFY=1 ^
  --volume jenkins-data:/var/jenkins_home ^
  --volume jenkins-docker-certs:/certs/client:ro ^
  --publish 8080:8080 --publish 50000:50000 jenkinsci/blueocean

e97b35eab34f6a3aecffecdd7a66bc745242aad3d14d986d5b4b8f323f91fc43 - container jenskis

docker container run  --name jenkins-docker --rm --detach ^
  --privileged --network jenkins --network-alias docker ^
  --env DOCKER_TLS_CERTDIR=/certs ^
  --volume jenkins-docker-certs:/certs/client ^
  --volume jenkins-data:/var/jenkins_home ^
  docker:dind

263b55fb3fb142aa03a058a545ee63a840d9c743a1ef5561428ca93afc8ee691 - container docker in docker

docker container exec -it <id_container-jenkins> bash
cat /var/jenkins_home/secrets/initialAdminPassword
admin password - ff18a1d6c9de4878b806cf625a36d10c

JobLivrariaLeituraJenkins - Nome Job