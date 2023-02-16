# Quest 08. 웹 API의 기초

## Introduction

- 이번 퀘스트에서는 웹 API 서버의 기초를 알아보겠습니다.

## Topics

- HTTP Method
- node.js `http` module
  - `req`와 `res` 객체

## Resources

- [MDN - Content-Type Header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type)
- [MDN - HTTP Methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)
- [MDN - MIME Type](https://developer.mozilla.org/en-US/docs/Glossary/MIME_type)
- [Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop)
- [HTTP Node.js Manual & Documentation](https://nodejs.org/api/http.html)

## Checklist

- HTTP의 GET과 POST 메소드는 어떻게 다른가요?
  > - GET : 서버로 어떠한 리소스로부터 정보를 요청하기 위해 사용
  >   - 요청에 필요한 정보는 쿼리스트링으로 전송
  >   - 캐싱이 가능
  >   - 브라우저 히스토리에 남음
  > - POST : 리소스를 생성/업데이트하기 위해 서버에 요청할 때 사용
  >   - 요청에 필요한 정보는 body에 담아 전송
  >   - 캐싱 불가
  >   - 브라우저 히스토리에 남지 않음
  >   - 멱등성이 보장되지 않음
  - 다른 HTTP 메소드에는 무엇이 있나요?
    > - HEAD : GET과 동일하지만, 응답의 본문을 요구하지 않습니다. 본문이 존재하더라도 무시해야 합니다.
    > - PUT : 요청 페이로드를 사용해 새로운 리소스를 생성하거나 대체합니다. 멱등성을 가집니다. (여러 번 보내도 같은 효과를 보입니다. 부수 효과가 없습니다.)
    > - DELETE : 리소스를 삭제합니다.
    > - CONNECT : 요청한 리소스에 대해 양방향 연결을 시작합니다.
    > - OPTIONS : 목표 리소스와의 통신 옵션을 설명하기 위해 사용됩니다. (서버에서 지원하는 method를 확인합니다.)
    > - TRACE : 목적 리소스의 경로를 따라 메시지 loop-back을 테스트합니다.
    >   - 자신의 요청이 서버에 도달했을 때 어떻게 보이게 되는지 알려줍니다.
    >   - 디버깅에 사용됩니다.
    > - PATCH : 리소스의 부분만을 수정할 때 사용됩니다.
    >   - PUT과 달리 비멱등성이며, PUT은 문서 자체의 완전한 교체만을 허용하는 반면 PATCH는 반복적인 수정을 할 때 사용됩니다.
- HTTP 서버에 GET과 POST를 통해 데이터를 보내려면 어떻게 해야 하나요?

  > HTTP 메시지로 데이터를 보내야 합니다.
  >
  > 요청은 HTTP 메서드와 URL, HTTP 버전 정보를 담은 시작 줄로 시작하며, 헤더와 본문(\*필수 아님!)이 포함됩니다.
  >
  > 응답은 프로토콜 버전과 상태 코드(와 텍스트)를 담은 상태 줄로 시작되며, 헤더와 분문(\*필수 아님!)이 포함됩니다.
  >
  > - [참고자료 : HTTP 메시지(mdn)](https://developer.mozilla.org/ko/docs/Web/HTTP/Messages) HTTP 메시지는 클라이언트가 서버에 전달하여 서버의 액션이 일어나게 하는 요청과, 요청에 대한 서버의 답변인 응답이 있습니다.

  - HTTP 요청의 `Content-Type` 헤더는 무엇인가요?
    > 리소스의 media type을 나타내기 위해 사용됩니다.
  - Postman에서 POST 요청을 보내는 여러 가지 방법(`form-data`, `x-www-form-urlencoded`, `raw`, `binary`) 각각은 어떤 용도를 가지고 있나요?
    > - form-data: ASCII 문자 값과 함께 바이너리 데이터를 전송할 때 사용합니다.
    > - x-www-form-urlencoded: key-value 값의 문자 데이터들을 인코딩하여 전송합니다.
    > - raw: 문자열로 데이터를 그대로 전송하고 싶을 때 사용합니다.
    > - binary: 수동으로 입력할 수 없는 정보를 보낼 때 사용하며, 데이터를 바이너리로 변환하여 전송합니다.

- node.js의 `http` 모듈을 통해 HTTP 요청을 처리할 때,
  - `req`와 `res` 객체에는 어떤 정보가 담겨있을까요?
    > req: http.IncomingMessage 객체로 데이터가 넘어옵니다.
    >
    > - URL, methode, headers, httpVersion, trailers 등 요청에 대한 정보가 존재합니다.
    > - res: http.ServerResponse 객체로 전달되며 메소드를 활용하여 응답 헤더와 응답 본문을 작성합니다.
  - GET과 POST에 대한 처리 형태가 달라지는 이유는 무엇인가요?
    > 서버에 데이터를 등록하는 데 쓰이는 POST 메서드에서 GET 메서드와 같이 데이터를 쿼리스트링에 넣기에는 적합하지 않기 때문입니다.
- 만약 API 엔드포인트(URL)가 아주 많다고 한다면, HTTP POST 요청의 `Content-Type` 헤더에 따라 다른 방식으로 동작하는 서버를 어떻게 정리하면 좋을까요?
  > API의 도메인 별로 묶어서 문서로 정리하면 좋다고 생각합니다.
  - 그 밖에 서버가 요청들에 따라 공통적으로 처리하는 일에는 무엇이 있을까요? 이를 어떻게 정리하면 좋을까요?
    > express의 경우에는 미들웨어를 사용하여 공통적인 로직을 처리했습니다. (예를 들어 미들웨어 중 마지막 경로에서 모아 처리.)

## Quest

- 다음의 동작을 하는 서버를 만들어 보세요.
  - 브라우저의 주소창에 `http://localhost:8080`을 치면 `Hello World!`를 응답하여 브라우저에 출력합니다.
  - 서버의 `/foo` URL에 `bar` 변수로 임의의 문자열을 GET 메소드로 보내면, `Hello, [문자열]`을 출력합니다.
  - 서버의 `/foo` URL에 `bar` 키에 임의의 문자열 값을 갖는 JSON 객체를 POST 메소드로 보내면, `Hello, [문자열]`을 출력합니다.
  - 서버의 `/pic/upload` URL에 그림 파일을 POST 하면 서버에 보안상 적절한 방법으로 파일이 업로드 됩니다.
  - 서버의 `/pic/show` URL을 GET 하면 브라우저에 위에 업로드한 그림이 뜹니다.
  - 서버의 `/pic/download` URL을 GET 하면 브라우저에 위에 업로드한 그림이 `pic.jpg`라는 이름으로 다운로드 됩니다.
- expressJS와 같은 외부 프레임워크를 사용하지 않고, node.js의 기본 모듈만을 사용해서 만들어 보세요.
- 처리하는 요청의 종류에 따라 공통적으로 나타나는 코드를 정리해 보세요.

## Advanced

- 서버가 파일 업로드를 지원할 때 보안상 주의할 점에는 무엇이 있을까요?
