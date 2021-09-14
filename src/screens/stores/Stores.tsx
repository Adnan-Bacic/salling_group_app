import React, { useEffect } from 'react';
import {
  Text,
  View,
  Button,
} from 'react-native';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import * as functions from '../../redux/functions';
import { Spinner } from '../../components';

const Stores = ({ navigation }): React.ReactElement => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const getStores = () => {
      dispatch(functions.stores.getStores('data'));
    };

    getStores();
  }, [dispatch]);

  const stores = useAppSelector((state) => { return state.stores; });
  const ui = useAppSelector((state) => { return state.ui; });
  //console.log('stores', stores);

  if(ui.isLoading){
    return <Spinner></Spinner>
  }
  
  return (
    <>
      <View>
        <Text>stores</Text>
        {stores.storesData && (
          <>
          {stores.storesData.map((item) => {
            //console.log('i', item.hours)
            return(
              <Text key={item.id}>
                {item.name}
              </Text>
            )
          })}
          </>
        )}
      </View>
    </>
  );
};

export default Stores;