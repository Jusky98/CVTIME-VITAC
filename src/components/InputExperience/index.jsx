//import { useState } from "react"

const InputExperience = () => {
    
    //const [experience, setExperience] = useState([]);
    const addExperence = (ev) => {
        ev.preventDefault();
        console.log('Agregando experiencia');
    }

    return (
        <div className=' flex flex-col '>
            <label htmlFor='experience'> Experience </label>
            <input 
                type='date'
                className='border-2 border-gray-300 rounded-md p-1' 
            />
            <button  onClick={ (ev) => addExperence(ev) }>Agregar mas</button>
        </div>
    )
}

export default InputExperience
