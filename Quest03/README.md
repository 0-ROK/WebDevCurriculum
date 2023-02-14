# Quest 03. 자바스크립트와 DOM

## Introduction

- 자바스크립트는 현재 웹 생태계의 근간인 프로그래밍 언어입니다. 이번 퀘스트에서는 자바스크립트의 기본적인 문법과, 자바스크립트를 통해 브라우저의 실제 DOM 노드를 조작하는 법에 대하여 알아볼 예정입니다.

## Topics

- 자바스크립트의 역사
- 기본 자바스크립트 문법
- DOM API
  - `document` 객체
  - `document.getElementById()`, `document.querySelector()`, `document.querySelectorAll()` 함수들
  - 기타 DOM 조작을 위한 함수와 속성들
- 변수의 스코프
  - `var`, `let`, `const`

## Resources

- [자바스크립트 첫걸음](https://developer.mozilla.org/ko/docs/Learn/JavaScript/First_steps)
- [자바스크립트 구성요소](https://developer.mozilla.org/ko/docs/Learn/JavaScript/Building_blocks)
- [Just JavaScript](https://justjavascript.com/)

## Checklist

- 자바스크립트는 버전별로 어떻게 변화하고 발전해 왔을까요?

  - 자바스크립트의 버전들을 가리키는 ES5, ES6, ES2016, ES2017 등은 무엇을 이야기할까요?

    - ES5
      > "use strict", Array.forEach(), Array.map() Function.bind() 등이 추가되었습니다.
    - ES6
      > class를 지원하며 let, const 키워드, 화살표 함수, 템플릿 리터럴, 디스트럭처링, 프로미스 등이 추가되었습니다. let과 const는 이전 버전의 var와 달리 블록 레벨 스코프를 갖고 호이스팅되지 않습니다.
    - ES2016, ES2017 등
      > async/await, Array.includes(), Optional Chaining 등이 추가되고 rest/spread 문법을 객체에서도 사용할 수 있게 되는 등 자바스크립트는 계속해서 업데이트되고 있습니다.
    - 참고자료
      - [ES5 to ES6+](https://ui.toast.com/fe-guide/ko_ES5-TO-ES6)

  - 자바스크립트의 표준은 어떻게 제정될까요?
    > 자바스크립트의 표준은 ECMA International에서 관리하고 제정됩니다. 자바스크립트의 표준은 ECMAScript라고 하며 ECMA International에서 주기적으로 업데이트하고 관리합니다. 각 버전은 ES6, ES7 등 번호로 표시됩니다.

- 자바스크립트의 문법은 다른 언어들과 비교해 어떤 특징이 있을까요?

  > 자바스크립트는 인터프리터 혹은 just-in-time 컴파일 프로그래밍 언어로 일급 함수를 지원합니다. 자바스크립트는 [프로토타입 기반 언어](https://developer.mozilla.org/ko/docs/Glossary/Prototype-based_programming)이며 싱글 스레드를 갖는 동적 언어입니다. 멀티 패러다임 언어이기 때문에 객체지향형, 명령형, 선언형(함수형 프로그래밍 등) 다양한 방식을 지원합니다.

  - 자바스크립트에서 반복문을 돌리는 방법은 어떤 것들이 있을까요?

    - for
      ```javascript
      for ([초기문]; [조건문]; [증감문]) {
        문장;
      }
      ```
    - do...while
      > 조건문이 거짓으로 판별될 때까지 반복합니다.
      ```javascript
      do {
        문장;
      } while (조건문);
      ```
    - while
      > 조건문이 참이라면 계속 반복합니다.
      ```javascript
      while (조건문) {
        문장;
      }
      ```
    - 레이블 문
      > 반복문에 붙여 루프를 식별할 수 있습니다.
      ```javascript
      markLoop: while (theMark == true) {
        doSomething();
      }
      ```
    - break
      > 반복문에서 빠져나올 수 있습니다.
      ```javascript
      for (i = 0; i < a.length; i++) {
        if (a[i] == theValue) {
          break;
        }
      }
      ```
      > 레이블과 함께 쓰면 특정 레이블 문에서 빠져 나옵니다.
      ```javascript
      var x = 0;
      var z = 0;
      labelCancelLoops: while (true) {
        console.log("Outer loops: " + x);
        x += 1;
        z = 1;
        while (true) {
          console.log("Inner loops: " + z);
          z += 1;
          if (z === 10 && x === 10) {
            break labelCancelLoops;
          } else if (z === 10) {
            break;
          }
        }
      }
      ```
    - continue
      > continue 문은 break 문과 달리, 현재 반복만 종료하고 다음 반복으로 루프의 실행을 계속합니다.
      > 레이블과 함께 사용할 수 있습니다.
    - for...in
      > for...in 문은 객체의 열거 속성을 통해 지정된 변수를 반복합니다.
      ```javascript
      for (variable in object) {
        statements;
      }
      ```
    - for...of

      > for...of 명령문은 반복가능한 객체에 대해서 반복하고 각 개별 속성값에 대해 실행되는 문이 있는 사용자 정의 반복 후크를 호출하는 루프를 생성합니다. for...in 루프는 객체의 모든 열거가능한 속성에 대해 반복합니다.

      ```javascript
      Object.prototype.objCustom = function () {};
      Array.prototype.arrCustom = function () {};

      let iterable = [3, 5, 7];
      iterable.foo = "hello";

      for (let i in iterable) {
        console.log(i); // logs 0, 1, 2, "foo", "arrCustom", "objCustom"
      }

      for (let i of iterable) {
        console.log(i); // logs 3, 5, 7
      }
      ```

      ```javascript
      let arr = [3, 5, 7];
      arr.foo = "hello";

      for (let i in arr) {
        console.log(i); // logs "0", "1", "2", "foo"
      }

      for (let i of arr) {
        console.log(i); // logs "3", "5", "7"
      }
      ```

- 자바스크립트를 통해 DOM 객체에 CSS Class를 주거나 없애려면 어떻게 해야 하나요?
  > Document.getElementById() 등의 함수로 엘리먼트에 접근한 후, 해당 엘리먼트의 className 프로퍼티에 값을 할당하거나 제거합니다.
  - IE9나 그 이전의 옛날 브라우저들에서는 어떻게 해야 하나요?
    - IE는 ES6 등의 최신 자바스크립트 스펙을 지원하지 않습니다. 트랜스파일러(Babel)을 이용해서 최신 자바스크립트 코드를 이전 버전의 자바스크립트 코드로 쉽게 변경할 수 있습니다.
- 자바스크립트의 변수가 유효한 범위는 어떻게 결정되나요?
  > `var` 키워드로 변수를 정의하면 함수 레벨 스코프를 갖고, `const`, `let` 키워드로 변수를 정의하면 블록 레벨 스코프를 갖습니다.
  - `var`과 `let`으로 변수를 정의하는 방법들은 어떻게 다르게 동작하나요?
    > 위에서 언급하였듯 `var`와 `let`은 각각 함수, 블록 레벨 스코프를 가집니다. 또 `var` 키워드로 선언한 변수들은 코드 실행 전 호이스팅되기 때문에 변수를 선언하기 전에 접근하는 것이 가능합니다. 이 경우 해당 값은 `undefined`입니다.
- 자바스크립트의 익명 함수는 무엇인가요?
  - 자바스크립트의 Arrow function은 무엇일까요?
    > Arrow function은 function 키워드와 달리 this를 자체적으로 가지고 있지 않고, 가장 가까운 this에 바인딩됩니다.

## Quest

- (Quest 03-1) 초보 프로그래머의 영원한 친구, 별찍기 프로그램입니다.
  - [이 그림](jsStars.png)과 같이, 입력한 숫자만큼 삼각형 모양으로 콘솔에 별을 그리는 퀘스트 입니다.
    - 줄 수를 입력받고 그 줄 수만큼 별을 그리면 됩니다. 위의 그림은 5를 입력받았을 때의 결과입니다.
  - `if`와 `for`와 `function`을 다양하게 써서 프로그래밍 하면 더 좋은 코드가 나올 수 있을까요?
  - 입력은 `prompt()` 함수를 통해 받을 수 있습니다.
  - 출력은 `console.log()` 함수를 통해 할 수 있습니다.
- (Quest 03-2) skeleton 디렉토리에 주어진 HTML을 조작하는 스크립트를 완성해 보세요.
  - 첫째 줄에 있는 사각형의 박스들을 클릭할 때마다 배경색이 노란색↔흰색으로 토글되어야 합니다.
  - 둘째 줄에 있는 사각형의 박스들을 클릭할 때마다 `enabled`라는 이름의 CSS Class가 클릭된 DOM 노드에 추가되거나 제거되어야 합니다.
- 구현에는 여러 가지 방법이 있으나, 다른 곳은 건드리지 않고 TODO 부분만 고치는 방향으로 하시는 것을 권장해 드립니다.

## Advanced

- Quest 03-1의 코드를 더 구조화하고, 중복을 제거하고, 각각의 코드 블록이 한 가지 일을 전문적으로 잘하게 하려면 어떻게 해야 할까요?
- Quest 03-2의 스켈레톤 코드에서 `let` 대신 `var`로 바뀐다면 어떤 식으로 구현할 수 있을까요?
