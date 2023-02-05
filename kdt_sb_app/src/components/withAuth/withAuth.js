import { useRecoilValue } from 'recoil';
import { logInState } from '../../state/logInState';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


const withAuth = ( WrappedComponent ) => { 
  
  return (props) => {
    if (typeof window !== "undefined") {
      const navigate = useNavigate();
      const isLogin = useRecoilValue(logInState);
      if( !isLogin ) {
        useEffect(() => {
          console.log('로그인이 필요합니다.');
          navigate('/login');
        },[navigate]);
        
        return null;
      }
      return <WrappedComponent {...props} />
    }
    return null;
  }
}

export default withAuth;