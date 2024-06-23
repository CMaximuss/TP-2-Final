export function log(req, res, next) {
  console.log(`Method:`, req.method);
  console.log(`Url:`, req.url);
  next();
}

//  export default log
