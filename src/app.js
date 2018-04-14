import './style.styl'

const btn = document.querySelector('.loginForm__sbm');
let login = null;

btn.addEventListener('click', onClick);


const updateView = (function () {
    if (localStorage.getItem('login') !== null) {
        const holder = document.querySelector('h1');
        holder.innerHTML = ` Hello - ${localStorage.getItem('login')}`;
    }
})();

function onClick(event) {
    if (document.querySelector('.loginForm__loginInput').value === "" &&
        document.querySelector('.loginForm__passInput').value === "") {
        event.preventDefault();
        return false;
    }
    else {
        if (document.querySelector('.loginForm__loginInput').value !== ""
            && document.querySelector('.loginForm__passInput').value !== "") {

            const loginInputed = document.querySelector('.loginForm__loginInput');
            const passInputed = document.querySelector('.loginForm__passInput');

            const loginErrors = loginInputed.validity;
            const passErrors = passInputed.validity;
            if (loginErrors.patternMismatch === true
                && passErrors.patternMismatch === true) {
                event.preventDefault();
                return -1;
            }
            else {
                login = document.querySelector('.loginForm__loginInput').value;

                if (localStorage.getItem('login' !== null)) {
                    localStorage.setItem('login', null)
                }
                localStorage.setItem('login', login);
                updateView();
            }
        }

    }

}





