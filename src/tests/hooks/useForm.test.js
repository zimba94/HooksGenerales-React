import { renderHook, act } from "@testing-library/react-hooks";
import { useForm } from "../../hooks/useForm";
describe('Pruebas en useForm', () => {
    const initialForm = {
        name: 'zimba',
        email: 'zimba@gmail.com'
    };

    test('Debe de regresar un formulario por defecto', () => {
        const {result} = renderHook( () => useForm(initialForm));
        const [formValues, handleInputChange, reset] = result.current;

        expect(formValues).toEqual(initialForm);
        expect( typeof handleInputChange).toBe('function');
        expect( typeof reset).toBe('function');

        // expect( result.current[0].name ).toBe('zimba');
        // expect( result.current[0].email ).toBe('zimba@gmail.com');
        // expect(typeof result.current[1]).toBe('function');
        // expect(typeof result.current[2]).toBe('function');
    });

    test('Debe de cambiar el valor del formulario(cambiar name)', () => {
        const {result} = renderHook( () => useForm(initialForm));
        const [ , handleInputChange] = result.current;
        act(() => {
            handleInputChange({target: { name: 'name', value: 'alan'}});
        });

        const [ formValues] = result.current;
        expect(formValues).toEqual({...initialForm, name:'alan'});

    });


    test('Debe de re-establecer el formulario con RESET)', () => {
        const {result} = renderHook( () => useForm(initialForm));
        const [ , handleInputChange, reset] = result.current;
        act(() => {
            handleInputChange({target: { name: 'name', value: 'alan'}});
            reset();
        });

        const [ formValues] = result.current;
        expect(formValues).toEqual(initialForm);

    });
    


})
