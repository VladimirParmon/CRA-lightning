import { Fragment, useEffect, useState } from 'react';
import { SetState } from '../models/utils';
import LoadingScreen from './LoadingScreen';

type Props = {
  children: JSX.Element;
  voyagerData: any;
  vanityName: string;
  setSalesforceData: SetState<{}>;
};

export default function LoadSalesforceAPI({
  children,
  vanityName,
  voyagerData,
  setSalesforceData,
}: Props) {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    //TODO: fetch data from Salesforce
    setTimeout(() => {
      setIsLoading(false);
      setSalesforceData(true);
    }, 1000);
  }, [voyagerData, setSalesforceData]);
  return <Fragment>{isLoading ? <LoadingScreen vanityName={vanityName} /> : children}</Fragment>;
}
