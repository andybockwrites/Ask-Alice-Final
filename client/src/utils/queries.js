import { gql } from '@apollo/client';

export const QUERY_ME = gql`
    query me {
        me {
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
`;

export const QUERY_CARROTS_BY_DRUGNAME = gql`
    query carrotsByDrugName($drugName: String!) {
        carrotsByDrugName(drugName: $drugName) {
            _id
            drugName
            parentCompany
            carrots {
                _id
            }
        }
    }
`;