import React from "react";

function PeopleComponent (props) {

    let obj=props.object;
    console.log(props);

    const [count, setCount] = React.useState(0);
    const [color, setColor] = React.useState('blue');
    const [isMuted, setIsMuted] = React.useState(obj.isMuted);
    const [age, setAge]=React.useState("Child");

    function checkChild(){
        console.log('Currently the age is ' + count);
        if(count>18){
            setAge("Adult");
        }
    }

    React.useEffect(checkChild, [count]);
    
    function IncreaseCount () {
        if(count*count <1000){
            setCount(count+1)
            props.setTotal(
                function(total){
                    return total+1
                }
            )
        }
    }
    function DecreaseCount (){
        setCount(count-1)
        props.setTotal(
            function(total){
                return total-1
            }
        );
    }

    return(
        <div style={{backgroundColor: color}}>
            <h3>{obj.name} is a/an {age}</h3>
            <h4>Button pressed : {count}</h4>
            <h2>{isMuted?"Mute":"Unmute"}</h2>
            <div>{obj.name}</div>
            <div>{obj.email}</div>
            <div>{obj.isMuted?  <button onClick={IncreaseCount}>Increase</button>: 
                                <button onClick={DecreaseCount}>Decrease</button> }
            </div>
            <div>{isMuted?  <button onClick={function(){setIsMuted(false)}}>Unmute</button>: 
                                <button onClick={function(){setIsMuted(true)}}>Mute</button> }
            </div>
            <input type="color" value={color} onChange={e => setColor(e.target.value)} />
        </div>
    )
}

export default PeopleComponent;