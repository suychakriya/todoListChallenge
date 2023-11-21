import admin from 'firebase-admin';
// const serviceAccount = {
//   type: 'service_account',
//   project_id: 'todolist-98812',
//   private_key_id: '5116bfd3b403e554059512576a882b005e5474cb',
//   private_key:
//     '-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDWjm3tpWw0wuZc\nfDhmqMrdrDjjPhmwFAtY/1hfWoS9cNmwPgZuuQqJwJHZRD+OOh/wGafS7vOcI/pG\npDiwo2oKW49SOr4t5gPx/GSowWps25v6wkQ/z/FuXz3rf8gcilZrpBG9BjFoBg0U\nnYypr5BYtdjvnsvPkv3XMjRE0GXNWNeNztCmAOyzQwBEiKmudNnn48IZIxzmprTl\nGGnuKCSVRcPWKsxWsL9TAqC5K/7EME/iQ1EIpBO5vX/A2kw/8YJ/HVDykUMtKnlR\nDL7u7+tK7bYNG0Mzp3AsTGhfMATlPa6SExz32hP10SRPP6o19VkPHdZV9Et9qH5n\nppjWa12pAgMBAAECggEAGq61VJHXOluHpvZK1FeG/RjjLT2Gl8tyWtPMk3UwH1gW\ntnCMP75S5W01pimy5rbrTGKAaL7PPHqL8DeRlkQIVrfqw7zq9E3P7UroYMVG/Tk1\ndXKt5qqvWXzOOEiYpBX/J91MWG/Z+pgQDeGHAf5DqwiYbTpYGd0rpNTJQ8qP8oCw\n2qgvAjW5ppr5R8Zn8g7m0SZbniY4YbQIzg8ar1k4CHHKK0K1PR0mrsa8BNeqnMor\nc0Mh1vf7+v52R6AeZAacpiNQuKeyTIfAk25idT0ZiJ7tlvp7p7uqmvytzaLwue1b\nYZ+2FQNz0tddbbmYC6x5e/DaB5yg87ZbzhEQQuJstQKBgQD04WMvtWJW6TrifXzg\nxw7NogRZW36UN7FaPv9Q7Qh0Pu5MNd/OX6/SWfZabpTpBCgJnE5nK7R4VDEFFfjC\nVwglLYFtTvgcpVMSu+dtDj4RjRIlqZN2vubtNfg0Ls46hN0y1LkabBiR0cjafk65\npFiRq3OhwBh261y+ipEvBXPuNQKBgQDgTIo7iy5efz+NBDAQeQ9QG/dV0OTyeZhn\nT99Trg4UT3frDn3AMdaRVhJNy8Qi44ZSztrdD2zjQXngNKga2NpkYtSkz92QJ9W7\njosFc/+S98FolFbllc8RPrxlzphCijZmXZ5eFWLL3+HdhvA1c1cfPvej2VCSXzKY\n6NvUEAAwJQKBgGxmdXTCE3Urq3BlYmlSVMA8bzZrJR5RhQXRC050jyB+VxiPZLJD\nc15nioE/oFWCDIMsmRxcoXf+tPBuaH8G7ckfWsLbiUOM/7g0S97fxiQY0aawaWHQ\nYgMxt9zJt2r6M7zzo7kJjtrGBeaKsSjGkppxTi+VDH9f8t86EcjB3i7dAoGAWtil\nZFiK/1sqskLv9LwTp66sDuX81PjK8Y04NvxYV4GYYGwOIroM3fCumTPezQK6dO+z\nVbXZtHHgmx64t6b9TYt59Qb8BlccCktBo4PIEA6pF2J9j5+Nrr5qMBHtOYYhYnSo\noBKpYUncgY0V3ZBJyS4HvyVVrPNB2wz1fH6+lMECgYBFVU7WxZ6Ri551Dxldfz1i\nCUZWeNL8Q97YNdF0ps7DSsvA3vJEK0TJLs++Pg1WxlBddmrioHCDaiBtlLGOhqfW\njAl85uqr3Ly2PmCPKLBzdVXbSLDuyvWLPnCLkVQ2wJnIJ8YiALMsCgg8eruWQPwu\nMbuTLio1oqUQTU/dT2Ur2A==\n-----END PRIVATE KEY-----\n',
//   client_email:
//     'firebase-adminsdk-s2vjs@todolist-98812.iam.gserviceaccount.com',
//   client_id: '100547939706374367903',
//   auth_uri: 'https://accounts.google.com/o/oauth2/auth',
//   token_uri: 'https://oauth2.googleapis.com/token',
//   auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
//   client_x509_cert_url:
//     'https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-s2vjs%40todolist-98812.iam.gserviceaccount.com',
//   universe_domain: 'googleapis.com',
// };

const serviceAccount = {
  "type": "service_account",
  "project_id": "todolist-vtech",
  "private_key_id": "1dd29ae3a5cac1b87c281945e3bc2eba7d987ac9",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCha4qwPxK/fhAJ\nPbcX2vgoPWY0U/0xiBF653STVfwPx1ee9roy8riybwvigFEjKMzCjr9js2CoM7sA\nXMOet8+FYSUtUDxRDJ6YRBnd4LRZ0I3NKctdZyFfqkbNMqt81UMkOKpyW4vd2Jqk\nfj5LNwFqRHGfoL6Myk1MSvWcYwin1XaPD83xFZVXEySsdwAqGsRjYQqeOTbWN59u\nwXpyJrf8wKy0S8mr4S41/5FR6SYLnZMbced4+ximRGq6GvsehFQeF7jLmzi76/Pj\n/wb7FllMfy305ZmH0aK9615AkeUvnRNSjMB42MXmOrueLj8ZKlx3PseswP9eNEFC\nw1+G8hIXAgMBAAECggEAOUtAAzWn9GMM0xLeMW/tw+6jH7Ct/k4zEiIkHQWYfYs+\nPPSK+3lueBr1J3RvGCErqGTdZshs5tbRqZvDbUsFs+xasz424nettRL68WeH7Bcb\ntbX/ckwgKuH31m6FMr5JYgpg6U04FEqE/Ry4BJ9l96+KeuOlrrhBfnJewh7enB8V\n+SHK7Jt2NftaZ/RtSge2DAS+m2rGUs5jLAQVQvwrq9EavBTdsLPccoQmf+BC8TFa\nKm8FhwODKyHYHBdXzX/PEYbZP9PIRxllnSI6vNwfSPS5qX6xgmfojWlXVuOehFe2\nX8b0ly+6pSP2LrWHs6x5Rip0ZqFcC9ZD1ZrDD+5YzQKBgQDcdgxemiscQRUt2Mla\nNv0IuL4MkzlvB3lbk30tFtN8jERe2yu7PcMit+U9w4E9WWwl3kisfyawyfIQzuwr\njSv3RGHd9ZXO5pj38CwmQpRWcc1jfUZsowQl+kgeW+cnAwNbUGqiqkna7Iv9sqka\nsjI9pfLL5W6nAxorx6Vv9aI8NQKBgQC7cP947oa730uCQVexr/NjqPoolQuoeBXI\n93+EyMM+FK/vV/AzyXMp70OL7kD2kwME1XpcqEIHD9T3EG+0bMX2vU58Ayi5CMh2\nqUrBKuM4Lfzx4V+WLjKv6GnBTVgrywOMiC9wl74o9tNWI1eZAyHzvysl/+FtwOcw\nHucDESDmmwKBgHx9EGkPJ07SFXKJGtIdgO6+21pgfCsNDmM+uo2OeSe4URc7LcuS\nibD+JK2my0DoUOBlT6ZQOnnT3yPMpKHHGs+KxrS+a7SklDZVYajNKdRSeMc4Q18v\nAjWrybOS88kcs3WJyF1ISWIc9sPwcfsIKsSTA7JNQRl/7/ROzUWWb+ENAoGAa1vo\nZ7qvHzJhTGTitpph3IYvakkcGU1WpPnlZwealJdCweLraK4MsUsitCYtvU0s4Hrp\nj+KrluHhh/U5Fe1rYczCBFPG4lx+fUCv2X4YENh+VYhRuHIThB+pWxdS1hp8mORz\nz5iKSWo+V8r8ZF6f9r1bGHO8CaIAiNZaWK5Z2tsCgYEApQAAdIn9NTUXXB1WbsGp\nf5dbqvPbfB7dohQNC2/pC+Q+5JIq98eIHKS0n/4f2Pv9Vs74H2NDxFXymD66NYip\n6GYhFvdYrkOrzTP7gguRBBmDLrs/MM0Ps4e+XIFtiqE+hb9jDZNfihNJTvrM+dYj\nDZWtAdRNRb9K2Gc4bWED23U=\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-2ux0h@todolist-vtech.iam.gserviceaccount.com",
  "client_id": "112986723949804782703",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-2ux0h%40todolist-vtech.iam.gserviceaccount.com",
  "universe_domain": "googleapis.com"
}


if (!admin.apps.length) {
  try {
    const serviceAccountKey = serviceAccount as admin.ServiceAccount;
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccountKey),
    });
  } catch (error: any) {
    console.log('Firebase admin initialization error', error.stack);
  }
}

export default admin.firestore();
