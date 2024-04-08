const InputEducation = () => {
    //const [experience, setExperience] = useState([]);
    const addEducation = (ev) => {
        ev.preventDefault();
        console.log('Agregando Educacion');
    }

    return (
        <div className=' flex flex-col '>
            <label htmlFor='education'> Education </label>
            <input 
                type="date"
                className='border-2 border-gray-300 rounded-md p-1' 
            />
            <button type='button' onClick={ (ev) => addEducation(ev) }>Agregar mas</button>
        </div>
    )
}

export default InputEducation
