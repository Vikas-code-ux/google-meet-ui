import React from 'react';
import PeopleComponent from './PeopleComponent';

let people = [
    {
        name : 'Vikas',
        email : 'vikashv20@iitk.ac.in',
        isMuted : false,
        color : 'lightblue'
    },
    {
        name : 'Snehil',
        email : 'snehilsaluja@gmail.com',
        isMuted : true,
        color : 'lightgreen'
    },
    {
        name: 'Chinmay',
        email: 'chinmayj20@iitk.ac.in',
        isMuted: true,
        color : 'red'
    },
    {
        name : 'Ayush',
        email : 'aayush20@iitk.ac.in',
        isMuted : true,
        color : 'blue'
    }
];

function App(){

    const [total, setTotal]=React.useState(0);
    const [age, setAge]=React.useState("Child");

    function checkChild(){
        console.log('Currently the age is ' + total);
        if(total>=18){
            setAge("Adult");
        }
        else if(total<18){
            setAge("Child");
        }
    }

    React.useEffect(checkChild, [total]);

    return(
        <div id="allNames">
            <h1>Total : {total}</h1>
            <h3>{age}</h3>
            {
                people.map(function (obj){
                    return (
                        <PeopleComponent object={obj} color={obj.color} setTotal={setTotal} />
                    )
                })
            }
        </div>
    )
}

export default App;