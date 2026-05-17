import React from 'react';
import useFetch from './hooks/useFetch';
import withLoading from './hocs/withLoading';
import TodoList from './TodoList';
import MouseTracker from './renderprops/MouseTracker';

const EnhancedTodoList = withLoading(TodoList);

function App() {
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/todos?_limit=10');

  if (error) return <div>Error: {error.message}</div>;

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Hooks and Patterns Lab</h1>
      
      <section style={{ marginBottom: '40px' }}>
        <h2>1. Render Props (Mouse Tracker)</h2>
        <MouseTracker 
          render={(mousePosition) => (
            <div style={{ padding: '20px', backgroundColor: '#f0f0f0', borderRadius: '8px' }}>
              <strong>Mouse position:</strong> X: {mousePosition.x}, Y: {mousePosition.y}
            </div>
          )}
        />
      </section>

      <section>
        <h2>2. Custom Hook & HOC Pattern Lab</h2>
        <EnhancedTodoList isLoading={loading} todos={data} />
      </section>
    </div>
  );
}

export default App;