import React,{useState} from 'react'
import { Tag, Input, Tooltip } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

function Intrests({intrests}) {
    const [tags, setTag] = useState(intrests)
    const [inputVisible, setinputVisible] = useState(false)
    const [inputValue, setinputValue] = useState('')
    const [editInputIndex, seteditInputIndex] = useState(-1)
    const [editInputValue, seteditInputValue] = useState('')
    console.log(tags)
    const handleClose = (removedTag) => {
        const tags = tags.filter(tag => tag !== removedTag);
        console.log(tags);
        setTag({ tags });
      };
    
      const showInput = () => {
        this.setState({ inputVisible: true }, () => this.input.focus());
      };


    return (
        <div>
            
        </div>
    )
}

export default Intrests
