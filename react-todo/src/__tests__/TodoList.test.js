import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../TodoList';

describe('TodoList Component', () => {

    test('renders correctly with initial todos', () => {
        render(<TodoList />);
        expect(screen.getByText('Learn React')).toBeInTheDocument();
        expect(screen.getByText('Build a Todo List')).toBeInTheDocument();
    });

    test('adds a new todo', () => {
        render(<TodoList />);
        fireEvent.change(screen.getByRole('textbox'), { target: { value: 'New Todo' } });
        fireEvent.click(screen.getByText('Add Todo'));
        expect(screen.getByText('New Todo')).toBeInTheDocument();
    });

    test('toggles todo completion', () => {
        render(<TodoList />);
        const todoItem = screen.getByText('Learn React');
        fireEvent.click(todoItem);
        expect(todoItem).toHaveStyle('text-decoration: line-through');
        fireEvent.click(todoItem);
        expect(todoItem).toHaveStyle('text-decoration: none');
    });

    test('deletes a todo', () => {
        render(<TodoList />);
        fireEvent.click(screen.getAllByText('Delete')[0]);
        expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
    });

    test('prevents adding empty todo', () => {
        render(<TodoList />);
        fireEvent.click(screen.getByText('Add Todo'));
        expect(screen.queryByText('')).not.toBeInTheDocument();
    });

    test('does not toggle completion on delete click', () => {
        render(<TodoList />);
        const todoItem = screen.getByText('Learn React');
        fireEvent.click(screen.getAllByText('Delete')[0]);
        expect(todoItem).not.toHaveStyle('text-decoration: line-through');
    });

    test('form elements have proper labels for accessibility', () => {
        render(<TodoList />);
        expect(screen.getByLabelText('Add Todo')).toBeInTheDocument();
    });

    test('matches snapshot', () => {
        const { asFragment } = render(<TodoList />);
        expect(asFragment()).toMatchSnapshot();
    });

});
