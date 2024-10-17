import './App.css';
import { Provider } from "react-redux";
import HooksCakeContainer from './components/HooksCakeContainer';
import InfiniteScrolling from './InfiniteScrolling/InfiniteScrolling';
import { store } from './redux/store';
import PaginationExample from './ClientSidePagination/PaginationExample';
import Pagination from './ServerSidePagination/Pagination';

function App() {
  return (
    <Provider store={store}>
      <div>
        <Pagination />
      </div>
    </Provider>
  );
}

export default App;
