const InputSkills = () => {
    //const [experience, setExperience] = useState([]);
    const addSkills = (ev) => {
        ev.preventDefault();
        console.log('Agregando Skills');
    }

    return (
        <div className=' flex flex-col '>
            <label
                htmlFor='skills'
            > 
                Skills 
            </label>
            <input 
                id='skills' 
                type='text'
                className='border-2 border-gray-300 rounded-md p-1' 
            />
            <button type='button' onClick={ (ev) => addSkills(ev) }>Agregar mas</button>
        </div>
    )
}

export default InputSkills
