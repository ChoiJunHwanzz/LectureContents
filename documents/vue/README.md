## vue 환경 구성

일단 Vue나 React나 Svelte 같은 최신 기능들은 대부분 ECMA 6 스펙을 따름  
구닥다리로 쓰지 말고 최신형으로 씁시다.  

### nodejs 설치

```make
1. https://nodejs.org/ko/download/ 에서 자신의 운영체제에 맞게 다운로드한다.
2. 실행
3. Next
4. 라이센스 동의 후 Next
5. Next
6. Next
7. Next
8. nodejs 일부 패키지에 C/C++ 기능이 필요한 것들이 있음
   묻지도 따지지도 말고 그냥 필요하면 다 설치하라고 체크하고 Next
9. Install
10. 설치가 꽤 오래 걸릴 수도 있으니 커피나 한 잔 하면 좋다.
11. node -v 로 nodejs 설치 여부를 체크한다.
12. npm --version 으로 npm 설치 여부를 체크한다.
```

### Vue.js 설치

```make
1. npm install -g @vue/cli
2. 오류나면 npm audit fix
3. MAC에선 권한(permission) 없다고 하면 관리자 모드로 sudo 줘서 실행한다.
```

### vue 프로젝트 생성

```make
1. 적당한 위치를 잡는다(HTML/CSS, JavaScript에선 javascript 폴더로 잡음)
2. vue create frontend
   frontend라는 이름으로 프로젝트가 만들어짐
3.  옵션 설정을 해야함

? Please pick a preset:
  Default ([Vue 2] babel, eslint)
  Default (Vue 3) ([Vue 3] babel, eslint)
> Manually select features

? Check the features needed for your project:
 (*) Choose Vue version
 (*) Babel
 ( ) TypeScript
 ( ) Progressive Web App (PWA) Support
 (*) Router
>(*) Vuex
 ( ) CSS Pre-processors
 (*) Linter / Formatter
 ( ) Unit Testing
 ( ) E2E Testing
 
? Choose a version of Vue.js that you want to start the project with 3.x

? Use history mode for router? (Requires proper server setup for index fallback in production) Yes

? Pick a linter / formatter config: (Use arrow keys)
> ESLint with error prevention only
  ESLint + Airbnb config
  ESLint + Standard config
  ESLint + Prettier
  
  

```
