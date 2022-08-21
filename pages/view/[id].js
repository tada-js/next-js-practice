import Axios from "axios";
import Head from "next/head";
import Item from "../../src/components/Item";

const Post = ({ item }) => {
  // getServerSideProps의 응답값을 item에 담아서 props로 넘겨줌
  return (
    <>
      {item && (
        <>
          <Head>
            <title>{item.name}</title>
            <meta name="description" content={item.description}></meta>
          </Head>
          <Item item={item} />
        </>
      )}
    </>
  );
};

export default Post;

export async function getServerSideProps(context) {
  const id = context.params.id;
  const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const res = await Axios.get(apiUrl);
  const data = res.data;

  return {
    props: {
      // 받아온 응답값을 item에 넣어줌
      item: data,
    },
  };
}

/*
Next.js 모든 페이지 사전 렌더링 (Pre-rendering)
더 좋은 퍼포먼스
검색엔진최적화(SEO)

Per-rendering에는 2가지 종류가 있다.
1. 정적 생성
2. Server Side Rendering(SSR, Dynamic Rendering)

두 가지 차이점은 언제 html 파일을 생성하는가?

[정적 생성]
- 프로젝트가 빌드하는 시점에 html 파일들이 생성
- 모든 요청에 재사용
- 퍼포먼스 이유로, next.js는 정적 생성을 권고
- 정적 생성된 페이지들은 CDN에 캐시
- getStaticProps / getstaticPaths

[서버사이드 렌더링]
- 매 요청마다 html 파일 생성
- 항상 최신 상태 유지
- getServerSideProps  
*/
