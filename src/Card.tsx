import React, { useEffect } from 'react';

export default () => {
  const fetchText = () => {
    const text = fetch("test/NY/p1.json").then(res => {
      console.log("inside", res.json())
    })
    console.log('blblb', text)
  }

  useEffect(() => {
    fetchText();
  }, [])

  return (
    <div>
      <div>hello</div>
    </div>
  )
}