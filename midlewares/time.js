export function time (req, res, next) {
     console.log('Time:', Date.now());
     next();
   }