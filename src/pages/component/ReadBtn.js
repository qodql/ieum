import { db } from '@/lib/firebase';
import { collection, getDocs, query, setDoc, where } from 'firebase/firestore'
import { useSession } from 'next-auth/react';
import React, { useState } from 'react'


const ReadBtn = () => {
  const [readingBtn,setReadBtn] = useState('');
  const {data : session} = useSession();
  const docRef = collection(db, 'readlist');
  const authhorize = async () => {
    const q = query(
      collection(db, "readlist"),
      where("info.email", "==", session.user.email),
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.docs.map((doc) => {
      const docRef = doc
    });
  }
    return (
      <div>
      <button>읽는중</button>
        
    </div>
  )
}
export default ReadBtn