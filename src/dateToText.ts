import {months} from "./data";


const dateToText = (date: string) => {
    //"20221008" => "October 8th, 2022"
    
    const year = date.substring(0, 4), month = date.substring(4, 6), day = date.substring(6, 8);
    
    let result = months[parseInt(month)] + " ";

    if (day.substring(0, 1) !== "0") {
        result += day;
    } else {
        result += day.substring(1, 2);
    }

    if (day.substring(1, 2) === "1") {
        result += "st, ";
    } else if (day.substring(1, 2) === "2") {
        result += "nd, ";
    } else if (day.substring(1, 2) === "3") {
        result += "rd, ";
    } else {
        result += "th, ";
    }
    result += year;
    
    return result;
}


export default dateToText;


