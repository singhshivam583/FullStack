import { useState } from "react";

const [isLogin, setIsLogin] = useState(false);

  export const toggleState = () =>{
    setIsLogin(!isLogin)
  }
