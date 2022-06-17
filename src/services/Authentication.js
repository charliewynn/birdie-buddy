import {
  CognitoUserPool,
  CognitoUserAttribute,
  CognitoUser,
} from "amazon-cognito-identity-js";
const PoolData = {
  UserPoolId: "us-east-2_cufdrYOvU",
  ClientId: "76cccd50hhfg2hpn4sgs4ks1u4", // Your client id here
};
const UserPool = new CognitoUserPool(PoolData);

export const SignUp = async (username, password, email) => {
  const attributeList = [];

  const dataEmail = {
    Name: "email",
    Value: email,
  };

  const attributeEmail = new CognitoUserAttribute(dataEmail);

  attributeList.push(attributeEmail);

  var signUpResultPromise = new Promise((res, rej) => {
    UserPool.signUp(
      username,
      password,
      attributeList,
      null,
      function (err, result) {
        if (err) {
          // username is taken error will trigger this
          rej(err);
        }
        res(result);
      }
    );
  });
  return signUpResultPromise;
};
