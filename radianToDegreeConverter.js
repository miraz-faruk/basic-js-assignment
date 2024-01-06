// 1. convert radian to degree 

function radianToDegree(radian) {
    if(Number.isInteger(radian)){
        const degree = radian * 57.296; // 1 radian = 57.296 degree
        return degree;
    }
    else{
        return "Please provide a valid input";
    }
}

// const result = radianToDegree("3");
// console.log(result);