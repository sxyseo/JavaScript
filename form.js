'use strict';

var name, password, password2, nameRegExp, passRegExp, error;
name = document.getElementById("username");
password = document.getElementById("password");
password2 = document.getElementById("password-2");
error = document.getElementById('test-error');

nameRegExp = /^[a-zA-Z0-9]{3,10}$/;
passRegExp = /^.{6,20}$/;

if (!nameRegExp.test(name.value)) {
    error.innerHTML = "用户名不正确!";
    return false;
}
if (!passRegExp.test(password.value) || !passRegExp.test(password2.value)) {
    error.innerHTML = "密码不正确!";
    return false;
}
if (password2.value !== password.value) {
    error.innerHTML = "两次输入密码不一致！";
    return false;
}
return true;
}