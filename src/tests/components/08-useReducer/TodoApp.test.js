import React from 'react';
import { mount, shallow } from "enzyme";
import { ToDoApp } from "../../../components/08-useReducer/ToDoApp";
import { demoTodos } from "../../fixtures/demoTodos";
import { act } from '@testing-library/react';

describe('Pruebas en <TodoApp />', () => {

    const wrapper = shallow(<ToDoApp />);

    Storage.prototype.setItem = jest.fn(()=>{});

    test('Debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de agregar un TODO', () => {
       
        const wrapper = mount(<ToDoApp />);
        act(()=>{
            
            wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);
            wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[1]);
        });

        expect(wrapper.find('h1').text().trim()).toBe('ToDo App( 2 )');
        expect(localStorage.setItem).toHaveBeenCalledTimes(2);
    });

    test('Debe de eliminar un todo', () => {
       wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);
       wrapper.find('TodoList').prop('handleDelete')(demoTodos[0].id);
       expect(wrapper.find('h1').text().trim()).toBe('ToDo App( 0 )');
    });
    
    
    

});
