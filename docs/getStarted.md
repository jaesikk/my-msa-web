# Get Started

[toc]

## AWS EC2

- 인스턴스 생성 (프리티어) : ubuntu

- 탄력적 IP 생성 (Elastic IP)

- Putty에서 붙기

  .pem key를 .ppk로 변환하여 private key로  생성

  ​	IP/PORT 확인 후 authentication for private key 에 경로 등록하여 접속

  ​	안되면 Putty 최신버전하기 (ErrorMsg : Server sent public key)

  ---
  
  **ubuntu command**

0. ls -al

1. `sudo apt update;`

   `sudo apt list;`

2. `sudo apt install apache2;`

3. 해당 IP에 접속 가능 => 도메인 사서 IP 연결해주면  domain URL로도 접속 가능!!

### ubuntu 초기 비밀번호 설정

1. `sudo su -`
2. `passwd ubuntu`
3. New password :
4. Retype password :

### ubuntu 자바 환경변수

1. `update-alternatives --list java` : 경로찾기 `/usr/lib/jvm/java-17-openjdk-amd64/bin/java`

[Spring-React-Nginx ./gradlew build로 배포하기](https://velog.io/@u-nij/Spring-Boot-React.js-%EA%B0%9C%EB%B0%9C%ED%99%98%EA%B2%BD-%EC%84%B8%ED%8C%85)

### 배포 ( http:80 => Spring:8080 으로 Redirect 해주기)

**백그라운드 배포** :  `nohuq java -jar {fileName}.jar &`

---

## React

### proxy 설정하기 ( Spring 8080포트와 연동 )

 - `npm install http-proxy-middleware --save` 라이브러리 설치

 - setProxy.js 생성 후 코드

   ```javascript
   // src/main/frontend/src/setProxy.js
   
   const { createProxyMiddleware } = require('http-proxy-middleware');
   
   module.exports = function(app) {
     app.use(
       '/api',
       createProxyMiddleware({
         target: 'http://localhost:8080',	# 서버 URL or localhost:설정한포트번호
         changeOrigin: true,
       })
     );
   };
   ```

   

---

## Spring

`./gradlew build` : /build/libs 경로에 생성된 .jar로 배포

### JPA

- Entity와 어노테이션의 의미를 정확하게 알고 쓰자.
- @RequiredArgsConstructor 이건 또 모야
