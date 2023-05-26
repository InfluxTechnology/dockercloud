# InfluxFleet


Docker image is build with 
docker build . -t rexcloud

And then the run command is:
docker run -d -p 1337:1337 -p 3000:3000 -e "REGION=eu-central-1" -e "ACCESS_KEY=<YOU_AWS_ACCESS_KEY>" -e "SECRET_KEY=<YOU_AWS_SECRET_KEY>" --name rexcloud rexcloud
