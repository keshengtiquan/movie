const pool = require('../db/index')

exports.regUser = (req, res) => {

  const { tel, password } = req.body;
  // console.log(tel, password);

  if (!tel || !password) {
    res.json({
      flag: false,
      message: '用户名不合法'
    })
    return
  }

  const selectSql = 'select * from users where tel=?'
  const insertSql = 'insert into users(tel,password) values (?,?)'

  // pool.promise().query(sql, [tel])
  //   .then(([rows]) => {
  //     if (rows) {
  //       res.json({
  //         flag: false,
  //         msg: '用户已存在'
  //       })
  //     }
  //   })
  async function main(){
    const [rows] = await pool.promise().query(selectSql,tel)
    console.log(rows);
    if(rows.length >= 1){
      throw new Error('用户名已存在')
    }else{
      await pool.promise().query(insertSql,[tel,password])
    }
  }
  main().then(function(){
    res.json({
      flag: true,
      msg: '注册成功'
    })
  }).catch(function(err){
    res.json({
      flag: false,
      msg: err.message
    })
  })

}

exports.login = (req, res) => {
  res.send('login ok')
}