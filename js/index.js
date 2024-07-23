var account = [
    {email: "mainh@gmail.com", password: "12345"},
    {email: "example@gmail.com", password: "1357"}
];

localStorage.setItem("account", JSON.stringify(account));

function handleLogin(event) {
    event.preventDefault();

    var _email = document.getElementById("email").value;
    var _password = document.getElementById("password").value;

    console.log("email:", _email);
    console.log("password:", _password);

    var accountCheck = false;
    for (const item of account) {
        if (item.email === _email && item.password === _password) {
            accountCheck = true;
            alert("Đăng nhập thành công");
            localStorage.setItem("account-login", _email);
            window.location.href = "index.html";
            break;
        }
    }
    if (!accountCheck) {
        alert("Sai email hoặc password");
    }
}

document.addEventListener("DOMContentLoaded", function() {
    var _html = "";
    account.forEach((item, index) => {
        _html += `
            <tr>
                <td scope="row">${index}</td>
                <td>Số khoá học ${item.email}</td>
                <td></td>
            </tr>`;
    });

    document.getElementById("hung").innerHTML = `
        <a name="" id="" class="btn btn-primary" href="#" role="button">Thêm mới</a>
        <div class="table-responsive">
            <table class="table table-primary">
                <thead>
                    <tr>
                        <th scope="col">Icon</th>
                        <th scope="col">Thống kê khoá học</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td scope="row">Icon</td>
                        <td>Thống kê lớp học</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td scope="row"></td>
                        <td>Số lớp học</td>
                        <td>20</td>
                    </tr>
                    <tr>
                        <td scope="row"></td>
                        <td>Số lớp đang hoạt động</td>
                        <td>10</td>
                    </tr>
                    <tr>
                        <td scope="row"></td>
                        <td>Số lớp đã kết thúc</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td scope="row"></td>
                        <td>Số lớp đang chờ</td>
                        <td>6</td>
                    </tr>
                    <tr>
                        <td scope="row">Icon</td>
                        <td>Thống kê sinh viên</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td scope="row"></td>
                        <td>Tổng số sinh viên</td>
                        <td>1000</td>
                    </tr>
                    <tr>
                        <td scope="row"></td>
                        <td>Số sinh viên chờ lớp</td>
                        <td>200</td>
                    </tr>
                    <tr>
                        <td scope="row"></td>
                        <td>Số sinh viên đang học</td>
                        <td>600</td>
                    </tr>
                    <tr>
                        <td scope="row">6</td>
                        <td>Bảo lưu/đình chỉ</td>
                        <td>50</td>
                    </tr>
                    <tr>
                        <td scope="row"></td>
                        <td>Số sinh viên tốt nghiệp</td>
                        <td>150</td>
                    </tr>
                    ${_html}
                </tbody>
            </table>
        </div>`;
});
