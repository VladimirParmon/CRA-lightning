import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { HeaderBottomContext } from '../../App';
import LoadSalesforceAPI from '../../components/LoadSalesforceAPI';
import LoadVoyagerAPI from '../../components/LoadVoyagerAPI';
import { flexCenter } from '../../constants/styling';
import { SalesforceData, VoyagerData } from '../../models/typings';
import { View } from './View';

interface Props {
  vanityName: string;
}

const Container = styled.div`
  ${flexCenter};
  flex-direction: column;
  gap: 15px;
`;

export default function MainPage({ vanityName }: Props) {
  const [voyagerData, setVoyagerData] = useState<VoyagerData | null>(null);
  const [salesforceData, setSalesforceData] = useState<SalesforceData | null>(null);
  const setShowHeaderBottom = useContext(HeaderBottomContext);

  useEffect(() => {
    if (setShowHeaderBottom) {
      if (!voyagerData || !salesforceData) {
        setShowHeaderBottom(false);
      } else {
        setShowHeaderBottom(true);
      }
    }
  }, [voyagerData, salesforceData, setShowHeaderBottom]);

  useEffect(() => {
    setVoyagerData(null);
    setSalesforceData(null);
  }, [vanityName]);

  return (
    <LoadVoyagerAPI vanityName={vanityName} setVoyagerData={setVoyagerData}>
      <LoadSalesforceAPI
        vanityName={vanityName}
        voyagerData={voyagerData}
        setSalesforceData={setSalesforceData}>
        <Container>
          <View salesforceData={salesforceData} />
        </Container>
      </LoadSalesforceAPI>
    </LoadVoyagerAPI>
  );
}
