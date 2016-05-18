/**
 * @description status.js
 * @class status.js
 * @author wu xiao wei <836790625@qq.com> 2016/5/10
 */
var book=[
  {name:'javascript指导', text:'基础js代码'},
  {name:'javascript指导1', text:'基础js代码'},
  {name:'javascript指导2', text:'基础js代码'},
  {name:'javascript指导3', text:'基础js代码'}
];




//用户表
var users=[
  {userId:1, username:'admin', password:'123456', name:'小西', email:'836790625@qq.com', sex:'00', addTime:'2001-07-28', address:'', birthday:'1991-07-28', telephone:'15168352892', picture:''},
  {userId:2, username:'why', password:'1234567', name:'小东', email:'836790625@qq.com', sex:'00', addTime:'2001-07-28', address:'', birthday:'1991-07-28', telephone:'', picture:''},
  {userId:3, username:'go', password:'12345678', name:'小北', email:'836790625@qq.com', sex:'00', addTime:'2001-07-28', address:'', birthday:'1991-07-28', telephone:'', picture:''},
  {userId:4, username:'me', password:'123456789', name:'小中', email:'836790625@qq.com', sex:'00', addTime:'2001-07-28', address:'', birthday:'1991-07-28', telephone:'', picture:''}
];
var sex=[
  {text:'男', value:'00'},
  {text:'女', value:'00'}
];
//消息表
var messages=[
  {messageId:1, fromId:'小西', toId:'小东', content:'小西', type:'01', addTime:'2001-07-28'},
  {messageId:2, fromId:'小西', toId:'小东', content:'小西', type:'01', addTime:'2001-07-28'},
  {messageId:3, fromId:'小西', toId:'小东', content:'小西', type:'01', addTime:'2001-07-28'},
  {messageId:4, fromId:'小西', toId:'小东', content:'小西', type:'01', addTime:'2001-07-28'}
];
var messageType=[
  {text:'系统消息', value:'00'},
  {text:'好友消息', value:'01'}
];
//评论表
var comments=[
  {commentId:1, content:'评论', toContent:'回复评论', type:'01', addTime:'2001-07-28',toAddTime:'2001-07-29'},
  {commentId:2, content:'评论', toContent:'回复评论', type:'01', addTime:'2001-07-28',toAddTime:'2001-07-29'},
  {commentId:3, content:'评论', toContent:'回复评论', type:'01', addTime:'2001-07-28',toAddTime:'2001-07-29'},
  {commentId:4, content:'评论', toContent:'回复评论', type:'01', addTime:'2001-07-28',toAddTime:'2001-07-29'}
];
//敏感词表  敏感词  替代词
var words=[
  {wordId:1, word:'艹', replace:'草'},
  {wordId:2, word:'艹', replace:'草'},
  {wordId:3, word:'艹', replace:'草'}
];