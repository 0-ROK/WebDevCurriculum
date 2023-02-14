# Quest 02. CSS의 기초와 응용

## Introduction

- CSS는 Cascading StyleSheet의 약자입니다. 웹브라우저에 표시되는 HTML 문서의 스타일을 지정하는 (거의) 유일하지만 다루기 쉽지 않은 언어입니다. 이번 퀘스트를 통해 CSS의 기초적인 레이아웃 작성법을 알아볼 예정입니다.

## Topics

- CSS의 기초 문법과 적용 방법
  - Inline, `<style>`, `<link rel="stylesheet" href="...">`
- CSS 규칙의 우선순위
- 박스 모델과 레이아웃 요소
  - 박스 모델: `width`, `height`, `margin`, `padding`, `border`, `box-sizing`
  - `position`, `left`, `top`, `display`
  - CSS Flexbox와 Grid
- CSS 표준의 역사
- 브라우저별 Developer tools

## Resources

- [MDN - CSS](https://developer.mozilla.org/ko/docs/Web/CSS)
- [Centering in CSS: A Complete Guide](https://css-tricks.com/centering-css-complete-guide/)
- [A complete guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [그리드 레이아웃과 다른 레이아웃 방법과의 관계](https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Grid_Layout/%EA%B7%B8%EB%A6%AC%EB%93%9C_%EB%A0%88%EC%9D%B4%EC%95%84%EC%9B%83%EA%B3%BC_%EB%8B%A4%EB%A5%B8_%EB%A0%88%EC%9D%B4%EC%95%84%EC%9B%83_%EB%B0%A9%EB%B2%95%EA%B3%BC%EC%9D%98_%EA%B4%80%EA%B3%84)

## Checklist

- CSS를 HTML에 적용하는 세 가지 방법은 무엇일까요?
  - 세 가지 방법 각각의 장단점은 무엇일까요?
    - 외부 스타일 시트
      > CSS가 확장자가 .css 인 별도의 파일로 작성되고, HTML \<link> 요소에서 참조되는 경우입니다.
    - 내부 스타일 시트
      > \<head> 안에 포함된 \<style> 요소 내부에 CSS를 배치합니다.
    - 인라인 스타일
      > 태그 안에 작성하며, 작성된 요소에만 영항을 주는 CSS 선언입니다.
- CSS 규칙의 우선순위는 어떻게 결정될까요?
  1. 속성 값 뒤에 !important 를 붙인 속성
  2. HTML에서 style을 직접 지정한 속성
  3. #id 로 지정한 속성
  4. .클래스, :추상클래스 로 지정한 속성
  5. 태그이름 으로 지정한 속성
  6. 상위 객체에 의해 상속된 속성
- CSS의 박스모델은 무엇일까요? 박스가 화면에서 차지하는 크기는 어떻게 결정될까요?
  > box에는 바깥부터 차례로 margin, border, padding, content가 있습니다. 각각의 요소가 공간을 차지하며, box-sizing 속성을 content-box 또는 border-box로 설정하여 공간에 padding과 margin을 포함할지 여부를 선택할 수 있습니다.
- `float` 속성은 왜 좋지 않을까요?
  > `float` 속성은 항목을 정렬하기 위해 억지로 쓰이던 css 속성입니다. 본래 HTML과 CSS는 웹 문서를 작성하기 위해 제정되어 오늘날의 웹 애플리케이션을 제작하기에는 적합하지 않은 측면이 있습니다. 근래에는 `flexbox` 등을 통해 보다 편리하게 정렬을 할 수 있습니다.
- Flexbox(Flexible box)와 CSS Grid의 차이와 장단점은 무엇일까요?
  > flexbox는 1차원 레이아웃 시스템이고 (가로, 세로 중에 선택), Grid는 2차원 레이아웃 시스템입니다.
- CSS의 비슷한 요소들을 어떤 식으로 정리할 수 있을까요?
  > SCSS, Sass, Tailwind 등을 사용할 수 있습니다.

## Quest

- Quest 01에서 만들었던 HTML을 바탕으로, [이 그림](screen.png)의 레이아웃과 CSS를 최대한 비슷하게 흉내내 보세요. 꼭 완벽히 정확할 필요는 없으나 align 등의 속성은 일치해야 합니다.
- **주의사항: 되도록이면 원래 페이지의 CSS를 참고하지 말고 아무것도 없는 백지에서 시작해 보도록 노력해 보세요!**

## Advanced

- 왜 CSS는 어려울까요?
- CSS의 어려움을 극복하기 위해 어떤 방법들이 제시되고 나왔을까요?
- CSS가 브라우저에 의해 해석되고 적용되기까지 내부적으로 어떤 과정을 거칠까요?
- 웹 폰트의 경우에는 브라우저 엔진 별로 어떤 과정을 통해 렌더링 될까요?
