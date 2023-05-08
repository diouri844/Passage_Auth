
import '../src/App.css';
import { useCurrentUser } from '../hooks/useCurrentUser';


export default function Profile(){
  // extract data from current user :
  const {
    isLoading,
    isAuthorized,
    username
  } = useCurrentUser();
  console.log(
    isLoading,
    isAuthorized,
    username
  );
  if ( isLoading ){
    return null;
  }
  const authorizedBody =
    <>
        You successfully signed in with Passage.
        <br/><br/>
        Your email is: <b>{ username }</b>
    </>
    const unauthorizedBody =
    <>
        You have not logged in and cannot view the dashboard.
        <br/><br/>
        <a href="/">Login to continue.</a>
    </>
    return (
        <div className="DisplayProfile">
            <div >{isAuthorized ? 'Welcome!' : 'Unauthorized'}</div>
            <div >
                { isAuthorized ? authorizedBody : unauthorizedBody }
            </div>
        </div>
    )
}
