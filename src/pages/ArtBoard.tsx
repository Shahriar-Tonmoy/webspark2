import React, { useEffect } from 'react';
import ArtboardMobile from './ArtBoardMobile';
//import ArtboardDesktop from './ArtBoardDesktop';
import ArtboardDesktopprev from './ArtBoardDesktopprev';
import { APPCOOKIE, VALIDATIONCOOKIE, cookieAvailale, getAppCookie } from './Fuctions/appcookie/appcookie';
import { useNavigate } from 'react-router';


const Artboard = () => {
const navigate = useNavigate();
  useEffect(() => {
		if(cookieAvailale(APPCOOKIE)) {
			if(getAppCookie(VALIDATIONCOOKIE) === 'false') {
			navigate('/activate')
			}
		}
		else {
			navigate('/')
		}
	}, [])

  const { innerWidth: width } = window;
  const mobile = width <= 900 ? true : false;
  return (
    <div>
      {mobile&& <ArtboardMobile />}
      {!mobile && <ArtboardDesktopprev />}
    </div>
  )
};

export default Artboard;
