import { useCallback, useMemo, useState } from 'react';
import List from './List';
import slowFunction from '../useMemo/slowFunction';
// import Counter from './Counter';
export const data = [
    {id:1, name:"Abdul Hannan"},
    {id:2, name:"Abdul Hadi"},
    {id:3, name:"Abdul Qadir"},
    {id:4, name:"Abdul Khaliq"},
    {id:5, name:"Abdul Rehman"},
  ]

const LowerState = () => {
const [people, setPeople] = useState(data);
const [count, setCount] = useState(0);


//for useMemo
//big calc will take time for component to render 
//useMemo memorizes the ans at the same input wont update if state updates
const value = useMemo(()=>slowFunction(),[])
console.log(value)

// 1st way to keep the name of function same
const removePerson = useCallback((id)=>{
  const newPeople = people.filter((person)=>person.id!==id);
  setPeople(newPeople)},[people])

//2nd way
// const removePerson = (id)=>{
//   const newPeople = people.filter((person)=>person.id!==id)
//   setPeople(newPeople)
// }

// const getLongestName = useMemo(()=>findLongestName(data),[data])
//2nd way
// const deleteUser = useMemo(()=>removePerson,[people])

return (
 <section>
 <button
className='btn'
onClick={() => setCount (count + 1)}
style={{ marginBottom: '1rem' }}
>
count {count}
</button> 

{/* {making a separate component 
    where state is changing this will help to only render
    the child component increasing performance but 
    in big applications we wont be able to do that 
    at all instances so use useMemo and useCallback } */}
{/* <Counter/> */}
<List people={people} removePerson={removePerson} />
</section>
);
};
export default LowerState;