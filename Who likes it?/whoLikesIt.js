function whoLikeIt(arrayPost) {
  if(arrayPost.length <= 0 ){
    return "no one likes this";
  }else if(arrayPost.length === 1){
    return `${arrayPost[0]} likes this`;
  }else if(arrayPost.length === 2){
    return  `${arrayPost[0]} and ${arrayPost[1]} like this`
  }else if(arrayPost.length === 3){
    return  `${arrayPost[0]}, ${arrayPost[1]} and ${arrayPost[2]} like this`
  }else if(arrayPost.length >= 4){
    const numberLikePeople = arrayPost.length - 2
    return `${arrayPost[0]}, ${arrayPost[1]} and ${numberLikePeople} others like this`
  }

}

module.exports = whoLikeIt;

