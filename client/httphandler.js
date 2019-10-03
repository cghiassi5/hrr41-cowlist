(function (){
  const serverUrl = 'http://127.0.0.1:8080'



  const getCows = () => {
    $.get({
      url: serverUrl
      success: (cows) => {
        CowList.add(cows)
      }
      complete: () => {
        console.log('completed request')
      }
    })
  }
  getCows()
})