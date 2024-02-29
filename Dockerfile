# 第一階段產生dist資料夾
FROM node:16.17.1-alpine AS builder

# 指定預設/工作資料夾
WORKDIR /usr/app

# 只copy package.json檔案
COPY ./package*.json ./
# 安裝dependencies
RUN npm install

# copy其餘目錄及檔案
COPY ./ ./

COPY src src

# 指定建立build output資料夾，--prod為Production Mode
RUN npm run build --output-path=./dist/ysclient--prod

EXPOSE 4200 49153

# pull nginx image
FROM nginx:1.13.3-alpine

# 從第一階段的檔案copy
COPY --from=builder /usr/app/dist/ysclient /usr/share/nginx/html

# 覆蓋image裡的設定檔
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf
