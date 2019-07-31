/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type UserMutationVariables = {
  name?: string | null,
  dob?: string | null,
  userName?: string | null,
};

export type UserMutation = {
  user:  {
    __typename: "USER",
    id: string | null,
    name: string | null,
    dob: string | null,
    userName: string | null,
  } | null,
};

export type UserByIdQueryVariables = {
  id?: string | null,
};

export type UserByIdQuery = {
  userById:  {
    __typename: "USER",
    id: string | null,
    name: string | null,
    dob: string | null,
    userName: string | null,
  } | null,
};
