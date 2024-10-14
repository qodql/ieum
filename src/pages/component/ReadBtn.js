import { collection, getDocs, query, setDoc, where } from 'firebase/firestore'
import React, { useState } from 'react'


const ReadBtn = () => {
  const [readingBtn,setReadBtn] = useState('');

  const docRef = collection

  return (
    <div>
      <button>읽는중</button>
    </div>
  )
}

export default ReadBtn