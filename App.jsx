import {Provider} from 'react-redux';
import store from './src/redux/store';
import Todo from './src/components/Todo';

export default App = () => {
  return (
    <Provider store={store}>
      <Todo />
    </Provider>
  );
};
