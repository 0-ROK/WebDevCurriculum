# Quest 12. 보안의 기초

## Introduction

- 이번 퀘스트에서는 가장 기초적인 웹 서비스 보안에 대해 알아보겠습니다.

## Topics

- XSS, CSRF, SQL Injection
- HTTPS, TLS

## Resources

- [The Basics of Web Application Security](https://martinfowler.com/articles/web-security-basics.html)
- [Website Security 101](https://spyrestudios.com/web-security-101/)
- [Web Security Fundamentals](https://www.shopify.com.ng/partners/blog/web-security-2018)
- [OWASP Cheat Sheet Series](https://cheatsheetseries.owasp.org/)
- [Wikipedia - TLS](https://en.wikipedia.org/wiki/Transport_Layer_Security)

## Checklist

- 입력 데이터의 Validation을 웹 프론트엔드에서 했더라도 서버에서 또 해야 할까요? 그 이유는 무엇일까요?
  - 서버로부터 받은 HTML 내용을 그대로 검증 없이 프론트엔드에 innerHTML 등을 통해 적용하면 어떤 문제점이 있을까요?
    > innerHTML 안에 있는 악성 자바스크립트가 실행될 수 있습니다.
    >
    > ```javascript
    > const name = "<img src='x' onerror='alert(1)'>";
    > el.innerHTML = name; // shows the alert
    > ```
    >
    > 일반 텍스트를 삽입 할 때는 `Node.textContent`를 사용하는 것이 좋습니다.
  - XSS(Cross-site scripting)이란 어떤 공격기법일까요?
    > 사이트 간 스크립팅, 크로스 사이트 스크립팅(Cross-site scripting)은 웹사이트 관리자가 아닌 이가 웹 페이지에 악성 스크립트를 삽입/실행 할 수 있는 취약점입니다. 비지속적 기법과 지속적 기법이 존재합니다.
  - CSRF(Cross-site request forgery)이란 어떤 공격기법일까요?
    > 인증된 사용자가 웹 애플리케이션에 특정 요청을 보내도록 유도하는 공격 행위를 말합니다. XSS와 다른 점은 CSRF 가 사용자의 인증된 세션을 악용하는 공격 방식이라는 것입니다. XSS는 사용자의 PC에서 스크립트를 실행해 사용자의 정보를 탈취하는 것을 목적으로 하고, CSRF는 요청을 위조하여 사용자 몰래 송금, 제품 구입 등을 수행합니다.
  - SQL Injection이란 어떤 공격기법일까요?
    > 응용 프로그램의 보안 상 허점을 이용해 악의적인 SQL문이 실행되도록 하는 공격 방법입니다.
- 대부분의 최신 브라우저에서는 HTTP 대신 HTTPS가 권장됩니다. 이유가 무엇일까요?
  > HTTPS는 SSL 또는 TLS를 통해 연결이 암호화되기 때문입니다.
  - HTTPS와 TLS는 어떤 식으로 동작하나요? HTTPS는 어떤 역사를 가지고 있나요?
    > HTTPS는 SSL 또는 TLS로 암호화 되어 연결되는 HTTP 프로토콜입니다. SSL과 TLS는 전송 계층 보안으로, TCP/IP 네트워크를 사용하는 통신에 적용되며, 통신 과정에서 전송계층 종단 간 보안과 데이터 무결성을 확보 해 줍니다. (SSL은 TLS의 과거 명칭입니다.)
  - HTTPS의 서비스 과정에서 인증서는 어떤 역할을 할까요? 인증서는 어떤 체계로 되어 있을까요?
    > 인증서는 SSL/TLS로 구현되어 있습니다. 일반적으로 사용하는 서버 인증서에는 여러 종류가 있습니다. FQDN(fully qualified domain name, 정규화된 도메인 이름)에 대한 신뢰를 제공하기 위해 개별 인증서를 발급받는 경우 외에도, 여러 FQDN에 대한 신뢰를 한번에 제공하기 위한 SAN(subject alternative name) 인증서, 와일드카드 문자 `*`를 접두사로 사용하여 서브도메인 전체에 대한 신뢰를 제공하는 Wildcard 인증서 등의 유형이 있습니다.

## Quest

- 메모장의 서버와 클라이언트에 대해, 로컬에서 발행한 인증서를 통해 HTTPS 서비스를 해 보세요.

## Advanced

- TLS의 인증서에 쓰이는 암호화 알고리즘은 어떤 종류가 있을까요?
- HTTP/3은 기존 버전과 어떻게 다를까요? HTTP의 버전 3이 나오게 된 이유는 무엇일까요?
