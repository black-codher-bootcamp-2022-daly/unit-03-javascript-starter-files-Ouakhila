function getGrade(total) {
    if (total> 90) {
        console.log('Grade is: A+')
    } else if ( total> 80 && total<=90) {
        console.log('Grade is: A') 
    } else if ( total>70 && total<=80) {
        console.log('Grade is: B')
    } else if (total> 60 && total <= 70) {
        console.log('Grade is: C')
    } else if (total> 50 && total <=60) {
        console.log('Grade is: D')
    } else if (total> 40 && total <=50) {
        console.log('Grade is: E')
    } else if (total>30 && total<=40) {
        console.log('Grade is: F')
    } else {
        console.log('Fail')
    }
}