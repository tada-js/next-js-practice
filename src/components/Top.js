import { Header } from "semantic-ui-react";
import Gnb from "./Gnb";

export default function Top() {
  return (
    <>
      <div style={{display: "flex", paddingTop: 20}}>
        <div style={{flex: "100px 0 0"}}>
          <img
            src="/images/삐딱새_사탕.png" 
            alt="logo" 
            style={{display: "block", width: 80}}
          />
        </div>
        <Header as="h1">tada-js</Header>
      </div>
      <Gnb />
    </>
  )
}
