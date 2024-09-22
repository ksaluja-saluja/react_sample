import { useEffect, useState, useCallback, useImperativeHandle, forwardRef } from "react"

const Counter = (props: any, ref: any) => {
  const [counter, setCounter] = useState<number>(0);
  const [otherCounter, setOtherCounter] = useState<number>(props.initialValue || 0);

  useEffect(() => {
    console.log('Counter is ', counter);

    return () => {
      console.log('Leaving..')
    }
  }, [counter]);

  const displayCounter = useCallback(() => {
    console.log('Counter', counter)
  }, [counter])

  const increment = () => {
    if (otherCounter % 2 === 0) {
      setCounter(counter + 1);
    }
  }

  useImperativeHandle(ref, () => {
    return {
      increaseOtherCounter:() => {
        setOtherCounter(otherCounter + 1)
      },
      display: () => {
        console.log('Value of counter is', counter);
        console.log('Value of other counter is', otherCounter);
      }
    }
  }, [counter, otherCounter])

  return (
    <>
      <div>
        <p>Counter value: {counter}</p>
        <button onClick={increment}>Click here</button>
        <button onClick={displayCounter}>Display from child</button>
      </div>
    </>
  )
}

export default forwardRef(Counter)