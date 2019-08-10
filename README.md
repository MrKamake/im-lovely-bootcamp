# I'm lovely

React를 기반으로 가짜 채팅 어플리케이션을 만들어 보는 과제입니다.

## Setup

Install dependencies

```sh
$ yarn install (or npm install)
```

## Development

```sh
$ yarn start (or npm start)
# visit http://localhost:3000
```

- HTML 수정: `/public/index.html`를 수정하시면 됩니다.
- JS 수정: `/src` 디렉토리 내에서 자유롭게 파일/폴더를 생성/수정하여 작업하시면 됩니다.
- CSS 수정: `/src` 디렉토리 내에서 자유롭게 파일/폴더를 생성/수정하여 작업하시면 됩니다.

## TODO

간단한 요구사항이 주어졌을 때 얼마나 상세한 부분까지 신경써서 구현하는지 확인하는 과제입니다.

간단한 채팅 웹 서비스를 만들면 됩니다.
[목록](list.png), [채팅](chat.png)과 같은 모습의 두 페이지를 웹 어플리케이션으로 만들어주세요.

* 기능
    * 기본 채팅방 목록은 임의로 정의합니다. 새로운 채팅방을 만드는 기능은 없어도 됩니다.
    * 채팅방 목록에서 채팅을 하고자 하는 사람을 선택하면, 해당 사람과 채팅할 수 있는 화면이 표시됩니다.
    * 채팅 화면에서 메시지를 입력하면 채팅화면에 표시됩니다. 초기 메시지는 임의로 구성하면 됩니다.
    * 채팅 화면에서 다시 채팅방 목록으로 돌아갈 수 있어야 합니다.
    * 여기에 명시되지 않은 부분은 일반적인 채팅 어플리케이션 기준으로 구현하시면 됩니다. (안 읽은 사람 수 같은 고급 기능을 구현할 필요는 없습니다)
* 인물 사진이 필요한 경우 인터넷에서 자유롭게 구글링하여 사용해주세요.
* 서버 구현은 필요하지 않습니다. 서버에 데이터를 요청해 받아오는 가상의 메소드를 만들어 사용해주세요.
* GUI는 큰틀이 변하지 않는 한에서 변화를 주어도 괜찮습니다.
* React/Redux/React Router을 사용해 SPA(Single Page Application)로 만들어주세요. (React Router의 경우, 설치 필요)
* 화면전환 등 다양한 효과들은 마음껏 보여주셔도 됩니다.

### Advanced

* [Test Code 작성하기](https://gitlab.com/vanilla-coding/bootcamp/wiki/blob/master/tdd/test.md)
* Firebase Database를 이용하여 실제 채팅 기능 구현하기
