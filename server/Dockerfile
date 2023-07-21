FROM amazoncorretto:20-alpine3.18

WORKDIR /server

RUN apk add --no-cache curl

RUN curl -o /server/minecraft-server.jar https://launcher.mojang.com/v1/objects/c8f83c5655308435b3dcf03c06d9fe8740a77469/server.jar

COPY eula.txt server.properties /server/

ENTRYPOINT [ "java", "-Xmx1024M", "-Xms1024M", "-jar", "/server/minecraft-server.jar", "nogui" ]