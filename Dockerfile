#worked conf
#FROM node:14-alpine
#WORKDIR /fleet
#COPY package*.json ./
#RUN npm install
#COPY . .
#ENV PORT 1337
#EXPOSE 1337
#CMD [ "npm", "start" ]

FROM node:14-alpine

# Install Grafana
RUN apk add --no-cache grafana

# Set working directory
WORKDIR /fleet

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application files
COPY . .

# Copy Grafana configuration file
#COPY grafana.ini /etc/grafana/
#COPY grafana/grafana.ini /usr/share/grafana/conf/defaults.ini
# Copy dashboard JSON file
COPY rxd_dash.json /usr/share/grafana/public/dashboards/
# DB grafanaSQLLite3
COPY grafana-var-lib /var/lib/grafana/
COPY grafana-usr-share /usr/share/grafana/
COPY grafana-etc /etc/grafana/
COPY datasources.yaml /usr/share/grafana/conf/provisioning/datasources/
COPY grafana.ini /usr/share/grafana/conf/

# Set environment variables
ENV PORT 1337
ENV GF_SECURITY_ADMIN_PASSWORD=kq567j8h
ENV GF_PATHS_CONFIG	/etc/grafana/grafana.ini
ENV GF_PATHS_DATA	/var/lib/grafana
ENV GF_PATHS_HOME	/usr/share/grafana
ENV GF_PATHS_LOGS	/var/log/grafana
ENV GF_PATHS_PLUGINS	/var/lib/grafana/plugins
ENV ACCESS_KEY AKIA3H7N5Y3NUSEPMAEG
ENV SECRET_KEY 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
ENV REGION eu-central-1

# Expose ports
EXPOSE 1337
EXPOSE 3000

# Start the application and Grafana
CMD ["sh", "-c", "npm start & /usr/sbin/grafana-server --homepath /usr/share/grafana"]
#CMD ["sh", "-c", "grafana-cli plugins install sentinelone-dataset-datasource" ]

