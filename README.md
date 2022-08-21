## 프로젝트 실행

```bash
npm run dev
```

<br><br>

## 프로젝트 목표

next.js를 학습하기 위한 클론 코딩

<br><br>

## 무엇을 했고 무엇을 알게 되었는지!

- next.js를 사용하여 SEO 최적화에 도움을 주었습니다.
- 상황에 맞는 Pre-rendering을 하였습니다.
  - 상품 상세 페이지는 Pre-rendering 중 `getServerSideProps`를 사용하여 SSR로 구현하였습니다. SSR로 구현한 이유는 요청마다 html을 생성하여 상품의 가격, 정보 등의 데이터가 바뀌었을 때를 대비하고자 입니다.
- `next/link`, `next/router`를 사용하여 라우팅 했습니다. `a` 태그와 `location.href`를 사용해도 되지만, 사용한다면 페이지가 새로고침 되면서 이동되기 때문에 요청도 늘어나고 SPA의 장점이 사라지기 때문에 사용하지 않았습니다.
- `_app.js`에서 페이지 전환시 헤더(Top), 푸터(Footer) 레이아웃이 유지되도록 하였습니다.
- `_document.js`는 서버에서 렌더링 되므로 이벤트 핸들러는 동작하지 않는 것을 알게 되었습니다.
