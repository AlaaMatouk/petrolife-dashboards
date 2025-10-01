import { useNavigate, useLocation } from 'react-router-dom';

export const useNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const goTo = (path: string) => {
    navigate(path);
  };

  const goBack = () => {
    navigate(-1);
  };

  const goForward = () => {
    navigate(1);
  };

  const isCurrentPath = (path: string) => {
    return location.pathname === path;
  };

  const getCurrentPath = () => {
    return location.pathname;
  };

  return {
    goTo,
    goBack,
    goForward,
    isCurrentPath,
    getCurrentPath,
    currentPath: location.pathname,
  };
};
