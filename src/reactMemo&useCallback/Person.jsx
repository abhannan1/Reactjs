import { useEffect} from 'react';

const Person = ({ name , removePerson, id}) => {

console.log('render');

//use effect will stop the functionality to 
//stop rerender but the child component will always rerender
// useEffect (() => {
// console.log('unfortunately does not fix the issue');
// }, []);

return (
<div>
<h4>{name}</h4>
<button onClick={()=>removePerson(id)}>remove</button>
</div>
);
};
export default Person;