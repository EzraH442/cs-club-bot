
const currentDate = () => {

    const date = new Date();
    let year = date.getFullYear().toString();
    let month = date.getMonth().toString();
    let day = date.getDate().toString();
    let result = year;
    if(month.length === 1){
        month = "0" + month;
    }

    result += month;
    
    if(day.length === 1){
        day = "0" + day;
    }

    result += day;

    return result;
}
export default currentDate;