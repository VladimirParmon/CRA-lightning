import { Fragment, useEffect, useState } from 'react';
import { SetState } from '../models/utils';
import Spinner from './Spinner';

type Props = {
  children: JSX.Element;
  vanityName: string;
  setVoyagerData: SetState<any>; //TODO: interface that describes this data
};

export default function LoadVoyagerAPI({ children, vanityName, setVoyagerData }: Props) {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    //TODO: fetch data from voyager API
    setTimeout(() => {
      setIsLoading(false);
      setVoyagerData(true);
    }, 1000);
  }, [vanityName, setVoyagerData]);
  return <Fragment>{isLoading ? <Spinner size='medium' variant='brand' /> : children}</Fragment>;
}
