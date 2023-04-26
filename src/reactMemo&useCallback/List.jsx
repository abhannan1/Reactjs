import Person from './Person';
import {memo} from "react"

const List = ({people,removePerson }) => {

    
return(
<div>
{people.map((person) => {
return <Person key={person.id} {...
person} removePerson={removePerson}/>;
})}
</div>
);
};

//memo will not let it rerender 
//if the state or props are not changing
export default memo(List);