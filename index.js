function receivesAFunction(callback){
  callback()
}

function returnsANamedFunction(){
  function bloop(){
    console.log('rawr XD')
  }
  return bloop
}

function returnsAnAnonymousFunction() {
  return function (){
    console.log("waaaa")
  }
}
