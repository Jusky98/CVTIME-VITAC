const InputSimple = ( { name, type, regEx } ) => {
    return (
        <>
            <label htmlFor={ `${ name }` }> { name } </label>
            <input 
                id={ `${ name }` }
                type={ `${ type }` } 
                pattern={ `${ !regEx ? '' : regEx }` }
                className=" border-2 border-gray-300 rounded-md p-1 "
            />
        </>
    )
}

export default InputSimple;