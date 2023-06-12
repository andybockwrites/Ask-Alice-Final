import { gql } from '@apollo/client';

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
                email
                carrots {
                    _id
                    drugName
                    parentCompany
                }
            }
        }
    }
`;

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
                email
                carrots {
                    _id
                    drugName
                    parentCompany
                }
            }
        }
    }
`;

export const ADD_CARROT = gql`
    mutation addCarrot($drugName: String!, $parentCompany: String!) {
        addCarrot(drugName: $drugName, parentCompany: $parentCompany) {
            _id
            drugName
            parentCompany
        }
    }
`;

export const REMOVE_CARROT = gql`
    mutation removeCarrot($carrotId: ID!) {
        removeCarrot(carrotId: $carrotId) {
            _id
            drugName
            parentCompany
        }
    }
`;