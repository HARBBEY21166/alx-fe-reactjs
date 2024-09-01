// src/__tests__/TodoList.test.js
import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { TodoList } from '../TodoList';

describe('TodoList component', () => {
  it('renders correctly', () => {
    const { getByText } = render(<TodoList />);
    expect(getByText('Buy milk')).toBeInTheDocument();
    expect(getByText('Walk the dog')).toBeInTheDocument();
    expect(getByText('Do laundry')).toBeInTheDocument();
  });

  it('adds a new todo', () => {
    const { getByText, getByPlaceholderText } = render(<TodoList />);
    const input = getByPlaceholderText('Add new todo');
    fireEvent.change(input, { target: { value: 'New todo' } });
    fireEvent.submit(input);
    expect(getByText('New todo')).toBeInTheDocument();
  });

  it('toggles a todo', () => {
    const { getByText } = render(<TodoList />);
    const todo = getByText('Buy milk');
    fireEvent.click(todo);
    expect(todo).toHaveStyle({ textDecoration: 'line-through' });
  });

  it('deletes a todo', () => {
    const { getByText, queryByText } = render(<TodoList />);
    const todo = getByText('Walk the dog');
    const deleteButton = todo.nextSibling;
    fireEvent.click(deleteButton);
    expect(queryByText('Walk the dog')).not.toBeInTheDocument();
  });
});
