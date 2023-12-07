import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div>
      <h1>Oh no, this page doesn&apos;t exist!</h1>
      <Link to="/">Go back to the Home page?</Link>
    </div>
  )
}

export default ErrorPage;