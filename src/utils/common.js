export const blurhash = "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQfQfQfQfQfQfQfQfQfQfQfQfQfQfQfQfQfQfQfQfQfQfQfQfQfQfQfQfQfQfQfQfQ";

export const formatDate = (date)=>{
    let d = new Date(date);
    let year = d.getFullYear();
    let month = d.getMonth()+1;
    let dates = d.getDate();
    let hours = d.getHours();
    let minutes = d.getMinutes();
    let ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
}

export const getRoomId = (userId1, userId2)=>{
    return userId1 > userId2 ? `${userId1}-${userId2}` : `${userId2}-${userId1}`;
}
