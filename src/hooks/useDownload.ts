import type { AppDispatch } from 'src/redux';

import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { notify } from 'src/components/alert/alert';

export const useDownload = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [downloading, setDownloading] = useState(false);

  const handleDownload = async (download: (arg0: any) => any, payload: any, fileName: string) => {
    setDownloading(true);
    const res: any = await dispatch(download(payload));
    if (res.meta.requestStatus === 'fulfilled') {
      const link = document.createElement('a');
      link.href = URL.createObjectURL(new Blob([res.payload], { type: res.payload.type }));
      link.download = fileName;
      link.click();
      notify('Downloaded successfully', 'success');
      setDownloading(false);
    } else {
      setDownloading(false);
    }
  };
  return {
    handleDownload,
    downloading,
  };
};
