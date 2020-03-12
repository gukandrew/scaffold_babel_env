let ok = 'false'

const setTrue = () => new Promise((resolve) => {
  setTimeout(() => {
    ok = 'true'
    resolve(ok)
  }, 2000)
})

console.log('first time ok is', ok)

setTrue().then(function (isok) {
  console.log('now, after 2 seconds ok is', ok, 'as well as isok', isok)
})
