import {Provider} from 'react-redux';
import store from './example/redux/store';
import Todo from './example/components/Todo';
import Counter from './example/components/Counter';

export default App = () => {
  return (
    <Provider store={store}>
      <Todo />
    </Provider>
  );
};
