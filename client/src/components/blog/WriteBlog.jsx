import React,{useState} from 'react'
import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css'
import '../../styles/writeBlog.css'

export default function WriteBlog() {
  const [convertedText, setConvertedText] = useState("");
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const [blog, setBlog] = useState({
    title : '',
    blogBody : convertedText,
    userId :  user.response.id,
  });
  return (
    <div>
      <ReactQuill
      className='blogWriter'
        theme='snow'
        value={convertedText}
        onChange={setConvertedText}
        style={{minHeight: '300px'}}
      />
    </div>
  );
}