import type { AppDispatch } from 'src/redux';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setVisitorId, setRevisited, setIsOpenTalk } from 'src/redux/index.slices';

const LeadsProvider = ({ children }: leadsProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const { visitorRelated } = useSelector((state: reduxState) => state.appSettings);

  useEffect(() => {
    if (visitorRelated) {
      dispatch(setRevisited(true));
    }
  }, [visitorRelated]);
  useEffect(() => {
    dispatch(setIsOpenTalk(false));
    const visitorData = localStorage.getItem('device_fingerprint');
    if (visitorData) {
      dispatch(setVisitorId(visitorData));
    }
  }, []);

  return children;
};

export default LeadsProvider;
