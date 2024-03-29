import React from 'react'
import { useFormStatus } from 'react-dom';
import { FaPaperPlane } from 'react-icons/fa'

export default function SubmitBtn() {
    const {pending} = useFormStatus();
  return (
<button className='group bg-gray-950 text-blue-100 px-5 py-2 w-[8rem] flex items-center justify-center rounded-full gap-2 outline-none focus:scale-95 hover:scale-105 hover:bg-gray-900 active:scale-100 disabled:scale-100 disabled:bg-opacity-65' type='submit' disabled={pending}
>
    {pending ? <div className='h-5 w-5 animate-spin rounded-full border-b-2 bordercolor-pink-700'></div>: ( <>
    Submit<FaPaperPlane className='text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1'/>
    </>
        
    )
}</button>
  )
}



