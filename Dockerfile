FROM node:12-slim

LABEL maintainer="Prokop Simek, Adéla Homolová"
LABEL "com.github.actions.name"="DX Scanner Action"
LABEL "com.github.actions.description"="Measure Developer Experience directly based on your source code. DX Scanner recommends practices that can help you with improving your product development."
LABEL "com.github.actions.icon"="user-check"
LABEL "com.github.actions.color"="green"

RUN yarn global add dx-scanner

ENTRYPOINT ["dx-scanner", "ci", ".", "-r", "--fail=high"]