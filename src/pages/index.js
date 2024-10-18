import { getClientToken } from "@/lib/firebase.js";
import Main  from "./Main.js";
import axios from "axios"


export default function Home() {

  // let token;

  // async function clientToken(){
  //   token = await getClientToken();
  //   console.log(token);

  //   Notification.requestPermission().then(permission=>{
  //     console.log('dd');
  //   })
  // }

  // function pushTest(){
  //   const msg = {
  //       data:{
  //           title:'FCM TEST',
  //           body:'FCM 내용',
  //           icon:'',
  //           image:'/',
  //           click_action:'https://naver.com'
  //       },
  //       token
  //   }
  //   axios.post('/api/fcm', msg)
  // }

  return (
    <>
      <Main/> 
    </>
  );
}
