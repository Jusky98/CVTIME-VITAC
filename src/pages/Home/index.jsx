import InputEducation from "../../components/InputEducation";
import InputExperience from "../../components/InputExperience";
import InputSimple from "../../components/InputSimple";
import InputSkills from "../../components/inputSkills";

const Home = () =>{
    const inputSimpleList = [
        {
            name: 'Name',
            type: 'text',
        },
        {
            name: 'ID',
            type: 'text',
        },
        {
            name: 'Phone',
            type: 'text',
            regEx: '/^[0-9]{10}$/',
        },
        {
            name: 'Email',
            type: 'email'
        },
        {
            name: 'Address',
            type: 'text',
        }
    ];

    const onSubmit = (event) => {
        event.preventDefault();
        console.log('formulario');
        console.log(event.target.elements);
    }

    return (
        <>
            <div className='self-center'>
                <h1 className='text-2xl text-center'>CV TIME</h1>
                <form className='flex flex-col' onSubmit={ onSubmit }>
                    {
                        inputSimpleList.map(( input ) => <InputSimple key={ input.name } { ...input } />)
                    }
                    <InputExperience />
                    <InputEducation />
                    <InputSkills />
                    <button 
                        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                        type='submit'
                    >
                        Go!
                    </button>
                </form>
            </div>
        </>
    )
}

export default Home;