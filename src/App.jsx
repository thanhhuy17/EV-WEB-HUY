import React, { useState } from 'react'
import Background from './components/Background/Background';

export const App = () => {
  let heroData =[
    {text1:'Driver into', text2: 'what your love'},
    {text1:'Indulge', text2: 'your passions'},
    {text1:'give into', text2: 'your passions'},
  ]

  const [heroCount, setHeroCount] = useState(2);
  const [playStatus, setPlayStatus] = useState(false);

  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount}/>
    </div>
  )
}
