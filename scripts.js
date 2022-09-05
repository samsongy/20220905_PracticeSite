function btnClick() {
    const date = new Date()

    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const yyyy = String(date.getFullYear());
    const today = mm + '/' + dd + '/' + yyyy

    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    const time = hours + ":" + minutes + ":" + seconds;

    console.log("The button was pressed on " + today + " at " + time);
    alert("Button was pressed. Check console log for more details.");
}