var axios = require('axios')

function getUserInfo(userId) {
  return axios.get(`https://api.github.com/users/${userId}`)
    .then(function(response){
      return response.data
    })
    .catch(function (error) {
      return undefined
  })
}

export default getUserInfo;

