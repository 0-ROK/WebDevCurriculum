# Quest 04. OOP의 기본

## Introduction

- 이번 퀘스트에서는 바닐라 자바스크립트의 객체지향 프로그래밍에 대해 알아볼 예정입니다.

## Topics

- 객체지향 프로그래밍
  - 프로토타입 기반 객체지향 프로그래밍
  - 자바스크립트 클래스
    - 생성자
    - 멤버 함수
    - 멤버 변수
  - 정보의 은폐
  - 다형성
- 코드의 재사용

## Resources

- [MDN - Classes](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Classes)
- [MDN - Inheritance and the prototype chain](https://developer.mozilla.org/ko/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
- [MDN - Inheritance](https://developer.mozilla.org/ko/docs/Learn/JavaScript/Objects/Inheritance)
- [Polymorphism](https://medium.com/@viktor.kukurba/object-oriented-programming-in-javascript-3-polymorphism-fb564c9f1ce8)
- [Class Composition](https://alligator.io/js/class-composition/)
- [Inheritance vs Composition](https://woowacourse.github.io/javable/post/2020-05-18-inheritance-vs-composition/)

## Checklist

- 객체지향 프로그래밍은 무엇일까요?

  - `#`로 시작하는 프라이빗 필드는 왜 필요한 것일까요? 정보를 은폐(encapsulation)하면 어떤 장점이 있을까요?
    > `class`의 속성들은 기본적으로 public하여 외부에서 접근할 수 있지만, `#`으로 시작하면 private 필드가 되며, class 내부 메서드에서만 접근할 수 있습니다. (ES2019에서 추가되었습니다.)
  - 다형성이란 무엇인가요? 다형성은 어떻게 코드 구조의 정리를 도와주나요?
    > 다형성은 하나의 객체가 여러 가지 타입을 가질 수 있는 것을 말합니다. 상속과 추상화 등을 통해 코드 구조 정리를 돕습니다.
  - 상속이란 무엇인가요? 상속을 할 때의 장점과 단점은 무엇인가요?
    > 상속은 OOP에서 객체들 간의 관계를 구축하는 방법입니다. 자식 클래스는 부모 클래스로부터 속성과 동작을 상속 받을 수 있습니다. 상속이라는 개념을 통해 객체에 지정된 모듈화를 해치지 않으면서, 재사용성과 확장성을 보장받을 수 있습니다. 그러나 코드를 작성해야 하는 코드의 양이 증가합니다.
  - OOP의 합성(Composition)이란 무엇인가요? 합성이 상속에 비해 가지는 장점은 무엇일까요?
    > 중복되는 로직을 갖는 객체를 구현하고, 해당 객체를 주입받아 중복 로직을 호출하여 퍼블릭 인터페이스를 재사용하는 것입니다. 객체의 내부를 공개하지 않고 인터페이스를 통해 코드를 재사용하므로, 구현에 대한 의존성을 인터페이스에 대한 의존성으로 변경해 결합도를 낮출 수 있습니다.

- 자바스크립트의 클래스는 어떻게 정의할까요?
  > `class` 키워드를 사용해 정의합니다.
  - 프로토타입 기반의 객체지향 프로그래밍은 무엇일까요?
    > 프로토타입 기반 언어는 원형 객체를 복제하여 새로운 객체를 생성하는 언어입니다. 자바스크립트는 프로토타입 기반 언어이지만 원본 객체를 복사하지는 않고 프로토타입 링크를 통해 원형을 참조합니다. 자바스크립트에서 객체는 원형에 대한 프로토타입 링크(`__proto__`)를 갖게 됩니다. 원형은 또다른 원형을 갖고, 자바스크립트 객체의 원형인 `Object.prototype`까지 연결됩니다. 이를 프로토타입 체인이라고 합니다. 객체의 속성에 접근할 때 프로토타입 체인을 통해 상위 객체를 지나 객체의 원형까지 접근하려는 속성의 이름을 찾을 때까지 순차적으로 접근합니다. ES5부터는 `Object.create()`를 통해 객체의 상속을 구현할 수 있습니다.
    ```javascript
    // foo는 이전에 정의한 객체입니다.
    var bar = Object.create(foo);
    bar.speak = function () {
      return "Hello," + this.identify();
    };
    ```
  - 자바스크립트의 클래스는 이전의 프로토타입 기반의 객체지향 구현과 어떤 관계를 가지고 있나요?
    > 자바스크립트는 근복적으로 프로토타입 기반의 언어이며, 자바스크립트의 클래스는 문법적 설탕일 뿐입니다.
  - 참고자료
    - [프로토타입 기반 언어, 자바스크립트](https://ui.toast.com/weekly-pick/ko_20160603)

## Quest

- 웹 상에서 동작하는 간단한 바탕화면 시스템을 만들 예정입니다.
- 요구사항은 다음과 같습니다:
  - 아이콘은 폴더와 일반 아이콘, 두 가지의 종류가 있습니다.
  - 아이콘들을 드래그를 통해 움직일 수 있어야 합니다.
  - 폴더 아이콘은 더블클릭하면 해당 폴더가 창으로 열리며, 열린 폴더의 창 역시 드래그를 통해 움직일 수 있어야 합니다.
  - 바탕화면의 생성자를 통해 처음에 생겨날 아이콘과 폴더의 개수를 받을 수 있습니다.
  - 여러 개의 바탕화면을 각각 다른 DOM 엘리먼트에서 동시에 운영할 수 있습니다.
  - Drag & Drop API를 사용하지 말고, 실제 마우스 이벤트(mouseover, mousedown, mouseout 등)를 사용하여 구현해 보세요!

## Advanced

- 객체지향의 역사는 어떻게 될까요?
- Smalltalk, Java, Go, Kotlin 등의 언어들로 넘어오면서 객체지향 패러다임 측면에서 어떤 발전이 있었을까요?
