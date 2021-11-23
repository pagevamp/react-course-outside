FROM mhart/alpine-node:16.4.2 as base

RUN apk add --no-cache libc6-compat
RUN npm i -g npm && npm -v
RUN npm i -g yarn

ARG GROUP_ID
ARG USER_ID
ARG USER_NAME
#RUN addgroup -g $GROUP_ID -S nodejs
#RUN adduser -S outside -u 1001

RUN echo $GROUP_ID

RUN addgroup -g $GROUP_ID -S nodejs
RUN adduser --disabled-password --gecos '' --uid $USER_ID --g $GROUP_ID -S $USER_NAME -h /home/outside/

USER $USERNAME

WORKDIR /home/outside/app

COPY package.json .
COPY yarn.lock .
RUN yarn install

#RUN chown -R outside:nodejs /home/outside



FROM base as dev

USER $USERNAME
ENV NODE_ENV development
CMD ["yarn", "dev"]

FROM base as production
RUN npx next telemetry disable

COPY . .

RUN npm run build

CMD [ "npm", "start" ]