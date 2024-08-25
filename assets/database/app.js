function load() {
    try {
        const demail = localStorage.getItem('demail');
        const dpassword = localStorage.getItem('dpassword');

        document.getElementById("email").value = demail;
        document.getElementById("password").value = dpassword;
    } catch (e) {
        console.error("データの読み込み中にエラーが発生しました:", e);
        alert("データの読み込みに失敗しました");
    }
}

function save() {
    try {
        const demail = document.getElementById("email").value;
        const dpassword = document.getElementById("password").value;

        localStorage.setItem('demail', demail);
        localStorage.setItem('dpassword', dpassword);

        alert("データを保存しました");
        load(); // 保存後に表示を更新
    } catch (e) {
        console.error("データの保存中にエラーが発生しました:", e);
        alert("データを保存できませんでした");
    }
}

window.addEventListener('DOMContentLoaded', load);