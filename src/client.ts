import * as promise from 'promise';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import * as queries from './graphql/queries';
import './server';

export const getUser = async (id: string) => {
  try {
    return await API.graphql(graphqlOperation(queries.userById, { id }));
  } catch (error) {
    console.log('error while API.graphql(graphqlOperation(queries.userById, params))', error);
    return error;
  }
};