import ReactDOM from 'react-dom/client';
import CourseApp from './course/CourseApp';
import UnicafeApp from './unicafe/UnicafeApp';
import AnecdotesApp from './anecdotes/AnecdotesApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <CourseApp />
    <hr />
    <UnicafeApp />
    <hr />
    <AnecdotesApp />
  </>
);
