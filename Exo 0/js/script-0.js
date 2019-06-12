document.addEventListener('DOMContentLoaded', () => {

    let skills = [ 'HTML', 'CSS', 'Javascript'];
    let msg = 'Bad response';
    let user = {
        name: 'Airtan',
        age: 54,
    };

    //Use of console

        // Show value

        console.log(skills);
        console.log({skills});
        console.table(skills);
        console.table(user);

        // Show error 

        console.error(msg);
        console.trace(msg);

        // CSS on console

        console.log('%c test', 'color: blue; font-size: 5rem')
});