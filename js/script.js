/* reference: https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/ */

const btn = document.querySelector(".btn-toggle");
// Select the stylesheet <link>
const theme = document.querySelector("#theme-link");

// Listen for a click on the button
btn.addEventListener("click", function () {
    if (theme.getAttribute("href") == "css/light-theme.css") {
        theme.href = "css/dark-theme.css";
        Cookies.set('themeMode', 'dark', { expires: 7 });
    } else {
        theme.href = "css/light-theme.css";
        Cookies.set('themeMode', 'light', { expires: 7 });
    }
});

console.log(Cookies.get('themeMode'));

if (Cookies.get('themeMode')== 'light') {
    theme.href = "css/light-theme.css";
} else {
    theme.href = "css/dark-theme.css";
}