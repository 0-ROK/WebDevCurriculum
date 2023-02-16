# Quest 06. 인터넷의 이해

## Introduction

- 이번 퀘스트에서는 인터넷이 어떻게 동작하며, 서버와 클라이언트, 웹 브라우저 등의 역할은 무엇인지 알아보겠습니다.

## Topics

- 서버와 클라이언트, 그리고 웹 브라우저
- 인터넷을 구성하는 여러 가지 프로토콜
  - IP
  - TCP
  - HTTP
- DNS

## Resources

- [OSI 모형](https://ko.wikipedia.org/wiki/OSI_%EB%AA%A8%ED%98%95)
- [IP](https://ko.wikipedia.org/wiki/%EC%9D%B8%ED%84%B0%EB%84%B7_%ED%94%84%EB%A1%9C%ED%86%A0%EC%BD%9C)
  - [Online service Traceroute](http://ping.eu/traceroute/)
- [TCP](https://ko.wikipedia.org/wiki/%EC%A0%84%EC%86%A1_%EC%A0%9C%EC%96%B4_%ED%94%84%EB%A1%9C%ED%86%A0%EC%BD%9C)
  - [Wireshark](https://www.wireshark.org/download.html)
- [HTTP](https://ko.wikipedia.org/wiki/HTTP)
  - Chrome developer tool, Network tab
- [DNS](https://ko.wikipedia.org/wiki/%EB%8F%84%EB%A9%94%EC%9D%B8_%EB%84%A4%EC%9E%84_%EC%8B%9C%EC%8A%A4%ED%85%9C)
  - [Web-based Dig](http://networking.ringofsaturn.com/Tools/dig.php)

## Checklist

- 인터넷은 어떻게 동작하나요? Internet Protocol Suite의 레이어 모델에 입각하여 설명해 보세요.

  - 근거리에서 서로 떨어진 두 전자기기가 유선/무선으로 서로 통신하는 프로토콜은 어떻게 동작할까요?
    > 이더넷을 통해 동작합니다. 이더넷은 OSI 모델에서 물리 계층에 해당하는 프로토콜입니다. 이는 CSMA/CD (carrier sense multiple access with collision detection 반송파 감지 다중 접속 및 충돌 탐지)라고 불리는 기술로 구현됩니다. 네트워크를 사용하려는 컴퓨터가 현재 네트워크 위에 흐르고 있는 데이터가 있는지 감지하고, 없다면 전송하되 만약 충돌이 발생하면 임의의 시간을 기다린 후 다시 전송을 시도하는 방식입니다.
  - 근거리에 있는 여러 대의 전자기기가 서로 통신하는 프로토콜은 어떻게 동작할까요?
    > 이더넷
  - 아주 멀리 떨어져 있는 두 전자기기가 유선/무선으로 서로 통신하는 프로토콜은 어떻게 동작할까요?
    > TCP, IP 프로토콜로 동작하는데, TCP는 인터넷 계층인 IP 프로토콜의 상위 계층 프로토콜입니다. 연결지향 프로토콜인 TCP 계층에서 3 Way Handshake를 통해 연결을 성립된 후, HTTP, 또는 SSL 프로토콜을 통해 통신합니다.
  - 두 전자기기가 신뢰성을 가지고 통신할 수 있도록 하기 위한 프로토콜은 어떻게 동작할까요?

    > TCP 프로토콜은 두 개의 호스트를 연결하고 데이터 스트림을 교환하게 해주는 네트워크 프로토콜입니다. 데이터와 패킷이 순서대로 전송되는 것을 보장해 주며 에러가 없이 패킷이 신뢰할 수 있게 전달 되었는지 보장해 줍니다. 3 Way Handshake를 통해 연결이 성립됩니다.
    >
    > 1. 클라이언트가 서버에서 SYN 메시지 전송
    > 2. 서버가 클라이언트에게 SYN-ACK 메시지 전송
    > 3. 클라이언트가 서버에게 ACK 메시지 전송

    > 연결을 종료할 때는 4 Way Handshake를 사용합니다.

  - HTTP는 어떻게 동작할까요?
    > HTTP는 HTML과 같은 하이퍼미디어 문서를 전송하기 위한 애플리케이션 계층 프로토콜입니다. 클라이언트가 요청을 하기 위해 연결을 연 다음 응답을 받을 때까지 대기하는 전통적인 클라이언트-서버 모델이며, 무상태 프로토콜입니다. 상태를 구현하기 위해서는 HTTP 쿠키를 사용합니다.

- 우리가 브라우저의 주소 창에 www.knowre.com 을 쳤을 때, 어떤 과정을 통해 서버의 IP 주소를 알게 될까요?
  > DNS 서버에 접속해 URL 주소 중에 도메인 명에 해당하는 "kwnore"를 검색해 도메인 명에 맞는 IP 주소를 가져옵니다. 전달받은 IP 주소와 TCP 프로토콜을 통해 연결을 성립하고, HTTP 프로토콜을 통해 IP 주소의 컴퓨터로 요청이 전송됩니다. 이후 도착한 HTTP 응답 메시지에서 HTML 문서와 CSS 파일을 파싱해 화면에 렌더링합니다.
- 참고 자료
  - [TCP/IP 네트워크 스택 이해하기](https://d2.naver.com/helloworld/47667)

## Quest

- tracert(Windows가 아닌 경우 traceroute) 명령을 통해 www.google.com 까지 가는 경로를 찾아 보세요.
  - 어떤 IP주소들이 있나요?
  - 그 IP주소들은 어디에 위치해 있나요?
- Wireshark를 통해 www.google.com 으로 요청을 날렸을 떄 어떤 TCP 패킷이 오가는지 확인해 보세요
  - TCP 패킷을 주고받는 과정은 어떻게 되나요?
  - 각각의 패킷에 어떤 정보들이 담겨 있나요?
- telnet 명령을 통해 http://www.google.com/ URL에 HTTP 요청을 날려 보세요.
  - 어떤 헤더들이 있나요?
  - 그 헤더들은 어떤 역할을 하나요?

## Advanced

- HTTP의 최신 버전인 HTTP/3는 어떤 식으로 구성되어 있을까요?
  > UDP 방식으로 구성되어 있습니다.
- TCP/IP 외에 전세계적인 네트워크를 구성하기 위한 다른 방식도 제안된 바 있을까요?
