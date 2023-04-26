//allows us to mark some functions as less important 
//which prevent the whole UI blocking 

import { startTransition, useState, useTransition } from 'react';
const LatestReact = () => {
const [text, setText] = useState('');
const [items, setItems] = useState([]);
//useTransition Hook (runs the functions that 
//slows down the cpu in background  making the 
//response faster for the user while function runs in the bg)
const [isPending, startTransition] = useTransition()

const handleChange = (e) => {
setText (e. target.value);
startTransition(()=>{
    const newItems = Array.from({ length: 5000 }, (_,
        index) => {
        return (
        <div key={index}>
        <img src='/vite.svg' alt='' />
        </div>
        );
        });
        setItems (newItems);
})
};
return (
    <section>
    <form className='form'>
    <input
    type='text'
    className='form-input'
    value={text}
    onChange={handleChange}
    />
    </form>
    <h2>Items Below</h2>
    {isPending 
    ? 
    <h2>....Loading</h2>
    :     
    <div
    style={{
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    marginTop: '2rem',
    }}>
    {items}
    </div>}

    </section>
)
}

export default LatestReact