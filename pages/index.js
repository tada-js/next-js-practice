import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <ul>
        <li>create-next-app으로 설치하면</li>
        <li>컴파일과 번들링이 자동으로 된다. (webpack과 babel)</li>
        <li>자동 리프레시 기능으로 수정하면 화면에 바로 반영된다.</li>
        <li>서버사이드 렌더링이 지원된다. 때문에 페이지 소스를 보게되면 HTML 소스 코드가 모두 보인다.</li>
        <li>스태틱 파일을 지원한다.</li>
      </ul>
    </>
  )
}
