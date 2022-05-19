# LeetCode Challenge w/ JavaScript - Setup

[@oneook](https://velog.io/@oneook/LeetCode-Challenge-w-JavaScript-Setup)

---

## LeetCode

국내에서 알고리즘 같은 코딩테스트 문제풀이 사이트로 프로그래머스, 백준이 유명한 것 처럼, 해외에선 LeetCode가 가장 잘 알려져있습니다. FAANG 같은 손에 꼽는 해외 유명 IT 기업의 SW 엔지니어가 되기 위한 테크니컬 인터뷰도 여기서 준비할 만큼 높은 기출 확률로 유명합니다.

실제 업무와 동떨어졌다는 불만이 종종 들리지만, 프로그래밍적 사고와 능력을 검증할 수 있는 보편적인 방법입니다. 저는 긴장을 놓지 않고 늘 대비해야겠다고 생각해서 짬이 날 때마다 종종 문제를 풀려고 노력합니다. 문제가 잘 풀린 날은 기분이 참 좋습니다.

테크니컬 인터뷰나 알고리즘 문제 플랫폼에 대한 좋은글이 많으니 아래 링크를 참조하세요.

- [https://jessicahuh.tistory.com/entry/개발자-인터뷰-준비-Part1테크니컬-인터뷰-준비-방법](https://jessicahuh.tistory.com/entry/%EA%B0%9C%EB%B0%9C%EC%9E%90-%EC%9D%B8%ED%84%B0%EB%B7%B0-%EC%A4%80%EB%B9%84-Part1%ED%85%8C%ED%81%AC%EB%8B%88%EC%BB%AC-%EC%9D%B8%ED%84%B0%EB%B7%B0-%EC%A4%80%EB%B9%84-%EB%B0%A9%EB%B2%95)
- [https://inner-game.tistory.com/538](https://inner-game.tistory.com/538)
- [https://sophuu.tistory.com/89](https://sophuu.tistory.com/89)

---

## Setup Test Environment

저는 JS로 문제를 풀것이기 떄문에 NodeJS와 Jest로 테스트 환경을 셋업합니다.

> OSX를 사용하며 자바스크립트로 문제를 푸시는 분만 참조하세요.

### NodeJS 설치

![](https://velog.velcdn.com/images/oneook/post/210bc317-5fc7-4f60-92e2-30aec8603eaa/image.png)

NodeJS는 공식 사이트에 들어가 자신의 환경에 맞춰서 다운 받으시면 됩니다. [https://nodejs.org/en/](https://nodejs.org/en/)

벌써 LTS 버전이 16이 되었네요. 저는 그냥 v14.18.1을 사용하고 있습니다. 여러 노드 버전을 관리하고 싶으시면 nvm을 사용하세요.

HomeBrew를 사용하시는 분은 아래 명령어로 node를 설치합니다.

```bash
$ brew install node
```

완료되면 버전을 확인하여 제대로 설치되었는지 확인합니다.

```bash
$ node -v
$ npm -v
```

![](https://velog.velcdn.com/images/oneook/post/6911a8ae-6774-425e-a54f-378946b78924/image.png)

## Jest 글로벌 설치

sudo 명령을 사용해서 전역에 jest를 설치합니다.

```bash
$ sudo npm install -g jest
```

![](https://velog.velcdn.com/images/oneook/post/8b0e47e1-01a3-435c-baa7-e75f29cf83d7/image.png)

버전 확인

```bash
$ jest --version
```

![](https://velog.velcdn.com/images/oneook/post/77706484-1cd4-4a43-8a5c-d7da3ce0ad60/image.png)

## 디렉토리 설정 및 npm init

적당한 디렉토리에 폴더를 만들어 npm init으로 새로운 프로젝트를 만듭니다. -y 옵션을 붙이길 권장합니다.

```bash
$ npm init -y
```

새로 생성된 package.json에 다음 코드를 넣어줍니다.

```bash
"jest": {
  "testEnvironment": "node"
},
```

## 테스트 단위별 폴더 내 index.js와 test.js 생성

![](https://velog.velcdn.com/images/oneook/post/3f9cd020-6693-4aea-a4f0-1f68ff1ad81b/image.png)

문제 풀이 코드가 작성될 index.js와 이를 검증하는 테스트 코드가 작성된 test.js를 생성합니다.

**index.js**

```bash
function isPalindrome(s) {
  // 여기서 문제 풀이
}

module.exports = isPalindrome;
```

**test.js**

```bash
const isPalindrome = require("./index"); // require 문법으로 모듈 가져오고

test("'A man, a plan, a canal: Panama' returns true", () => {
  expect(isPalindrome("A man, a plan, a canal: Panama")).toEqual(true);
}); // 테스트 코드 작성
```

## jest command로 테스트 시험해보기

![](https://velog.velcdn.com/images/oneook/post/36345339-012a-414d-9b77-c08d23958f80/image.png)

루트 디렉토리에서 terminal에 다음과 같이 입력합니다.

```bash
jest DIRECTORY_PATH/test.js --watch
```

—watch 명령을 사용하면 번거롭게 다시 테스트 실행 커맨드를 입력하지 않고 코드 수정 후 저장만 하면 자동으로 테스트가 수행됩니다.

![](https://velog.velcdn.com/images/oneook/post/d1d7b7d7-4797-468f-8fcf-f6f36c98b87b/image.png)

거꾸로해도 똑같은 단어를 “Palindrome”이라고 합니다. (e.g. 동교동)

Palindrome 문제를 풀면 결과가 어떻게 나오는지 확인해보겠습니다.

![](https://velog.velcdn.com/images/oneook/post/c34781b0-8076-4f51-93d8-3f7c37cbdf8f/image.png)

문제에 보통 예시(IO)가 나와있고, IDE 모듈 아래에 Testcase라는 탭에서 케이스를 확이날 수 있으니, jest로 테스트코드를 짜면서, 콘솔도 찍어가면서 풀면 되겠군요.

![](https://velog.velcdn.com/images/oneook/post/7da1b6b2-2c3a-48c6-a570-c502096d715d/image.png)

자, 이제 시작합시다.

---

<br>

# 🙏🏻

**Wonkook Lee**
Frontend Developer
[LinkedIn](https://www.linkedin.com/in/designerwonkook/)


