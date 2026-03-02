import { useEffect, useState } from "react"

const User=()=>{
    const[list,setList]=useState(()=>{
        const saved=localStorage.getItem("list")
        return saved?JSON.parse(saved):[]
    })

    const [text,setText]=useState("")
    useEffect(()=>{
        localStorage.setItem("list",JSON.stringify(list))
    },[text])
    const addList=()=>{
        if(text.trim()==="")return
        setList([...list,text])
        setText("")

        
    }

return(
    <div>
        <input type="text" 
        value={text}
        onChange={(e)=>setText(e.target.value)}/>
        <button onClick={addList}>add</button>
        {list.map((lists,index)=>(
            <div key={index}>{list}</div>

        ))}
    </div>

)
}

export default User