# 웹팩의 이해

### 2021-04-07

- 웹팩의 사용법 이해


### 2021-04-08

- 로더 사용의 이해

### 2021-04-13

- 기존 자바스크립트로만 했었던 `롤 전적 검색` 토이 프로젝트를 webpack을 이용하여 build 하려 하였지만 잘 되지 않아 좀더 웹팩을 이해하는데 시간이 필요함을 느꼈다.

- 오늘 수행한 것은

  1. `webpack-dev-server`

     빠른 실시간 리로드 기능을 갖춘 개발 서버

     디스크에 저장되지 않는 메모리 컴파일을 사용하기 대문에 컴파일 속도가 빨라짐

     webpack.config.js 에도 devserver 옵션을 통해 옵션을 지정하여 사용이 가능합니다.

     webpack-cli와 함께 사용하기 위해서는 `npx webpack serve`를 이용하여 실행 하여야 합니다.

  2. 플러그인 사용

     `html webpack plugin`을 이용하였다. html 번들을 생성해준다.

