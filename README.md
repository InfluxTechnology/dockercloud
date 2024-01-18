# InfluxFleet

<b>Installation </b> <br>
Docker CE must be installed for your OS (Windows, linux) <br>
Clone repo or Download <br>
<code> git clone https://github.com/InfluxTechnology/dockercloud.git </code> <br>

Docker image is build with <br>    
<pre>
    <code>docker build . -t rexcloud</code>
</pre>
And then the run command is: <br>
<pre>
    <code>docker run -d -p 1337:1337 -p 3000:3000 -e "REGION=eu-central-1" -e "ACCESS_KEY=<YOU_AWS_ACCESS_KEY>" -e "SECRET_KEY=<YOU_AWS_SECRET_KEY>" --name rexcloud rexcloud</code>
</pre>

Where 1337 is the port for the Fleet Management System. <br>
Port 3000 is the port for direct access to Grafana <br>
ACCESS_KEY - The access key to the Amazon Web Services<br>
SECRET_KEY - The secret key to the Amazon Web Services<br>
REGION - the Amazon region

Open in your browser localhost:1337
