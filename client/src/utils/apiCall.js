const enterRabbitHole = async (date1, date2) => {
    try {
        const data = await fetch(`https://api.fda.gov/drug/enforcement.json?search=report_date:[${date1}+TO+${date2}]&limit=200`)
        const response = await data.json();

        return response;
    } catch (error) {
        console.log(error);
    }
}

export default enterRabbitHole;