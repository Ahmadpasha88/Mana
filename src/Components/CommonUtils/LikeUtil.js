import { useContext, useState } from "react";
import { MyContext } from "../Context/cartContext";

export const useLike = () => {
  const { cart, setCart } = useContext(MyContext);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    let cartData = [...cart];
    setIsLiked(!isLiked);
    if (!isLiked) {
      cartData.push(1);
      setCart([...cartData]);
    } else {
      cartData.pop();
      setCart([...cartData]);
    }
  };

  return { isLiked, handleLike };
};
