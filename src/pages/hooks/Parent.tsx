import { useRef } from "react"
import Counter from "./Counter";

const Parent = (props: any) => {
  const ref:any = useRef(null);

  const counterFromParent = () => {
    ref.current.increaseOtherCounter();
  }
  
  const displayFromParent = () => {
    ref.current.display();
  }

  return (
    <>
      <div>
        <p>Parent</p>
        <Counter initalValue={10} ref={ref} />
        <button onClick={counterFromParent}>From Parent</button>
        <button onClick={displayFromParent}>From Parent Display</button>
      </div>
    </>
  )
}

export default Parent