import cubejs from "@cubejs-client/core";

const CUBE_TOKEN =
  "d1315c519277f50a26ddf4dd1246f8af6bb5d653f011ef624b839ec308604c0f0f414ae3e9ae8ac0e0a329126d2c7046e8b07a56751472abbdaaa87ce6f46abb";

const CUBE_API = "http://localhost:4000/cubejs-api/v1";

const cubejsApi = cubejs(CUBE_TOKEN, { apiUrl: CUBE_API });

export default cubejsApi;
