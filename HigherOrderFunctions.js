const invokeIf = (condition, fnTrue, fnFalse) => (condition) ? fnTrue() : fnFalse()

const showWelcome = () => console.log('Welcome!!!')
const showUnathorized = () => console.log('Unauthorized!!!')

invokeIf(true, showWelcome, showUnathorized)
invokeIf(false, showWelcome, showUnathorized)

