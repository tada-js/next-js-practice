import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='ko'>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

// _app.js는 글로벌 css나 공통 레이아웃을 정의한다.
// _document.js는 서버에서만 렌더링 되고 onClick 같은 이벤트 핸들러는 작동하지 않는다. css 또한 사용하지 않는다.
// 모든 페이지에 공통적으로 적용 되어야 하는 것들은 _app.js 에서 작성하자.
// _app.js에서 사용하는 Head랑 _document.js에서 사용하는 Head는 다르다. title 같은 속성들은 _app.js에 넣거나 각 페이지에서 import해서 사용해야 된다.