import React,{useState} from 'react'
import {FaEye, FaEyeSlash } from 'react-icons/fa'

const passwordInput = () => { 
    const [showPassword , setShowPassword] = useState(false);


return(
    <div className='relative w-full  '>
    <input type={showPassword ? 'text': "password"}
     placeholder='Enter Password'
     className='w-full px-4 py-2 pr-10  border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 '
/>
<span onClick={()=>setShowPassword((prev)=> !prev)} className='absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500 hover:text-gray-500 '>
{showPassword? <FaEyeSlash />: <FaEye /> }
</span>
 </div>   
)
}
export default passwordInput;
