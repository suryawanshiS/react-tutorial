import React ,{useState} from "react";
function Tabular(){
    const content =[
        ['Ronaldo', 'Messi', 'Mbappe'],
        ['MSdhoni', 'Virat', 'Gambhir'],
        ['Katrina Kaif','Kareena','Alia Bhat']
    ]
    const [contentIndex, setContentIndex] = useState(3)

return(
    <>
    <button onClick={()=>setContentIndex(0)}>Football</button>
    <button onClick={()=>setContentIndex(1)}>Cricket</button>
    <button onClick={()=>setContentIndex(2)}>Actress</button>
    
    <ul>
        {content[contentIndex].map((ele,index)=>(
            <li key={index}>{ele}</li>
        ))}
    </ul>
    </>
)
}
export default Tabular

