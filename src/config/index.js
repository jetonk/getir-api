const env = process.env.NODE_ENV;
console.log("env", env);

const config = {
  dev: {
    app: {
      port: 3000,
    },
    dbURI: `mongodb+srv://challengeUser:WUMglwNBaydH8Yvu@challenge-xzwqd.mongodb.net/getir-case-study?retryWrites=true`,
  },
  prod: {
    app: {
      port: 3000,
    },
    dbURI: `mongodb+srv://challengeUser:WUMglwNBaydH8Yvu@challenge-xzwqd.mongodb.net/getir-case-study?retryWrites=true`,
  },
};

export default config[env];
