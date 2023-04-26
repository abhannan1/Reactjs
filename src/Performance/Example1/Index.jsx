import { useState } from 'react';
import List from './List';
import Counter from './Counter';
export const data = [
    {id:1, name:"Abdul Hannan"},
    {id:2, name:"Abdul Hadi"},
    {id:3, name:"Abdul Qadir"},
    {id:4, name:"Abdul Khaliq"},
    {id:5, name:"Abdul Rehman"},
  ]

const LowerState = () => {
const [people, setPeople] = useState(data);
// const [count, setCount] = useState(0);

return (
<section>
{/* <button
className='btn'
onClick={() => setCount (count + 1)}
style={{ marginBottom: '1rem' }}
>
count {count}
</button> */}

{/* {making a separate component 
    where state is changing this will help to only render
    the child component increasing performance but 
    in big applications we wont be able to do that 
    at all instances so use useMemo and useCallback } */}
<Counter/>
<List people={people} />
</section>
);
};
export default LowerState;