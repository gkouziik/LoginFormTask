$(document).ready(() => {
    $("#LoginButton").click(() => {
        var username = $('#userName').val();
        var password = $('#password').val();
        $.ajax({
            url: '/login',
            data: {
                username: username,
                password: password
            },
            method: 'POST',
            contentType: 'application/x-www-form-urlencoded',
            success: (res) => {
                alert(res)
            },
            error: (err) => {
                console.log(err)
            }
        })
    })
})